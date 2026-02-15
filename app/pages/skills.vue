<template>
  <div class="min-h-screen bg-bg-primary">
    <div v-if="skills" class="section-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="heading-1 gradient-text mb-4">Tech Stack</h1>
        <p class="text-xl text-text-secondary">Technologies I work with daily</p>
      </div>

      <!-- Languages -->
      <section class="mb-20">
        <h2 class="heading-2 mb-10 text-center">Languages</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 stagger-grid">
          <div 
            v-for="lang in skills.languages" 
            :key="lang.name"
            class="group relative stagger-item"
          >
            <div class="glass-card text-center p-6 card-lift hover:scale-110 transition-all duration-300">
              <UITechIcon :name="lang.name" :size="56" class="mx-auto mb-4" />
              <div class="font-bold text-text-primary mb-1 text-sm">{{ lang.name }}</div>
              
              <!-- Proficiency Dots -->
              <div class="flex justify-center gap-1 mt-3">
                <div 
                  v-for="i in 5" 
                  :key="i"
                  class="w-1.5 h-1.5 rounded-full transition-colors"
                  :class="i <= Math.ceil(lang.proficiency / 20) ? 'bg-primary' : 'bg-bg-tertiary'"
                />
              </div>
              
              <!-- Tooltip -->
              <div class="absolute -top-12 left-1/2 -translate-x-1/2 bg-bg-secondary px-3 py-1.5 rounded-lg text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-border">
                <div class="text-text-primary font-semibold">{{ lang.proficiency }}%</div>
                <div class="text-text-muted text-xs">proficiency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Frameworks & Tools -->
      <section class="mb-20">
        <h2 class="heading-2 mb-10 text-center">Frameworks & Tools</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 stagger-grid">
          <div 
            v-for="framework in skills.frameworks" 
            :key="framework.name"
            class="group relative stagger-item"
          >
            <div class="glass-card text-center p-6 card-lift hover:scale-110 transition-all duration-300">
              <UITechIcon :name="framework.name" :size="56" class="mx-auto mb-4" />
              <div class="font-bold text-text-primary mb-1 text-sm">{{ framework.name }}</div>
              
              <!-- Proficiency Dots -->
              <div class="flex justify-center gap-1 mt-3">
                <div 
                  v-for="i in 5" 
                  :key="i"
                  class="w-1.5 h-1.5 rounded-full transition-colors"
                  :class="i <= Math.ceil(framework.proficiency / 20) ? 'bg-secondary' : 'bg-bg-tertiary'"
                />
              </div>
              
              <!-- Tooltip -->
              <div class="absolute -top-12 left-1/2 -translate-x-1/2 bg-bg-secondary px-3 py-1.5 rounded-lg text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-border">
                <div class="text-text-primary font-semibold">{{ framework.proficiency }}%</div>
                <div class="text-text-muted text-xs">proficiency</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Concepts & Practices -->
      <section>
        <h2 class="heading-2 mb-10 text-center">Concepts & Practices</h2>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 stagger-grid">
          <div 
            v-for="concept in skills.concepts" 
            :key="concept.name"
            class="group relative stagger-item"
          >
            <div class="glass-card text-center p-6 card-lift hover:scale-110 transition-all duration-300">
              <UITechIcon :name="concept.name" :size="56" class="mx-auto mb-4" />
              <div class="font-bold text-text-primary mb-1 text-sm">{{ concept.name }}</div>
              
              <!-- Proficiency Dots -->
              <div class="flex justify-center gap-1 mt-3">
                <div 
                  v-for="i in 5" 
                  :key="i"
                  class="w-1.5 h-1.5 rounded-full transition-colors"
                  :class="i <= Math.ceil(concept.proficiency / 20) ? 'bg-accent' : 'bg-bg-tertiary'"
                />
              </div>
              
              <!-- Tooltip -->
              <div class="absolute -top-12 left-1/2 -translate-x-1/2 bg-bg-secondary px-3 py-1.5 rounded-lg text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10 border border-border">
                <div class="text-text-primary font-semibold">{{ concept.proficiency }}%</div>
                <div class="text-text-muted text-xs">proficiency</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScrollAnimations } from '~/composables/useScrollAnimations'

const { skills } = useConfig()
useScrollAnimations()

useHead({
  title: 'Tech Stack | Kemal Ardian',
  meta: [{ name: 'description', content: 'My technology stack and expertise' }]
})
</script>
