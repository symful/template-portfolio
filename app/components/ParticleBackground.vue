<template>
  <div ref="containerRef" class="fixed inset-0 pointer-events-none" style="z-index: 0;" />
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const containerRef = ref<HTMLElement>()
let scene: any
let camera: any
let renderer: any
let particles: any
let animationId: number
let mouse = { x: 0, y: 0 }
let isInitialized = false

onMounted(async () => {
  if (isInitialized || !containerRef.value) {
    console.log('⏭️ Skipping initialization (already initialized or no container)')
    return
  }

  console.log('🚀 ParticleBackground mounted')

  try {
    const THREE = await import('three')
    console.log('✅ Three.js loaded')
    
    // Scene setup
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 50

    // Renderer with explicit canvas styling
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    
    // Apply styles to canvas to ensure it stays visible
    const canvas = renderer.domElement
    canvas.style.position = 'absolute'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.pointerEvents = 'none'
    canvas.style.zIndex = '0'
    
    containerRef.value.appendChild(canvas)
    console.log('✅ Canvas appended and styled')

    // Particles - subtle & elegant
    const particleCount = 1500
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    
    const color1 = new THREE.Color(0x10b981) // emerald
    const color2 = new THREE.Color(0x059669) // deep emerald
    const color3 = new THREE.Color(0x6ee7b7) // light emerald
    
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 120
      positions[i + 1] = (Math.random() - 0.5) * 120
      positions[i + 2] = (Math.random() - 0.5) * 120
      
      const rand = Math.random()
      const color = rand < 0.5 ? color1.clone().lerp(color2, Math.random()) : color1.clone().lerp(color3, Math.random())
      
      colors[i] = color.r
      colors[i + 1] = color.g
      colors[i + 2] = color.b
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 2.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.6, // Balance between visible and subtle
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })

    particles = new THREE.Points(geometry, material)
    scene.add(particles)

    console.log('✅ Particles created:', particleCount)

    // Mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      if (!containerRef.value || !renderer) {
        console.log('⚠️ Animation stopped - component unmounted')
        return
      }
      
      animationId = requestAnimationFrame(animate)
      
      particles.rotation.x += 0.0003
      particles.rotation.y += 0.0004
      particles.position.x += (mouse.x * 3 - particles.position.x) * 0.03
      particles.position.y += (mouse.y * 3 - particles.position.y) * 0.03
      
      renderer.render(scene, camera)
    }
    animate()

    console.log('✅ Animation started - particles should stay visible!')

    // Resize handler
    const handleResize = () => {
      if (!camera || !renderer) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    
    isInitialized = true
  } catch (error) {
    console.error('❌ Failed to initialize particles:', error)
  }
})

onBeforeUnmount(() => {
  console.log('🧹 Cleaning up particles...')
  isInitialized = false
  
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  
  if (renderer && containerRef.value) {
    renderer.dispose()
    if (renderer.domElement && containerRef.value.contains(renderer.domElement)) {
      containerRef.value.removeChild(renderer.domElement)
    }
  }
})
</script>
