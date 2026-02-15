<template>
  <nav class="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-lg border-b border-white/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center group">
          <span class="text-text-primary font-bold text-xl group-hover:text-primary transition-colors">
            Kemal Ardian
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-4 py-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all relative group"
            active-class="text-primary bg-white/10"
          >
            {{ link.name }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg text-text-primary hover:bg-white/5 transition-all"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-white/10 bg-bg-secondary/95 backdrop-blur-lg">
        <div class="px-4 py-4 space-y-2">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            @click="mobileMenuOpen = false"
            class="block px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5 transition-all"
            active-class="text-primary bg-white/10"
          >
            {{ link.name }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>

  <!-- Spacer to prevent content from going under fixed nav -->
  <div class="h-16" />
</template>

<script setup lang="ts">
const mobileMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Profile', path: '/profile' },
  { name: 'Skills', path: '/skills' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Assignments', path: '/assignments' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Organizations', path: '/organizations' },
  { name: 'Contact', path: '/contact' },
]

// Close mobile menu on route change
const route = useRoute()
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})
</script>
