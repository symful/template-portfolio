<template>
  <Icon :icon="iconName" :width="size" :height="size" :class="className" />
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  name: string
  size?: number
  class?: string
}>(), {
  size: 48
})

// Map tech names to Iconify icon IDs
const techIconMap: Record<string, string> = {
  // Programming Languages
  'Dart': 'logos:dart',
  'TypeScript': 'logos:typescript-icon',
  'JavaScript': 'logos:javascript',
  'Go': 'logos:go',
  'Python': 'logos:python',
  'Java': 'logos:java',
  'Kotlin': 'logos:kotlin-icon',
  'Swift': 'logos:swift',
  'C++': 'logos:c-plusplus',
  'C#': 'logos:c-sharp',
  'C': 'logos:c',
  'Rust': 'logos:rust',
  'Ruby': 'logos:ruby',
  'PHP': 'logos:php',
  'SQL': 'carbon:sql',
  'HTML': 'logos:html-5',
  'CSS': 'logos:css-3',
  'WebAssembly': 'logos:webassembly',
  'Elixir': 'logos:elixir',
  'Scala': 'logos:scala',
  
  // Frameworks & Libraries - Frontend
  'Flutter': 'logos:flutter',
  'React': 'logos:react',
  'Vue': 'logos:vue',
  'Angular': 'logos:angular-icon',
  'Svelte': 'logos:svelte-icon',
  'Next.js': 'logos:nextjs-icon',
  'Nuxt': 'logos:nuxt-icon',
  'Tailwind': 'logos:tailwindcss-icon',
  'Bootstrap': 'logos:bootstrap',
  'Material-UI': 'logos:material-ui',
  
  // Frameworks & Libraries - Backend
  'Deno': 'logos:deno',
  'Node.js': 'logos:nodejs-icon',
  'Bun': 'logos:bun',
  'NestJS': 'logos:nestjs',
  'Express': 'logos:express',
  'Django': 'logos:django-icon',
  'Flask': 'logos:flask',
  'Laravel': 'logos:laravel',
  'Spring': 'logos:spring-icon',
  
  // Databases
  'Firebase': 'logos:firebase',
  'PostgreSQL': 'logos:postgresql',
  'MySQL': 'logos:mysql-icon',
  'MongoDB': 'logos:mongodb-icon',
  'Redis': 'logos:redis',
  'SQLite': 'logos:sqlite',
  'Supabase': 'logos:supabase-icon',
  
  // Cloud & DevOps
  'AWS': 'logos:aws',
  'Google Cloud': 'logos:google-cloud',
  'Azure': 'logos:azure-icon',
  'Docker': 'logos:docker-icon',
  'Kubernetes': 'logos:kubernetes',
  'Terraform': 'logos:terraform-icon',
  'Cloudflare': 'logos:cloudflare-icon',
  'Vercel': 'logos:vercel-icon',
  'Netlify': 'logos:netlify',
  
  // Tools & Platforms
  'Git': 'logos:git-icon',
  'GitHub': 'logos:github-icon',
  'GitLab': 'logos:gitlab',
  'VS Code': 'logos:visual-studio-code',
  'Figma': 'logos:figma',
  'Postman': 'logos:postman-icon',
  'Nginx': 'logos:nginx',
  'Linux': 'logos:linux-tux',
  
  // Testing
  'Jest': 'logos:jest',
  'Cypress': 'logos:cypress-icon',
  'Playwright': 'logos:playwright',
  
  // Concepts (using Carbon icons)
  'REST API': 'carbon:api',
  'GraphQL': 'logos:graphql',
  'Clean Architecture': 'carbon:cube',
  'State Management': 'carbon:data-structured',
  'ARCore': 'carbon:3d-cursor-alt',
  'WebSocket': 'carbon:network-4',
  'gRPC': 'carbon:connection-signal',
  'Microservices': 'carbon:microservices-1',
  'CI/CD': 'carbon:continuous-deployment',
  'API': 'carbon:api',
  'Serverless': 'carbon:cloud-foundry',
  'Machine Learning': 'carbon:machine-learning-model',
  'Blockchain': 'carbon:blockchain',
  
  // Generic Fallbacks
  'Code': 'carbon:code',
  'Database': 'carbon:data-base',
  'Cloud': 'carbon:cloud',
  'Mobile': 'carbon:mobile',
  'Web': 'carbon:web-services',
  'Security': 'carbon:security',
  'Performance': 'carbon:dashboard-reference',
}

const iconName = computed(() => techIconMap[props.name] || 'carbon:code')
const className = computed(() => props.class || '')
</script>
