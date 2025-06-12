<template>
  <!-- Set the section to relative positioning to act as a container for the absolute video -->
  <section id="home" class="relative h-screen flex items-center justify-center text-center overflow-hidden">
    
    <!-- Video Background -->
    <video 
      src="/technology.mp4"
      autoplay
      loop
      muted
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      Your browser does not support the video tag.
    </video>

    <!-- Overlay to darken the video and improve text readability -->
    <div class="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

    <!-- Content: Add z-20 to ensure it's on top of the video and overlay -->
    <div class="container mx-auto px-6 z-20">
      <span class="wave-hand text-8xl mb-2 inline-block" aria-label="Waving hand" role="img">👋</span>
      <h1 class="text-5xl md:text-7xl font-bold mb-4 text-white">Austin Varghese</h1>
      <p class="text-xl md:text-2xl text-cyan-400 mb-8">Software Engineer | Fullstack Enginner | Data Engineering/Scientsit/Analyst</p>
      <p class="max-w-3xl mx-auto mb-8 text-gray-200">
        A recent Master's graduate from the University of Colorado Denver in Computer Science with a passion for building data-driven applications. I am actively seeking full-time or internship roles in Software Engineering, Machine Learning, and Data Enginnering/Scientist/Analysis where I can contribute to a collaborative team and continue to learn new technologies.
      </p>
      <div class="space-x-4">
        <a href="https://linkedin.com/in/avarghese97" target="https://linkedin.com/in/avarghese97" class="text-3xl hover:text-cyan-400 transition-colors" aria-label="LinkedIn"><Icon name="mdi:linkedin" /></a>
        <a href="https://github.com/your-github-username" target="https://github.com/Xernese316" class="text-3xl hover:text-cyan-400 transition-colors" aria-label="GitHub"><Icon name="mdi:github" /></a>
        <a href="mailto:austin.2.varghese@ucdenver.edu" class="text-3xl hover:text-cyan-400 transition-colors" aria-label="Email"><Icon name="mdi:email" /></a>
        <a href="/Austin_Varghese_Resume_v5.pdf" target="./public/Austin_Varghese_Resume_v5.pdf" rel="noopener noreferrer" class="text-3xl hover:text-cyan-400 transition-colors" aria-label="View Resume"><Icon name="mdi:file-document-outline" /></a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.wave-hand {
  display: inline-block;
  animation: wave 2.5s infinite;
  transform-origin: 70% 70%;
}

@keyframes wave {
  0% { transform: rotate(0deg); }
  10% { transform: rotate(14deg); }
  20% { transform: rotate(-8deg); }
  30% { transform: rotate(14deg); }
  40% { transform: rotate(-4deg); }
  50% { transform: rotate(10deg); }
  60% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
}
</style>