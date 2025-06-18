<script setup>
const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'Python', icon: 'logos:python' },
      { name: 'C++', icon: 'logos:c-plusplus' },
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      { name: 'Nuxtjs', icon: 'logos:nuxt-icon' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Flask', icon: 'logos:flask' },
      { name: 'HTML5', icon: 'logos:html-5' },
      { name: 'CSS3', icon: 'logos:css-3' },
    ]
  },
  {
    title: 'AI',
    skills: [
      { name: 'TensorFlow', icon: 'logos:tensorflow' },
      { name: 'PyTorch', icon: 'logos:pytorch-icon' },
      { name: 'NLP & Gen AI', icon: 'mdi:brain' },
    ]
  },
  {
    title: 'Data Analysis & Visualization',
    skills: [
      { name: 'Power BI', icon: 'file-icons:microsoftoffice' },
      { name: 'Pandas', icon: 'logos:pandas' },
      { name: 'Numpy', icon: 'logos:numpy' },
      { name: 'Matplotlib', icon: 'logos:matplotlib-icon' },
      { name: 'Excel', icon: 'file-icons:microsoft-excel' },
    ]
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MySQL', icon: 'logos:mysql' },
    ]
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Postman', icon: 'logos:postman-icon' },
      { name: 'Figma', icon: 'logos:figma' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'Google Colab', icon: 'logos:google-cloud' },
      { name: 'MS Office', icon: 'file-icons:microsoft-word' }, // Using Word as a general proxy
    ]
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'AWS', icon: 'logos:aws' },
    ]
  },
];
</script>

<template>
  <section id="skills" class="py-20 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-16">Technical Skills</h2>

      <div v-for="category in skillCategories" :key="category.title" class="mb-12">
        <h3 class="text-2xl font-bold text-cyan-500 dark:text-cyan-400 mb-6 text-center md:text-left">{{ category.title }}</h3>
        
        <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 gap-6 text-center">
          <div v-for="skill in category.skills" :key="skill.name" class="bg-white dark:bg-gray-700 p-4 rounded-lg flex flex-col items-center justify-center shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors transform hover:-translate-y-1">
            
            <Icon :name="skill.icon" class="h-12 w-12 mb-2" />

            <span class="text-sm font-semibold">{{ skill.name }}</span>
          </div>
        </div>
      </div>
      
    </div>
  </section>
</template>