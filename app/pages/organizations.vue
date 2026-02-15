<template>
  <div class="min-h-screen bg-bg-primary">
    <div v-if="organizations" class="section-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="heading-1 gradient-text mb-4">Organizations</h1>
        <p class="text-xl text-text-secondary">Community involvement and leadership</p>
      </div>

      <!-- Organizations Timeline -->
      <div class="max-w-4xl mx-auto space-y-8">
        <div v-for="(org, index) in organizations" :key="org.organization" class="relative">
          <!-- Timeline Line -->
          <div v-if="index !== organizations.length - 1" class="absolute left-6 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

          <!-- Organization Card -->
          <div class="flex gap-6">
            <!-- Timeline Dot -->
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center shadow-glow">
                <div class="w-6 h-6 rounded-full bg-bg-primary" />
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1 glass-card card-lift">
              <!-- Current Badge -->
              <div v-if="org.current" class="mb-4">
                <span class="px-3 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-white text-sm font-semibold">
                  Current
                </span>
              </div>

              <!-- Title & Organization -->
              <h3 class="text-2xl font-bold text-text-primary mb-2">{{ org.title }}</h3>
              <p class="text-primary font-semibold text-lg mb-2">{{ org.organization }}</p>

              <!-- Period & Location -->
              <div class="flex flex-wrap gap-4 text-text-secondary mb-4">
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {{ org.period }}
                </span>
                <span class="flex items-center">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {{ org.location }}
                </span>
              </div>

              <!-- Responsibilities -->
              <div>
                <p class="text-sm text-text-muted mb-2 font-semibold">Key Responsibilities:</p>
                <ul class="space-y-2">
                  <li v-for="(resp, idx) in org.responsibilities" :key="idx" class="text-text-secondary flex items-start">
                    <UIIcon name="chevron-right" size="sm" class="text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>{{ resp }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { organizations } = useConfig()

useHead({
  title: 'Organizations | Kemal Ardian',
  meta: [{ name: 'description', content: 'Organizational involvement and community leadership' }]
})
</script>
