<template>
  <div class="min-h-screen bg-[#1A1A1A] text-white pt-24 pb-12 font-sans overflow-hidden">
    <!-- Background Elements -->
    <div class="fixed inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#0A0A0A] -z-20"></div>
    <div class="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Terminal Window -->
      <div v-if="profile" class="bg-black/80 backdrop-blur-xl border border-border rounded-lg overflow-hidden shadow-2xl mb-8 animate-slide-up">
        
        <!-- Terminal Header -->
        <div class="bg-bg-secondary border-b border-border px-4 py-3 flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 rounded-full bg-error"></div>
            <div class="w-3 h-3 rounded-full bg-warning"></div>
            <div class="w-3 h-3 rounded-full bg-success"></div>
          </div>
          <div class="text-text-muted text-xs font-mono">user@portfolio: ~/home</div>
          <div class="w-16"></div> <!-- Spacer for centering -->
        </div>

        <!-- Terminal Content -->
        <div class="p-6 md:p-8 font-mono text-sm md:text-base space-y-8">
          
          <!-- Command: whoami -->
          <div>
            <div class="flex items-center text-primary mb-2">
              <span class="mr-2">user@portfolio:~$</span>
              <span class="text-white">whoami</span>
            </div>
            <div class="pl-4 border-l-2 border-border/50 text-text-secondary">
              <h1 class="text-3xl md:text-4xl font-bold text-text-primary mb-2">{{ profile.name }}</h1>
              <p class="text-primary">{{ profile.title }}</p>
              <p class="mt-2">{{ profile.tagline }}</p>
            </div>
          </div>

          <!-- Command: cat bio.txt -->
          <div>
            <div class="flex items-center text-primary mb-2">
              <span class="mr-2">user@portfolio:~$</span>
              <span class="text-white">cat bio.txt</span>
            </div>
            <div class="pl-4 border-l-2 border-border/50 text-text-secondary mt-2">
              <p class="leading-relaxed">{{ profile.bio }}</p>
            </div>
          </div>

          <!-- Command: ls ./projects/top -->
          <div v-if="projects && projects.length">
            <div class="flex items-center text-primary mb-2">
              <span class="mr-2">user@portfolio:~$</span>
              <span class="text-white">ls ./projects/top -l</span>
            </div>
            <div class="pl-4 border-l-2 border-border/50 text-text-secondary mt-4 space-y-6">
              <div v-for="project in projects.slice(0, 2)" :key="project.id" class="bg-white/5 p-4 rounded border border-white/10 relative overflow-hidden group">
                <div class="relative z-10">
                  <div class="flex justify-between items-start mb-2">
                    <h3 class="text-lg font-bold text-text-primary">{{ project.title }}</h3>
                    <span class="text-xs px-2 py-1 bg-accent/10 border border-accent/20 text-accent rounded whitespace-nowrap">{{ project.category }}</span>
                  </div>
                  <p class="text-sm mb-4">{{ project.description }}</p>
                  
                  <div class="mb-3 text-sm">
                    <span class="text-primary mr-2">> features:</span>
                    <ul class="inline-flex flex-wrap gap-x-4 gap-y-1 mt-1 ml-4 sm:ml-0">
                      <li v-for="feature in project.features.slice(0, 3)" :key="feature" class="list-disc list-inside">{{ feature }}</li>
                    </ul>
                  </div>

                  <div class="flex flex-wrap gap-2 text-xs">
                    <span class="text-secondary mr-2">> stack:</span>
                    <span 
                      v-for="tech in project.techStack.slice(0, 5)" 
                      :key="tech"
                      class="text-text-primary px-2 py-0.5 bg-black/30 rounded border border-white/10"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="text-primary text-sm mt-2">
                 > View all projects in <NuxtLink to="/portfolio" class="underline hover:text-white transition-colors">~/portfolio</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Command: tail -n 3 achievements.log -->
          <div v-if="achievements && achievements.length">
            <div class="flex items-center text-primary mb-2">
              <span class="mr-2">user@portfolio:~$</span>
              <span class="text-white">tail -n 3 achievements.log</span>
            </div>
            <div class="pl-4 border-l-2 border-border/50 text-text-secondary mt-4 space-y-3">
              <div v-for="achievement in achievements.slice(0, 3)" :key="achievement.title" class="flex items-start gap-3">
                 <UIIcon :name="achievement.icon" size="sm" class="text-accent mt-0.5 shrink-0" />
                 <div>
                    <div class="text-text-primary font-bold">{{ achievement.title }}</div>
                    <div class="text-xs text-text-muted">{{ achievement.organization }} <span class="text-secondary">({{ achievement.year }})</span></div>
                 </div>
              </div>
              <div class="text-primary text-sm mt-4">
                 > View full records in <NuxtLink to="/about" class="underline hover:text-white transition-colors">~/about</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Command: contact --quick -->
          <div>
            <div class="flex items-center text-primary mb-2">
              <span class="mr-2">user@portfolio:~$</span>
              <span class="text-white">contact --quick</span>
            </div>
            <div class="pl-4 border-l-2 border-border/50 text-text-secondary mt-4">
               <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <a 
                   href="/contact"
                   class="flex items-center justify-center gap-2 px-4 py-3 bg-primary/10 text-primary rounded border border-primary/20 hover:bg-primary/20 transition-colors group"
                 >
                   <UIIcon name="envelope" size="sm" class="group-hover:scale-110 transition-transform" />
                   <span>Direct Message</span>
                 </a>
                 <div class="flex items-center gap-3">
                    <span class="text-text-muted">Links:</span>
                    <a 
                      v-for="social in profile.socialLinks.slice(0, 3)" 
                      :key="social.platform"
                      :href="social.url" 
                      target="_blank"
                      class="p-2 bg-white/5 rounded hover:bg-white/10 transition-colors text-text-primary"
                      :title="social.platform"
                    >
                      <UIIcon :name="social.icon === 'github' ? 'code-bracket' : social.icon === 'linkedin' ? 'briefcase' : social.icon === 'globe' ? 'globe-alt' : 'link'" size="sm" />
                    </a>
                 </div>
               </div>
            </div>
          </div>

          <!-- Blinking Cursor -->
          <div class="flex items-center text-primary mt-8">
            <span class="mr-2">user@portfolio:~$</span>
            <span class="w-2.5 h-5 bg-white/70 animate-pulse ml-1 inline-block"></span>
          </div>

        </div>
      </div>
    </div>
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
