<template>
  <div class="min-h-screen bg-bg-primary">
    <div v-if="profile" class="section-container">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="heading-1 gradient-text mb-4">Get In Touch</h1>
        <p class="text-xl text-text-secondary">Let's create something amazing together</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <!-- Contact Information -->
        <div class="space-y-6">
          <div class="glass-card">
            <h2 class="text-2xl font-bold text-text-primary mb-6">Contact Information</h2>
            
            <!-- Email -->
            <div class="mb-6 flex items-start">
              <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-text-muted text-sm mb-1">Email</p>
                <a :href="`mailto:${profile.contact.email}`" class="text-text-primary hover:text-primary transition-colors">
                  {{ profile.contact.email }}
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="mb-6 flex items-start">
              <div class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p class="text-text-muted text-sm mb-1">Phone</p>
                <a :href="`tel:${profile.contact.phone}`" class="text-text-primary hover:text-secondary transition-colors">
                  {{ profile.contact.phone }}
                </a>
              </div>
            </div>

            <!-- Location -->
            <div class="mb-6 flex items-start">
              <div class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-text-muted text-sm mb-1">Location</p>
                <p class="text-text-primary">{{ profile.contact.location }}</p>
              </div>
            </div>

            <!-- Website -->
            <div class="flex items-start">
              <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <p class="text-text-muted text-sm mb-1">Website</p>
                <a :href="`https://${profile.contact.website}`" target="_blank" class="text-text-primary hover:text-primary transition-colors">
                  {{ profile.contact.website }}
                </a>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="glass-card">
            <h2 class="text-2xl font-bold text-text-primary mb-6">Connect With Me</h2>
            <div class="grid grid-cols-2 gap-4">
              <a 
                v-for="social in profile.socialLinks" 
                :key="social.platform"
                :href="social.url"
                target="_blank"
                class="glass-card card-lift text-center py-6 hover:bg-white/10 transition-all group"
              >
                <div class="flex justify-center mb-2">
                  <UIIcon 
                    :name="social.icon === 'github' ? 'code-bracket' : social.icon === 'linkedin' ? 'briefcase' : social.icon === 'globe' ? 'globe-alt' : 'envelope'" 
                    size="lg" 
                    class="text-primary"
                  />
                </div>
                <p class="font-semibold text-text-primary group-hover:gradient-text transition-all">
                  {{ social.platform }}
                </p>
              </a>
            </div>
          </div>

          <!-- Availability -->
          <div class="glass-card">
            <div class="flex items-center">
              <div class="w-3 h-3 rounded-full bg-green-500 animate-pulse mr-3" />
              <p class="text-text-primary font-semibold">Open to Opportunities</p>
            </div>
            <p class="text-text-secondary mt-2 text-sm">
              Currently available for freelance projects and full-time opportunities
            </p>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="glass-card">
          <h2 class="text-2xl font-bold text-text-primary mb-6">Send a Message</h2>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <!-- Name -->
            <div>
              <label for="name" class="block text-text-secondary mb-2">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-lg text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="Your name"
              />
            </div>

            <!-- Email -->
            <div>
              <label for="email" class="block text-text-secondary mb-2">Email</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-lg text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            <!-- Subject -->
            <div>
              <label for="subject" class="block text-text-secondary mb-2">Subject</label>
              <input
                id="subject"
                v-model="form.subject"
                type="text"
                required
                class="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-lg text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="What's this about?"
              />
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-text-secondary mb-2">Message</label>
              <textarea
                id="message"
                v-model="form.message"
                required
                rows="6"
                class="w-full px-4 py-3 bg-bg-secondary border border-white/10 rounded-lg text-text-primary focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <!-- Submit Button -->
            <button type="submit" class="btn-glow w-full" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>

            <!-- Success Message -->
            <div v-if="submitted" class="flex items-center justify-center gap-2 text-center text-green-500 font-semibold">
              <UIIcon name="check-circle" size="sm" class="flex-shrink-0" />
              Message sent! I'll get back to you soon.
            </div>
          </form>
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

const isSubmitting = ref(false)
const submitted = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  
  // Simulate form submission (in real app, send to backend/email service)
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // For demo purposes, just show success message
  // In production, integrate with email service or backend API
  console.log('Form submitted:', form.value)
  
  submitted.value = true
  isSubmitting.value = false
  
  // Reset form
  setTimeout(() => {
    form.value = { name: '', email: '', subject: '', message: '' }
    submitted.value = false
  }, 3000)
}

useHead({
  title: 'Contact | Kemal Ardian',
  meta: [{ name: 'description', content: 'Get in touch for opportunities and collaborations' }]
})
</script>
