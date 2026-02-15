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
      const [
        profileData,
        educationData,
        languagesData,
        skillsData,
        experienceData,
        achievementsData,
        projectsData,
        organizationsData,
        assignmentsData,
        themeData
      ] = await Promise.all([
        $fetch<Profile>('/config/profile.json'),
        $fetch<Education[]>('/config/education.json'),
        $fetch<Language[]>('/config/languages.json'),
        $fetch<Skills>('/config/skills.json'),
        $fetch<Experience[]>('/config/experience.json'),
        $fetch<Achievement[]>('/config/achievements.json'),
        $fetch<Project[]>('/config/projects.json'),
        $fetch<Organization[]>('/config/organizations.json'),
        $fetch<Assignment[]>('/config/assignments.json'),
        $fetch<Theme>('/config/theme.json')
      ])

      profile.value = profileData
      education.value = educationData
      languages.value = languagesData
      skills.value = skillsData
      experience.value = experienceData
      achievements.value = achievementsData
      projects.value = projectsData
      organizations.value = organizationsData
      assignments.value = assignmentsData
      theme.value = themeData
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
