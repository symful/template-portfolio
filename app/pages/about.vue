<template>
  <div class="min-h-screen bg-[#1A1A1A] text-white pt-24 pb-12 font-sans overflow-hidden">
    <!-- Background Elements -->
    <div class="fixed inset-0 bg-gradient-to-br from-[#1A1A1A] via-[#111111] to-[#0A0A0A] -z-20"></div>
    <div class="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 -z-10"></div>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      
      <!-- Terminal Window -->
      <div class="bg-black/80 backdrop-blur-xl border border-border rounded-lg overflow-hidden shadow-2xl">
        
        <!-- Terminal Header -->
        <div class="bg-bg-secondary border-b border-border px-4 py-3 flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-3 h-3 rounded-full bg-error"></div>
            <div class="w-3 h-3 rounded-full bg-warning"></div>
            <div class="w-3 h-3 rounded-full bg-success"></div>
          </div>
          <div class="text-text-muted text-xs font-mono">user@portfolio: ~/about</div>
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
              <h1 class="text-2xl md:text-3xl font-bold text-text-primary mb-2">{{ profile?.name }}</h1>
              <p class="text-primary">{{ profile?.title }}</p>
              <p class="mt-4 leading-relaxed">{{ profile?.bio }}</p>
            </div>
          </div>

          <!-- Command: cat skills.json -->
          <div>
            <div class="flex items-center text-primary mb-2">
              <span class="mr-2">user@portfolio:~$</span>
              <span class="text-white">cat skills.json | jq '.languages, .frameworks'</span>
            </div>
            <div class="pl-4 border-l-2 border-border/50 text-text-secondary mt-4">
              <div class="mb-4">
                <span class="text-accent">"languages":</span> [
                <div class="flex flex-wrap gap-2 mt-2 ml-4">
                  <span v-for="lang in skills?.languages" :key="lang.name" class="text-text-primary px-2 py-1 bg-white/5 rounded border border-white/10">
                    "{{ lang.name }}"
                  </span>
                </div>
                ]
              </div>
              <div>
                <span class="text-secondary">"frameworks":</span> [
                <div class="flex flex-wrap gap-2 mt-2 ml-4">
                  <span v-for="fw in skills?.frameworks" :key="fw.name" class="text-text-primary px-2 py-1 bg-white/5 rounded border border-white/10">
                    "{{ fw.name }}"
                  </span>
                </div>
                ]
              </div>
            </div>
          </div>

          <!-- Command: ./show_experience.sh -->
          <div v-if="experience && experience.length > 0">
            <div class="flex items-center text-primary mb-2">
              <span class="mr-2">user@portfolio:~$</span>
              <span class="text-white">./show_experience.sh</span>
            </div>
            <div class="pl-4 border-l-2 border-border/50 text-text-secondary mt-4 space-y-6">
              <div v-for="(exp, idx) in experience" :key="idx" class="relative">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 class="text-lg font-bold text-text-primary">{{ exp.title }} <span class="text-primary">@ {{ exp.company }}</span></h3>
                  <span class="text-text-muted text-sm mt-1 md:mt-0">{{ exp.period }}</span>
                </div>
                <p class="text-sm italic mb-2">{{ exp.location }}</p>
                <ul class="list-none space-y-1 ml-4 text-sm mt-2">
                   <li v-for="(desc, dIdx) in exp.responsibilities" :key="dIdx" class="flex">
                     <span class="text-primary mr-2">></span>
                     <span>{{ desc }}</span>
                   </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Command: ls -l achievements/ -->
          <div v-if="achievements && achievements.length > 0">
            <div class="flex items-center text-primary mb-2">
              <span class="mr-2">user@portfolio:~$</span>
              <span class="text-white">ls -l achievements/</span>
            </div>
            <div class="pl-4 border-l-2 border-border/50 text-text-secondary mt-4">
              <div class="w-full">
                <!-- Desktop Table -->
                <table class="hidden md:table w-full text-left text-sm">
                  <thead>
                    <tr class="text-text-muted border-b border-border/50">
                      <th class="py-2 pr-4 font-normal">Permissions</th>
                      <th class="py-2 pr-4 font-normal">Year</th>
                      <th class="py-2 pr-4 font-normal">Organization</th>
                      <th class="py-2 font-normal">Achievement_Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(ach, idx) in achievements" :key="idx" class="hover:bg-white/5 transition-colors">
                      <td class="py-3 pr-4 text-primary align-top">-rwxr-xr-x</td>
                      <td class="py-3 pr-4 text-secondary align-top">{{ ach.year }}</td>
                      <td class="py-3 pr-4 text-text-muted align-top max-w-[200px]" :title="ach.organization">{{ ach.organization }}</td>
                      <td class="py-3 text-text-primary align-top">
                        <div class="flex items-start gap-2">
                           <UIIcon :name="ach.icon" size="sm" class="text-accent mt-0.5 shrink-0" />
                           <div class="flex flex-wrap items-baseline gap-1">
                             <span>{{ ach.title }}</span> 
                             <span v-if="ach.rank" class="text-text-muted text-xs">({{ ach.rank }})</span>
                           </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <!-- Mobile List View -->
                <div class="md:hidden space-y-4">
                  <div v-for="(ach, idx) in achievements" :key="idx" class="bg-white/5 p-3 rounded border border-white/10">
                    <div class="flex items-start gap-3">
                      <UIIcon :name="ach.icon" size="sm" class="text-accent mt-0.5 shrink-0" />
                      <div class="flex-1 min-w-0">
                        <div class="text-text-primary font-bold break-words">{{ ach.title }} <span v-if="ach.rank" class="text-text-muted text-xs font-normal">({{ ach.rank }})</span></div>
                        <div class="text-text-muted text-xs mt-1 break-words">{{ ach.organization }}</div>
                        <div class="flex gap-3 mt-2 text-xs">
                           <span class="text-primary">-rwxr-xr-x</span>
                           <span class="text-secondary">{{ ach.year }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Command: cat organizations.txt -->
          <div v-if="organizations && organizations.length > 0">
            <div class="flex items-center text-primary mb-2">
              <span class="mr-2">user@portfolio:~$</span>
              <span class="text-white">cat organizations.txt</span>
            </div>
            <div class="pl-4 border-l-2 border-border/50 text-text-secondary mt-4 space-y-4">
               <div v-for="(org, idx) in organizations" :key="idx" class="bg-white/5 p-4 rounded border border-white/10">
                 <div class="flex flex-col sm:flex-row sm:justify-between items-start mb-2">
                   <div>
                     <span class="font-bold text-text-primary">{{ org.title }}</span>
                     <span class="text-primary ml-2">{{ org.organization }}</span>
                   </div>
                   <span class="text-sm text-text-muted sm:ml-4">{{ org.period }}</span>
                 </div>
                 <div class="text-sm space-y-1 mt-2">
                    <div v-for="(resp, rIdx) in org.responsibilities" :key="rIdx" class="flex items-start">
                       <span class="text-accent mr-2">-</span>
                       <span>{{ resp }}</span>
                    </div>
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
const { profile, skills, achievements, organizations, experience } = useConfig()

useHead({
  title: computed(() => profile.value ? `About | ${profile.value.name}` : 'About'),
  meta: [
    { name: 'description', content: 'About, Skills, Experience, and Achievements' }
  ]
})
</script>
