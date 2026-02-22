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
          <div class="text-text-muted text-xs font-mono">user@portfolio: ~/contact</div>
          <div class="w-16"></div> <!-- Spacer for centering -->
        </div>

        <!-- Terminal Content -->
        <div v-if="profile" class="p-6 md:p-8 font-mono text-sm md:text-base">
          
          <p class="text-primary mb-2">$ contact --info</p>
          <h2 class="text-3xl font-bold mb-8 text-text-primary">Let's Connect</h2>
          
          <div class="space-y-8 pl-4 border-l-2 border-border/50">
            <div>
              <p class="text-primary mb-2">> location --current</p>
              <div class="flex items-center gap-2 text-text-secondary">
                <UIIcon name="map-pin" size="sm" class="text-primary" />
                <span>{{ profile.contact.location }}</span>
              </div>
            </div>
            
            <div>
              <p class="text-primary mb-2">> contact --email</p>
              <a :href="`mailto:${profile.contact.email}`" class="inline-block px-4 py-2 bg-primary/10 text-primary rounded border border-primary/20 hover:bg-primary/20 transition-colors">
                {{ profile.contact.email }}
              </a>
            </div>
            
            <div>
              <p class="text-primary mb-4">> ls ./social-links</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a 
                  v-for="social in profile.socialLinks" 
                  :key="social.platform"
                  :href="social.url" 
                  target="_blank"
                  class="flex items-center gap-3 px-4 py-3 bg-bg-tertiary rounded hover:bg-border transition-colors border border-border group"
                >
                  <div class="text-primary group-hover:text-success transition-colors">
                    <UIIcon :name="social.icon === 'github' ? 'code-bracket' : social.icon === 'linkedin' ? 'briefcase' : social.icon === 'globe' ? 'globe-alt' : 'envelope'" size="sm" />
                  </div>
                  <div>
                    <p class="font-semibold text-text-primary">{{ social.platform }}</p>
                  </div>
                </a>
              </div>
            </div>
            
            <div class="pt-4">
              <p class="text-primary mb-4">> ./send-message.sh</p>
              <form class="space-y-4 max-w-lg" @submit.prevent="handleSubmit">
                <div>
                  <label for="name" class="block text-sm font-mono text-text-secondary mb-1">Name:</label>
                  <input type="text" id="name" v-model="form.name" required class="w-full px-3 py-2 font-mono bg-black border border-border rounded text-text-primary focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors" />
                </div>
                <div>
                  <label for="email" class="block text-sm font-mono text-text-secondary mb-1">Email:</label>
                  <input type="email" id="email" v-model="form.email" required class="w-full px-3 py-2 font-mono bg-black border border-border rounded text-text-primary focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors" />
                </div>
                <div>
                  <label for="message" class="block text-sm font-mono text-text-secondary mb-1">Message:</label>
                  <textarea id="message" v-model="form.message" required rows="4" class="w-full px-3 py-2 font-mono bg-black border border-border rounded text-text-primary focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-colors resize-none"></textarea>
                </div>
                
                <button type="submit" class="w-full sm:w-auto px-6 py-2 font-mono text-bg-secondary font-bold bg-primary hover:bg-success rounded transition-colors">
                  EXECUTE
                </button>
                
                <!-- Success Message -->
                <div v-if="submitted" class="flex items-center gap-2 mt-4 text-success font-semibold">
                  <span class="animate-pulse">></span> Message successfully transmitted.
                </div>
              </form>
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
const { profile } = useConfig()

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  if (!profile.value?.contact?.email) return
  
  const subject = encodeURIComponent(`Portfolio Contact from ${form.value.name}`)
  const body = encodeURIComponent(`Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`)
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.value.contact.email}&su=${subject}&body=${body}`
  
  window.open(gmailUrl, '_blank')
  
  form.value = { name: '', email: '', subject: '', message: '' }
  submitted.value = true
  
  setTimeout(() => {
    submitted.value = false
  }, 4000)
}

useHead({
  title: computed(() => profile.value ? `Contact | ${profile.value.name}` : 'Contact'),
  meta: [{ name: 'description', content: 'Get in touch for opportunities and collaborations' }]
})
</script>
