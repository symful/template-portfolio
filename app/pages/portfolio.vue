<template>
  <div class="min-h-screen bg-bg-primary">
    <div v-if="projects" class="section-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="heading-1 gradient-text mb-4">Portfolio</h1>
        <p class="text-xl text-text-secondary mb-4">High-scale applications and projects</p>
        <div class="glass-card max-w-2xl mx-auto p-6">
          <p class="text-text-secondary">
            <span class="text-primary font-semibold">Note:</span> Specific project details and performance metrics are protected under confidentiality agreements and are available for discussion under NDA.
          </p>
        </div>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in projects" :key="project.id" class="glass-card card-lift group">
          <!-- Category Badge -->
          <div class="mb-4">
            <span class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
              {{ project.category }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="text-2xl font-bold text-text-primary mb-3 group-hover:gradient-text transition-all">
            {{ project.title }}
          </h3>

          <!-- Description -->
          <p class="text-text-secondary mb-4">{{ project.description }}</p>

          <!-- Tech Stack -->
          <div class="mb-4">
            <p class="text-sm text-text-muted mb-2">Tech Stack:</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in project.techStack" :key="tech" class="px-2 py-1 bg-secondary/20 text-secondary rounded text-xs">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Features -->
          <div class="mb-4">
            <p class="text-sm text-text-muted mb-2">Key Features:</p>
            <ul class="space-y-1">
              <li v-for="feature in project.features" :key="feature" class="text-text-secondary text-sm flex items-start">
                <UIIcon name="chevron-right" size="sm" class="text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- NDA Badge -->
          <div v-if="project.nda" class="mt-4 pt-4 border-t border-white/10">
            <div class="flex items-center text-text-muted text-sm">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Details available under NDA</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Tech Stack Summary -->
      <div class="mt-16 glass-card">
        <h2 class="text-2xl font-bold text-text-primary mb-6">Representative Tech Stack</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center">
            <div class="flex justify-center mb-2">
              <UIIcon name="device-phone-mobile" size="lg" class="text-primary" />
            </div>
            <p class="font-semibold text-text-primary">Flutter</p>
            <p class="text-sm text-text-secondary">Mobile & Web</p>
          </div>
          <div class="text-center">
            <div class="flex justify-center mb-2">
              <UIIcon name="bolt" size="lg" class="text-secondary" />
            </div>
            <p class="font-semibold text-text-primary">TypeScript</p>
            <p class="text-sm text-text-secondary">Backend & Frontend</p>
          </div>
          <div class="text-center">
            <div class="flex justify-center mb-2">
              <UIIcon name="rocket-launch" size="lg" class="text-accent" />
            </div>
            <p class="font-semibold text-text-primary">Go</p>
            <p class="text-sm text-text-secondary">High Performance</p>
          </div>
          <div class="text-center">
            <div class="flex justify-center mb-2">
              <UIIcon name="server-stack" size="lg" class="text-primary" />
            </div>
            <p class="font-semibold text-text-primary">PostgreSQL</p>
            <p class="text-sm text-text-secondary">Database</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { projects } = useConfig()

useHead({
  title: 'Portfolio | Kemal Ardian',
  meta: [{ name: 'description', content: 'Project portfolio and work samples' }]
})
</script>
