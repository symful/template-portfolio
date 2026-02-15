import { onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const useScrollAnimations = () => {
  onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Small delay to ensure DOM is fully ready
    setTimeout(() => {
      // Fade up animations for cards
      gsap.utils.toArray('.glass-card').forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'top 60%',
            toggleActions: 'play none none reverse',
          },
          y: 40,
          autoAlpha: 0.3,
          duration: 0.8,
          ease: 'power3.out',
        })
      })

      // Stagger animation for grid items
      const grids = gsap.utils.toArray('.stagger-grid')
      grids.forEach((grid: any) => {
        const items = grid.querySelectorAll('.stagger-item')
        if (items.length > 0) {
          gsap.from(items, {
            scrollTrigger: {
              trigger: grid,
              start: 'top 75%',
            },
            y: 30,
            autoAlpha: 0.5,
            stagger: 0.08,
            duration: 0.6,
            ease: 'power2.out',
          })
        }
      })

      // Heading animations
      gsap.utils.toArray('.heading-2').forEach((heading: any) => {
        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: 'top 85%',
          },
          y: 20,
          autoAlpha: 0.5,
          duration: 0.6,
          ease: 'power2.out',
        })
      })
    }, 100)
  })

  onUnmounted(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })
}
