<template>
  <div class="min-h-screen bg-[#1A1A1A] text-white pt-24 pb-12 font-sans overflow-hidden">
    <!-- Background Elements -->
    <div class="fixed inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#0A0A0A] -z-20"></div>
    <div class="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10"></div>

    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Terminal Window -->
      <div class="bg-black/80 backdrop-blur-xl border border-border rounded-lg overflow-hidden shadow-2xl">
        
        <!-- Terminal Header -->
        <div class="bg-bg-secondary border-b border-border px-4 py-3 flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 rounded-full bg-error"></div>
            <div class="w-3 h-3 rounded-full bg-warning"></div>
            <div class="w-3 h-3 rounded-full bg-success"></div>
          </div>
          <div class="text-text-muted text-xs font-mono">user@portfolio: ~/projects/portfolio</div>
          <div class="w-16"></div> <!-- Spacer for centering -->
        </div>

        <!-- Terminal Content -->
        <div class="p-6 md:p-8 font-mono text-sm md:text-base space-y-8">
          
          <!-- Command: ls -la projects/ -->
          <div>
            <div class="flex items-center text-primary mb-6">
              <span class="mr-2">user@portfolio:~$</span>
              <span class="text-white">ls -la projects/</span>
            </div>
            
            <div v-if="projects" class="space-y-8 pl-4 border-l-2 border-border/50">
              <div v-for="project in projects" :key="project.id">
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 class="text-xl md:text-2xl font-bold text-text-primary">{{ project.title }}</h3>
                  <span class="text-xs px-2 py-1 bg-accent/20 text-accent rounded whitespace-nowrap mt-2 md:mt-0">{{ project.category }}</span>
                </div>
                
                <p class="text-text-secondary mb-4 leading-relaxed">{{ project.description }}</p>
                
                <div class="mb-4">
                  <h4 class="text-primary mb-2">> cat features.md</h4>
                  <ul class="list-none space-y-1 ml-4 text-text-secondary">
                    <li v-for="feature in project.features" :key="feature" class="flex items-start">
                      <span class="text-primary mr-2">-</span>
                      <span>{{ feature }}</span>
                    </li>
                  </ul>
                </div>
                
                <div class="flex flex-wrap gap-2 mt-4">
                  <span 
                    v-for="tech in project.techStack" 
                    :key="tech"
                    class="text-xs px-2 py-1 bg-secondary/10 rounded border border-secondary/20 text-text-primary"
                  >
                    {{ tech }}
                  </span>
                </div>
                
                <!-- NDA Badge -->
                <div v-if="project.nda" class="mt-4 pt-2 border-t border-border/50">
                  <div class="flex items-center text-warning text-xs">
                    <UIIcon name="shield-check" size="sm" class="mr-1" />
                    <span>[RESTRICTED] Source code available under NDA</span>
                  </div>
                </div>
                
                <div v-else-if="projects && projects.length > 0 && project.id !== projects[projects.length - 1]?.id" class="my-8 border-b border-border/30"></div>
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
const { projects, profile } = useConfig()

useHead({
  title: computed(() => profile.value ? `Portfolio | ${profile.value.name}` : 'Portfolio'),
  meta: [{ name: 'description', content: 'Project portfolio and work samples' }]
})
</script>
