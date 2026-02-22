<template>
  <div class="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden font-sans">
    
    <!-- Hero Section -->
    <section v-if="profile" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-10"></div>
      
      <!-- Subtle Grid Background -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>
      
      <div class="relative z-10 max-w-4xl w-full mx-4 mt-16 md:mt-0">
        <div class="bg-black/50 backdrop-blur-lg rounded-lg border border-border p-6 animate-slide-up">
          
          <!-- Terminal Window Header -->
          <div class="flex items-center gap-2 mb-4">
            <div class="w-3 h-3 rounded-full bg-error"></div>
            <div class="w-3 h-3 rounded-full bg-warning"></div>
            <div class="w-3 h-3 rounded-full bg-success"></div>
          </div>
          
          <!-- Terminal Content -->
          <div class="font-mono">
            <p class="text-primary">$ whoami</p>
            <h1 class="text-4xl md:text-5xl font-bold mt-2 mb-4 text-text-primary">{{ profile.name }}</h1>
            <p class="text-text-secondary mb-2">{{ profile.title }} - {{ profile.tagline }}</p>
            <p class="text-primary mt-6 mb-2">$ cat bio.txt</p>
            <p class="text-text-muted text-sm md:text-base mb-6 leading-relaxed">{{ profile.bio }}</p>
            
            <p class="text-primary">$ skills</p>
            <div v-if="skills" class="flex flex-wrap gap-2 mt-2">
              <span 
                v-for="lang in skills.languages.slice(0, 8)" 
                :key="lang.name"
                class="px-3 py-1 bg-primary/10 rounded-md border border-primary/20 text-text-primary text-sm"
              >
                {{ lang.name }}
              </span>
              <span 
                v-for="framework in skills.frameworks.slice(0, 6)" 
                :key="framework.name"
                class="px-3 py-1 bg-secondary/10 rounded-md border border-secondary/20 text-text-primary text-sm"
              >
                {{ framework.name }}
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <!-- System Architecture & Projects Section -->
    <section v-if="projects && projects.length" class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center text-text-primary">System Architecture & Projects</h2>
        <div class="grid grid-cols-1 gap-8">
          
          <div 
            v-for="project in projects" 
            :key="project.id"
            class="bg-bg-secondary/50 rounded-xl p-6 backdrop-blur-sm border border-border animate-slide-up hover:border-primary/50 transition-colors"
          >
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-2xl font-bold text-text-primary">{{ project.title }}</h3>
              <span class="text-xs px-2 py-1 bg-accent/20 text-accent rounded whitespace-nowrap">{{ project.category }}</span>
            </div>
            
            <p class="text-text-secondary mb-6">{{ project.description }}</p>
            
            <div class="mb-6">
              <h4 class="text-lg font-semibold mb-2 text-text-primary">Key Features:</h4>
              <ul class="list-disc list-inside space-y-2 text-text-secondary">
                <li v-for="feature in project.features" :key="feature">{{ feature }}</li>
              </ul>
            </div>
            
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.techStack" 
                :key="tech"
                class="text-sm px-3 py-1 bg-secondary/10 rounded-full border border-secondary/20 text-text-primary"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>

    <!-- Impact & Achievements Section -->
    <section v-if="achievements && achievements.length" class="py-20 px-4 bg-bg-tertiary">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center text-text-primary">Impact & Achievements</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="achievement in achievements" 
            :key="achievement.title"
            class="bg-bg-secondary/50 rounded-lg p-6 border border-border hover:border-primary/30 transition-all"
          >
            <div class="flex justify-between items-center mb-4">
              <h4 class="text-lg font-semibold text-text-primary">{{ achievement.title }}</h4>
              <UIIcon :name="achievement.icon" size="sm" class="text-primary" />
            </div>
            <p class="text-sm text-primary mb-2 font-mono">{{ achievement.organization }} • {{ achievement.year }}</p>
            <ul class="mt-2 space-y-2 text-text-secondary text-sm">
              <li>• {{ achievement.rank }}</li>
              <li>• {{ achievement.description }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Let's Connect (Terminal) Section -->
    <section v-if="profile" class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <div class="relative p-8 rounded-2xl overflow-hidden backdrop-blur-lg border border-border bg-bg-secondary/50">
          <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
          
          <div class="relative z-10">
            <!-- Terminal Header -->
            <div class="flex items-center gap-2 mb-6">
              <div class="w-3 h-3 rounded-full bg-error"></div>
              <div class="w-3 h-3 rounded-full bg-warning"></div>
              <div class="w-3 h-3 rounded-full bg-success"></div>
            </div>
            
            <div class="font-mono">
              <p class="text-primary mb-2">$ contact --info</p>
              <h2 class="text-3xl font-bold mb-8 text-text-primary">Let's Connect</h2>
              
              <p class="text-primary mb-2">$ location --current</p>
              <div class="flex items-center gap-2 text-text-secondary mb-8">
                <UIIcon name="map-pin" size="sm" class="text-primary" />
                <span>{{ profile.contact.location }}</span>
              </div>
              
              <p class="text-primary mb-2">$ contact --email</p>
              <a :href="`mailto:${profile.contact.email}`" class="inline-block px-6 py-3 bg-primary/10 text-primary rounded-lg border border-primary/20 hover:bg-primary/20 transition-colors mb-8">
                {{ profile.contact.email }}
              </a>
              
              <p class="text-primary mb-4">$ ls ./social-links</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <a 
                  v-for="social in profile.socialLinks" 
                  :key="social.platform"
                  :href="social.url" 
                  target="_blank"
                  class="flex items-center gap-3 px-4 py-3 bg-bg-tertiary rounded-lg hover:bg-border transition-colors border border-border group"
                >
                  <div class="p-2 bg-border rounded-lg group-hover:bg-bg-secondary transition-colors text-primary">
                    <UIIcon :name="social.icon === 'github' ? 'code-bracket' : social.icon === 'linkedin' ? 'briefcase' : social.icon === 'globe' ? 'globe-alt' : 'envelope'" size="sm" />
                  </div>
                  <div>
                    <p class="font-semibold text-text-primary">{{ social.platform }}</p>
                  </div>
                </a>
              </div>
              
              <p class="text-primary mb-4">$ send-message</p>
              <form class="space-y-4" @submit.prevent="() => {}">
                <div>
                  <label for="name" class="block text-sm font-mono text-primary mb-2">$ name:</label>
                  <input type="text" id="name" required class="w-full px-3 py-2 font-mono bg-black/20 border border-primary/20 rounded-md text-text-primary focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" />
                </div>
                <div>
                  <label for="email" class="block text-sm font-mono text-primary mb-2">$ email:</label>
                  <input type="email" id="email" required class="w-full px-3 py-2 font-mono bg-black/20 border border-primary/20 rounded-md text-text-primary focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors" />
                </div>
                <div>
                  <label for="message" class="block text-sm font-mono text-primary mb-2">$ message:</label>
                  <textarea id="message" required rows="4" class="w-full px-3 py-2 font-mono bg-black/20 border border-primary/20 rounded-md text-text-primary focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"></textarea>
                </div>
                <NuxtLink to="/contact" class="block text-center w-full px-6 py-3 font-mono text-bg-secondary font-bold bg-primary hover:bg-success rounded-lg transition-colors">
                  SendMessage()
                </NuxtLink>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const { profile, skills, projects, achievements } = useConfig()

// SEO
useHead({
  title: computed(() => profile.value ? `Home | ${profile.value.name}` : 'Home'),
  meta: [
    { name: 'description', content: computed(() => profile.value?.bio || 'Full-Stack Software Engineer Portfolio') }
  ]
})
</script>
