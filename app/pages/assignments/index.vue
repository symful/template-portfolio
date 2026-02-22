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
          <div class="text-text-muted text-xs font-mono">user@portfolio: ~/assignments</div>
          <div class="w-16"></div> <!-- Spacer for centering -->
        </div>

        <!-- Terminal Content -->
        <div class="p-6 md:p-8 font-mono text-sm md:text-base space-y-8">
          
          <!-- Command: ls -la assignments/ -->
          <div>
            <div class="flex items-center text-primary mb-6">
              <span class="mr-2">user@portfolio:~$</span>
              <span class="text-white">ls -la assignments/</span>
            </div>
            
            <div v-if="assignments && assignments.length > 0" class="space-y-6 pl-4 border-l-2 border-border/50">
              <NuxtLink 
                v-for="assignment in assignments" 
                :key="assignment.id"
                :to="`/assignments/${assignment.id}`"
                class="block bg-bg-secondary/50 rounded-lg p-6 border border-border hover:border-primary/50 transition-all group"
              >
                <div class="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 class="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">{{ assignment.title }}</h3>
                  <div class="flex items-center gap-4 mt-2 md:mt-0">
                    <span class="text-xs px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded">{{ assignment.type }}</span>
                  </div>
                </div>
                
                <p class="text-text-secondary mb-4 line-clamp-2 leading-relaxed">{{ assignment.description }}</p>
                
                <div class="flex items-center justify-between">
                  <div class="flex flex-wrap gap-2" v-if="assignment.technologies">
                    <span 
                      v-for="tech in assignment.technologies.slice(0, 3)" 
                      :key="tech"
                      class="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-text-muted"
                    >
                      {{ tech }}
                    </span>
                    <span v-if="assignment.technologies.length > 3" class="text-xs px-2 py-1 text-text-muted">
                      +{{ assignment.technologies.length - 3 }} more
                    </span>
                  </div>
                  <UIIcon name="arrow-right" size="sm" class="text-primary opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1" />
                </div>
              </NuxtLink>
            </div>
            
            <div v-else class="pl-4 border-l-2 border-border/50 text-text-secondary">
              total 0
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
const { assignments, profile } = useConfig()

useHead({
  title: computed(() => profile.value ? `Assignments | ${profile.value.name}` : 'Assignments'),
  meta: [{ name: 'description', content: 'Assignments Showcase' }]
})
</script>
