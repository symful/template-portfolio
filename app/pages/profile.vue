<template>
  <div class="min-h-screen bg-bg-primary">
    <div v-if="profile && education && languages && experience" class="section-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="heading-1 gradient-text mb-4">About Me</h1>
        <p class="text-xl text-text-secondary max-w-3xl mx-auto">{{ profile.bio }}</p>
      </div>

      <!-- Education -->
      <section class="mb-16">
        <h2 class="heading-2 mb-8">Education</h2>
        <div class="space-y-6">
          <div v-for="edu in education" :key="edu.institution" class="glass-card card-lift">
            <h3 class="text-2xl font-bold text-text-primary mb-2">{{ edu.degree }}</h3>
            <p class="text-primary font-semibold mb-2">{{ edu.institution }}</p>
            <p class="text-text-secondary">{{ edu.period }} • {{ edu.location }}</p>
          </div>
        </div>
      </section>

      <!-- Languages -->
      <section class="mb-16">
        <h2 class="heading-2 mb-8">Language Proficiency</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="lang in languages" :key="lang.language" class="glass-card">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-bold text-text-primary">{{ lang.language }}</h3>
                <p class="text-primary">{{ lang.level }}</p>
              </div>
              <div class="text-right">
                <div class="text-2xl font-bold gradient-text">{{ lang.percentage.toFixed(1) }}%</div>
                <p class="text-sm text-text-secondary">{{ lang.certification }}</p>
              </div>
            </div>
            <div class="w-full bg-bg-secondary rounded-full h-3 overflow-hidden">
              <div 
                class="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                :style="{ width: `${lang.percentage}%` }"
              />
            </div>
            <p class="text-sm text-text-secondary mt-2">Score: {{ lang.score }}/{{ lang.maxScore }}</p>
          </div>
        </div>
      </section>

      <!-- Experience -->
      <section>
        <h2 class="heading-2 mb-8">Professional Experience</h2>
        <div class="space-y-6">
          <div v-for="exp in experience" :key="exp.title" class="glass-card">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-2xl font-bold text-text-primary">{{ exp.title }}</h3>
                <p class="text-primary font-semibold">{{ exp.company }}</p>
              </div>
              <div class="text-right">
                <p class="text-text-secondary">{{ exp.period }}</p>
                <p class="text-text-muted text-sm">{{ exp.location }}</p>
              </div>
            </div>
            <ul class="space-y-2 mb-4">
              <li v-for="(resp, idx) in exp.responsibilities" :key="idx" class="text-text-secondary flex items-start">
                <UIIcon name="chevron-right" size="sm" class="text-primary mr-2 mt-1 flex-shrink-0" />
                <span>{{ resp }}</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in exp.techStack" :key="tech" class="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
const { profile, education, languages, experience } = useConfig()

useHead({
  title: 'Profile | Kemal Ardian',
  meta: [{ name: 'description', content: 'Professional profile and background' }]
})
</script>
