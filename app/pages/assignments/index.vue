<template>
  <div class="min-h-screen bg-bg-primary">
    <div v-if="assignments" class="section-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="heading-1 gradient-text mb-4">Assignments</h1>
        <p class="text-xl text-text-secondary">Open Recruitment Assignment Showcase</p>
      </div>

      <!-- Assignments Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <NuxtLink 
          v-for="assignment in assignments" 
          :key="assignment.id"
          :to="`/assignments/${assignment.id}`"
          class="glass-card card-lift group cursor-pointer"
        >
          <!-- Assignment Number Badge -->
          <div class="flex justify-between items-start mb-4">
            <span class="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold">
              Assignment {{ assignment.id }}
            </span>
            <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
              {{ assignment.type.toUpperCase() }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="text-2xl font-bold text-text-primary mb-3 group-hover:gradient-text transition-all">
            {{ assignment.title }}
          </h3>

          <!-- Description -->
          <p class="text-text-secondary mb-4">{{ assignment.description }}</p>

          <!-- Technologies (if website) -->
          <div v-if="assignment.technologies" class="flex flex-wrap gap-2 mb-4">
            <span v-for="tech in assignment.technologies" :key="tech" class="px-3 py-1 bg-secondary/20 text-secondary rounded-full text-sm">
              {{ tech }}
            </span>
          </div>

          <!-- View Button -->
          <div class="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
            View Details
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { assignments } = useConfig()

useHead({
  title: 'Assignments | Kemal Ardian',
  meta: [{ name: 'description', content: 'Open Recruitment Assignment Showcase' }]
})
</script>
