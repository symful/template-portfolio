<template>
  <div class="min-h-screen bg-bg-primary">
    <div v-if="achievements" class="section-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="heading-1 gradient-text mb-4">Achievements & Awards</h1>
        <p class="text-xl text-text-secondary">Recognition and competitive programming success</p>
      </div>

      <!-- Achievements Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="achievement in achievements" :key="achievement.title" class="glass-card card-lift">
          <!-- Icon/Medal -->
          <div class="flex justify-center mb-4">
            <div 
              class="p-4 rounded-full"
              :class="{
                'bg-gradient-to-br from-yellow-400 to-yellow-600': achievement.icon === 'trophy',
                'bg-gradient-to-br from-gray-300 to-gray-500': achievement.icon === 'medal-silver',
                'bg-gradient-to-br from-orange-400 to-orange-600': achievement.icon === 'medal-bronze',
                'bg-gradient-to-br from-purple-500 to-pink-500': achievement.icon === 'code-bracket',
                'bg-gradient-to-br from-blue-400 to-cyan-500': achievement.icon === 'star',
              }"
            >
              <UIIcon :name="achievement.icon" size="xl" class="text-white" />
            </div>
          </div>

          <!-- Rank Badge -->
          <div class="text-center mb-4">
            <span class="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold text-sm">
              {{ achievement.rank }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="text-xl font-bold text-text-primary mb-2 text-center">{{ achievement.title }}</h3>

          <!-- Organization -->
          <p class="text-primary font-semibold mb-3 text-center">{{ achievement.organization }}</p>

          <!-- Description -->
          <p class="text-text-secondary text-sm text-center mb-4">{{ achievement.description }}</p>

          <!-- Year -->
          <div class="text-center">
            <span class="text-text-muted text-sm">{{ achievement.year }}</span>
          </div>
        </div>
      </div>

      <!-- Stats Summary -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="glass-card text-center">
          <div class="text-4xl font-bold gradient-text mb-2">{{ achievements.length }}</div>
          <div class="text-text-secondary">Total Achievements</div>
        </div>
        <div class="glass-card text-center">
          <div class="text-4xl font-bold gradient-text mb-2">{{ achievements.filter(a => a.type === 'competition').length }}</div>
          <div class="text-text-secondary">Competition Wins</div>
        </div>
        <div class="glass-card text-center">
          <div class="text-4xl font-bold gradient-text mb-2">{{ achievements.filter(a => a.type === 'award').length }}</div>
          <div class="text-text-secondary">Academic Awards</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useScrollAnimations } from '~/composables/useScrollAnimations'

const { achievements } = useConfig()
useScrollAnimations()

useHead({
  title: 'Achievements | Kemal Ardian',
  meta: [{ name: 'description', content: 'Awards and competitive programming achievements' }]
})
</script>
