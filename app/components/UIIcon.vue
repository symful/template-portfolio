<template>
  <component :is="iconComponent" :class="iconClass" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  TrophyIcon,
  CodeBracketIcon,
  CodeBracketSquareIcon,
  StarIcon,
  AcademicCapIcon,
  ChevronRightIcon,
  CheckCircleIcon,
  SparklesIcon,
  GlobeAltIcon,
  DocumentArrowDownIcon,
  PhotoIcon,
  FilmIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  RocketLaunchIcon,
  ServerStackIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  DocumentTextIcon,
  BeakerIcon,
  CpuChipIcon,
  CircleStackIcon,
  CloudIcon,
  CommandLineIcon,
  CubeIcon,
  LightBulbIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  PencilIcon,
  TrashIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  XMarkIcon,
  ArrowRightIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/vue/24/solid'

const props = defineProps<{
  name: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  class?: string
}>()

const iconMap: Record<string, any> = {
  // Achievements & Recognition
  'trophy': TrophyIcon,
  'medal-silver': TrophyIcon,
  'medal-bronze': TrophyIcon,
  'medal': TrophyIcon,
  'star': StarIcon,
  'academic-cap': AcademicCapIcon,
  
  // Code & Development
  'code-bracket': CodeBracketIcon,
  'code-bracket-square': CodeBracketSquareIcon,
  'command-line': CommandLineIcon,
  'cpu-chip': CpuChipIcon,
  'beaker': BeakerIcon,
  
  // UI & Navigation
  'chevron-right': ChevronRightIcon,
  'check-circle': CheckCircleIcon,
  'sparkles': SparklesIcon,
  'arrow-right': ArrowRightIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-up': ArrowUpIcon,
  'arrow-down': ArrowDownIcon,
  'plus': PlusIcon,
  'x-mark': XMarkIcon,
  'magnifying-glass': MagnifyingGlassIcon,
  
  // Files & Documents
  'document-arrow-down': DocumentArrowDownIcon,
  'document-text': DocumentTextIcon,
  'photo': PhotoIcon,
  'film': FilmIcon,
  'folder': FolderIcon,
  
  // Technology & Infrastructure
  'globe-alt': GlobeAltIcon,
  'globe': GlobeAltIcon,
  'device-phone-mobile': DevicePhoneMobileIcon,
  'bolt': BoltIcon,
  'rocket-launch': RocketLaunchIcon,
  'server-stack': ServerStackIcon,
  'circle-stack': CircleStackIcon,
  'cloud': CloudIcon,
  'cube': CubeIcon,
  'shield-check': ShieldCheckIcon,
  
  // Business & Contact
  'briefcase': BriefcaseIcon,
  'envelope': EnvelopeIcon,
  
  // General
  'light-bulb': LightBulbIcon,
  'chart-bar': ChartBarIcon,
  'home': HomeIcon,
  'user': UserIcon,
  'cog': Cog6ToothIcon,
  'pencil': PencilIcon,
  'trash': TrashIcon,
}

const sizeClasses = {
  'sm': 'w-4 h-4',
  'md': 'w-6 h-6',
  'lg': 'w-8 h-8',
  'xl': 'w-12 h-12',
  '2xl': 'w-16 h-16',
}

const iconComponent = computed(() => iconMap[props.name] || StarIcon)
const iconClass = computed(() => {
  const sizeClass = sizeClasses[props.size || 'md']
  return `${sizeClass} ${props.class || ''}`
})
</script>
