<template>
  <div class="min-h-screen bg-[#1A1A1A] text-white pt-24 pb-12 font-sans overflow-hidden">
    <!-- Background Elements -->
    <div class="fixed inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#0A0A0A] -z-20"></div>
    <div class="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Back Link -->
      <NuxtLink to="/assignments" class="inline-flex items-center text-text-muted hover:text-primary transition-colors font-mono mb-6">
        <UIIcon name="arrow-left" size="sm" class="mr-2" />
        cd .. (Back to Assignments)
      </NuxtLink>

      <div v-if="assignment" class="bg-black/80 backdrop-blur-xl border border-border rounded-lg overflow-hidden shadow-2xl">
        <!-- Terminal Header -->
        <div class="bg-bg-secondary border-b border-border px-4 py-3 flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 rounded-full bg-error"></div>
            <div class="w-3 h-3 rounded-full bg-warning"></div>
            <div class="w-3 h-3 rounded-full bg-success"></div>
          </div>
          <div class="text-text-muted text-xs font-mono">user@portfolio: ~/assignments/{{ assignment.id }}</div>
          <div class="w-16"></div> <!-- Spacer for centering -->
        </div>

        <!-- Terminal Content -->
        <div class="p-6 md:p-8 font-mono text-sm md:text-base space-y-8">
          
          <!-- Command: cat target.md -->
          <div>
            <div class="flex items-center text-primary mb-6">
              <span class="mr-2">user@portfolio:~$</span>
              <span class="text-white">cat {{ assignment.id }}.md</span>
            </div>
            
            <div class="pl-4 border-l-2 border-border/50">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 mt-2">
                <h1 class="text-2xl md:text-3xl font-bold text-text-primary">{{ assignment.title }}</h1>
                <span class="px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded text-xs mt-2 sm:mt-0">{{ assignment.type }}</span>
              </div>
              
              <div v-if="assignment.duration" class="text-xs text-text-muted mb-6">Duration: {{ assignment.duration }}</div>
              
              <p class="text-text-secondary leading-relaxed mb-6 whitespace-pre-line">{{ assignment.description }}</p>

              <!-- Tech Stack -->
              <div class="mb-6" v-if="assignment.technologies && assignment.technologies.length > 0">
                <p class="text-primary mb-2">> echo $TECHNOLOGIES</p>
                <div class="flex flex-wrap gap-2">
                  <span 
                    v-for="tech in assignment.technologies" 
                    :key="tech"
                    class="px-2 py-1 bg-white/5 border border-white/10 rounded text-text-primary text-xs"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>

              <!-- Links -->
              <div class="mb-2">
                <p class="text-primary mb-2">> ls -l ./links</p>
                <div class="flex flex-wrap gap-4">
                  <a 
                    v-if="assignment.githubUrl"
                    :href="assignment.githubUrl"
                    target="_blank"
                    class="inline-flex items-center gap-2 px-4 py-2 bg-bg-tertiary hover:bg-white/10 border border-border rounded transition-colors text-text-primary"
                  >
                    <UIIcon name="code-bracket" size="sm" />
                    <span>View Repository</span>
                  </a>
                  <a 
                    v-if="assignment.liveUrl"
                    :href="assignment.liveUrl"
                    target="_blank"
                    class="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/20 text-primary rounded transition-colors"
                  >
                    <UIIcon name="globe-alt" size="sm" />
                    <span>Live Demo</span>
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

      <div v-else class="text-center py-20 font-mono text-error">
        <p>error: Assignment "{{ route.params.id }}" non-existent or inaccessible.</p>
        <NuxtLink to="/assignments" class="inline-block mt-4 text-text-secondary hover:text-white underline">Return</NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { assignments, profile } = useConfig()

const assignment = computed(() => {
  if (!assignments.value) return null
  const paramId = route.params.id
  if (!paramId) return null
  const targetId = Array.isArray(paramId) ? paramId[0] : paramId
  if (!targetId) return null
  return assignments.value.find((a: any) => a.id.toString() === targetId.toString())
})

useHead({
  title: () => assignment.value && profile.value ? `${assignment.value.title} | ${profile.value.name}` : 'Assignment Not Found',
  meta: [
    { name: 'description', content: () => assignment.value?.description || 'Assignment details' }
  ]
})
</script>
