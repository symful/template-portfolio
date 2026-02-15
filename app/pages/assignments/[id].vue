<template>
  <div class="min-h-screen bg-bg-primary">
    <div v-if="assignment" class="section-container">
      <!-- Back Button -->
      <NuxtLink to="/assignments" class="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Assignments
      </NuxtLink>

      <!-- Header -->
      <div class="glass-card mb-8">
        <div class="flex justify-between items-start mb-4">
          <span class="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold">
            Assignment {{ assignment.id }}
          </span>
          <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
            {{ assignment.type.toUpperCase() }}
          </span>
        </div>
        <h1 class="heading-2 mb-4">{{ assignment.title }}</h1>
        <p class="text-text-secondary text-lg">{{ assignment.description }}</p>
      </div>

      <!-- Objectives -->
      <div class="glass-card mb-8">
        <h2 class="text-2xl font-bold text-text-primary mb-4">Objectives</h2>
        <ul class="space-y-2">
          <li v-for="(obj, idx) in assignment.objectives" :key="idx" class="text-text-secondary flex items-start">
            <UIIcon name="check-circle" size="sm" class="text-primary mr-2 mt-0.5 flex-shrink-0" />
            <span>{{ obj }}</span>
          </li>
        </ul>
      </div>

      <!-- Results -->
      <div class="glass-card mb-8">
        <h2 class="text-2xl font-bold text-text-primary mb-4">Results</h2>
        <ul class="space-y-2">
          <li v-for="(result, idx) in assignment.results" :key="idx" class="text-text-secondary flex items-start">
            <UIIcon name="sparkles" size="sm" class="text-secondary mr-2 mt-0.5 flex-shrink-0" />
            <span>{{ result }}</span>
          </li>
        </ul>
      </div>

      <!-- Technologies (for website) -->
      <div v-if="assignment.technologies" class="glass-card mb-8">
        <h2 class="text-2xl font-bold text-text-primary mb-4">Technologies Used</h2>
        <div class="flex flex-wrap gap-3">
          <span v-for="tech in assignment.technologies" :key="tech" class="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-lg font-semibold">
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Links (for website) -->
      <div v-if="assignment.liveUrl || assignment.githubUrl" class="glass-card mb-8">
        <h2 class="text-2xl font-bold text-text-primary mb-4">Links</h2>
        <div class="flex flex-wrap gap-4">
          <a v-if="assignment.liveUrl" :href="assignment.liveUrl" target="_blank" class="btn-glow inline-flex items-center gap-2">
            <UIIcon name="globe-alt" size="sm" class="flex-shrink-0" />
            Live Demo
          </a>
          <a v-if="assignment.githubUrl" :href="assignment.githubUrl" target="_blank" class="btn-outline-glow inline-flex items-center gap-2">
            <UIIcon name="code-bracket-square" size="sm" class="flex-shrink-0" />
            GitHub Repository
          </a>
        </div>
      </div>

      <!-- File Download (for PDF/Image/Video) -->
      <div v-if="assignment.file" class="glass-card">
        <h2 class="text-2xl font-bold text-text-primary mb-4">View/Download</h2>
        
        <!-- PDF -->
        <div v-if="assignment.type === 'pdf'" class="space-y-4">
          <p class="text-text-secondary">Download the TOR document below:</p>
          <a :href="assignment.file" download class="btn-glow inline-flex items-center gap-2">
            <UIIcon name="document-arrow-down" size="sm" class="flex-shrink-0" />
            Download PDF
          </a>
        </div>

        <!-- Image -->
        <div v-if="assignment.type === 'image'" class="space-y-4">
          <img :src="assignment.file" :alt="assignment.title" class="w-full rounded-lg shadow-glow-lg" />
          <a :href="assignment.file" download class="btn-outline-glow inline-flex items-center gap-2">
            <UIIcon name="photo" size="sm" class="flex-shrink-0" />
            Download Image
          </a>
        </div>

        <!-- Video -->
        <div v-if="assignment.type === 'video'" class="space-y-4">
          <video controls class="w-full rounded-lg shadow-glow-lg">
            <source :src="assignment.file" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <a :href="assignment.file" download class="btn-outline-glow inline-flex items-center gap-2">
            <UIIcon name="film" size="sm" class="flex-shrink-0" />
            Download Video
          </a>
        </div>
      </div>
    </div>

    <!-- Not Found -->
    <div v-else class="section-container text-center">
      <h1 class="heading-1 gradient-text mb-4">Assignment Not Found</h1>
      <p class="text-text-secondary mb-8">The assignment you're looking for doesn't exist.</p>
      <NuxtLink to="/assignments" class="btn-glow">
        Back to Assignments
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { assignments } = useConfig()

const assignment = computed(() => {
  const id = parseInt(route.params.id as string)
  return assignments.value?.find(a => a.id === id)
})

useHead({
  title: () => assignment.value ? `${assignment.value.title} | Kemal Ardian` : 'Assignment Not Found',
  meta: [
    { name: 'description', content: () => assignment.value?.description || 'Assignment details' }
  ]
})
</script>
