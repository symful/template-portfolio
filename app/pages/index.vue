<template>
  <div class="min-h-screen bg-bg-primary">
    <!-- Hero Section -->
    <section class="section-container min-h-screen flex items-center justify-center relative overflow-hidden">
      <!-- 3D Particle Background (z-0 via fixed positioning) -->
      <ParticleBackground />
      
      <!-- Content with STRONG Glass Effect -->
      <div v-if="profile" class="relative z-10 text-center max-w-5xl mx-auto">
        <div class="glass-card bg-bg-secondary/40 backdrop-blur-xl p-10 md:p-16 border border-primary/20">
        <!-- Avatar with Backdrop -->
        <div class="mb-8 flex justify-center">
          <div class="bg-bg-secondary/50 backdrop-blur-xl rounded-full p-4 inline-block">
            <div class="relative group animate-float">
              <img 
                :src="profile.avatar" 
                :alt="profile.name"
                class="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-glow-lg"
              />
              <div class="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-30 transition-opacity duration-300 pointer-events-none" />
            </div>
          </div>
        </div>

        <!-- Animated Name with Text Shadow -->
        <h1 class="heading-1 gradient-text animate-slide-up" style="text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);">
          {{ profile.name }}
        </h1>

        <!-- Title with Text Shadow -->
        <p class="text-2xl md:text-3xl text-text-secondary mb-4 animate-slide-up" style="animation-delay: 0.1s; text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);">
          {{ profile.title }}
        </p>

        <!-- Tagline with Text Shadow -->
        <p class="text-xl md:text-2xl text-primary font-semibold mb-8 animate-slide-up" style="animation-delay: 0.2s; text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);">
          {{ profile.tagline }}
        </p>

        <!-- Bio with Text Shadow -->
        <p class="text-lg text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style="animation-delay: 0.3s; text-shadow: 0 1px 6px rgba(0, 0, 0, 0.7);">
          {{ profile.bio }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-wrap gap-4 justify-center animate-scale-in" style="animation-delay: 0.4s;">
          <NuxtLink to="/portfolio" class="btn-glow">
            View Projects
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-outline-glow">
            Get in Touch
          </NuxtLink>
        </div>
        </div>

      </div>
    </section>

    <!-- Quick Stats Section -->
    <section v-if="achievements" class="section-container">
      <div class="glass-card bg-bg-secondary/30 backdrop-blur-xl p-8 border border-primary/20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="text-4xl font-bold gradient-text mb-2">{{ achievements.length }}+</div>
            <div class="text-text-secondary">Achievements</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold gradient-text mb-2">100K+</div>
            <div class="text-text-secondary">Total App Users</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold gradient-text mb-2">4+</div>
            <div class="text-text-secondary">Years Experience</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Preview -->
    <section v-if="skills" class="section-container">
      <div class="glass-card bg-bg-secondary/30 backdrop-blur-xl p-8 border border-primary/20">
        <h2 class="heading-2 text-center mb-8">Tech Stack</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
          <div 
            v-for="(lang, index) in skills.languages.slice(0, 6)" 
            :key="lang.name"
            class="text-center p-4 rounded-lg hover:bg-bg-secondary/30 transition-all duration-300 hover:scale-105"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="flex justify-center mb-2">
              <UITechIcon :name="lang.name" :size="40" />
            </div>
            <div class="font-semibold text-text-primary">{{ lang.name }}</div>
            <div class="text-sm text-text-secondary">{{ lang.proficiency }}%</div>
          </div>
        </div>
        <div class="text-center">
          <NuxtLink to="/skills" class="btn-outline-glow">
            View All Skills
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Recent Achievements -->
    <section v-if="achievements" class="section-container">
      <div class="glass-card bg-bg-secondary/30 backdrop-blur-xl p-8 border border-primary/20">
        <h2 class="heading-2 text-center mb-8">Recent Achievements</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div 
            v-for="(achievement, index) in achievements.slice(0, 3)" 
            :key="achievement.title"
            class="p-6 rounded-lg hover:bg-bg-secondary/30 transition-all duration-300 hover:scale-105"
          >
            <div class="flex justify-center mb-4">
              <div 
                class="p-3 rounded-full"
                :class="{
                  'bg-gradient-to-br from-yellow-400 to-yellow-600': achievement.icon === 'trophy',
                  'bg-gradient-to-br from-gray-300 to-gray-500': achievement.icon === 'medal-silver',
                  'bg-gradient-to-br from-orange-400 to-orange-600': achievement.icon === 'medal-bronze',
                  'bg-gradient-to-br from-purple-500 to-pink-500': achievement.icon === 'code-bracket',
                  'bg-gradient-to-br from-blue-400 to-cyan-500': achievement.icon === 'star',
                }"
              >
                <UIIcon :name="achievement.icon" size="lg" class="text-white" />
              </div>
            </div>
            <h3 class="text-xl font-bold text-text-primary mb-2">{{ achievement.title }}</h3>
            <p class="text-primary font-semibold mb-2">{{ achievement.organization }}</p>
            <p class="text-text-secondary text-sm">{{ achievement.description }}</p>
          </div>
        </div>
        <div class="text-center">
          <NuxtLink to="/achievements" class="btn-outline-glow">
            View All Achievements
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-container text-center">
      <div class="glass-card max-w-3xl mx-auto p-12">
        <h2 class="heading-2 mb-4">Let's Work Together</h2>
        <p class="text-text-secondary mb-8 text-lg">
          I'm currently open to new opportunities and collaborations. Let's create something amazing!
        </p>
        <NuxtLink to="/contact" class="btn-glow">
          Get In Touch
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { profile, skills, achievements } = useConfig()

// SEO
useHead({
  title: 'Home | Kemal Ardian',
  meta: [
    { name: 'description', content: 'Full-Stack Software Engineer Portfolio' }
  ]
})
</script>
