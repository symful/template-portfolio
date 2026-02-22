import type { Profile, Education, Language, Skills, Experience, Achievement, Project, Organization, Assignment, Theme } from '~/types/config'

export const useConfig = () => {
  const profile = useState<Profile>('profile')
  const education = useState<Education[]>('education')
  const languages = useState<Language[]>('languages')
  const skills = useState<Skills>('skills')
  const experience = useState<Experience[]>('experience')
  const achievements = useState<Achievement[]>('achievements')
  const projects = useState<Project[]>('projects')
  const organizations = useState<Organization[]>('organizations')
  const assignments = useState<Assignment[]>('assignments')
  const theme = useState<Theme>('theme')

  const loadConfig = async () => {
    if (!profile.value) {
      try {
        const portfolioData = await $fetch<any>('/config/portfolio.json')

        profile.value = portfolioData.profile
        education.value = portfolioData.education || []
        languages.value = portfolioData.languages || []
        skills.value = portfolioData.skills || {}
        experience.value = portfolioData.experience || []
        achievements.value = portfolioData.achievements || []
        projects.value = portfolioData.projects || []
        organizations.value = portfolioData.organizations || []
        assignments.value = portfolioData.assignments || []
        theme.value = portfolioData.theme
      } catch (error) {
        console.error('Failed to load portfolio configuration:', error)
      }
    }

    return {
      profile: profile.value,
      education: education.value,
      languages: languages.value,
      skills: skills.value,
      experience: experience.value,
      achievements: achievements.value,
      projects: projects.value,
      organizations: organizations.value,
      assignments: assignments.value,
      theme: theme.value,
    }
  }

  return {
    profile,
    education,
    languages,
    skills,
    experience,
    achievements,
    projects,
    organizations,
    assignments,
    theme,
    loadConfig
  }
}
