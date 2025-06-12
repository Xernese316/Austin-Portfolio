<!-- <template>
  <header class="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold">
        <a href="#home">Austin Varghese</a>
      </div>
      <div class="hidden md:flex items-center space-x-6">
        <a href="#about" class="hover:text-cyan-400 transition-colors">About</a>
        <a href="#experience" class="hover:text-cyan-400 transition-colors">Experience</a>
        <a href="#skills" class="hover:text-cyan-400 transition-colors">Skills</a>
        <a href="#projects" class="hover:text-cyan-400 transition-colors">Projects</a>
        <a href="#contact" class="hover:text-cyan-400 transition-colors">Contact</a>
      </div>
    </nav>
  </header>
</template>
 -->


 <script setup>
import { ref } from 'vue'

// This reactive variable will track if the user is hovering over the name
const isHovering = ref(false)
</script>

<template>
  <header class="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
    <nav class="container mx-auto px-6 py-4 flex justify-between items-center">
      <div class="text-2xl font-bold">
        <div 
          class="relative inline-block" 
          @mouseenter="isHovering = true" 
          @mouseleave="isHovering = false"
        >
          <a href="#home">Austin Varghese</a>

          <Transition name="fade">
            <div 
              v-if="isHovering" 
              class="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-max bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-700"
            >
              <div class="flex space-x-2">
                <img src="~/assets/images/pic1.jpg" alt="Photo of Austin 1" class="h-42 w-42 rounded-md object-cover">
                <img src="~/assets/images/pic2.jpg" alt="Photo of Austin 2" class="h42 w-42 rounded-md object-cover">
                <img src="~/assets/images/pic3.jpg" alt="Photo of Austin 3" class="h-42 w-42 rounded-md object-cover">
              </div>
            </div>
          </Transition>
        </div>
      </div>

      <div class="hidden md:flex items-center space-x-6">
        <a href="#about" class="hover:text-cyan-400 transition-colors">About</a>
        <a href="#experience" class="hover:text-cyan-400 transition-colors">Experience</a>
        <a href="#skills" class="hover:text-cyan-400 transition-colors">Skills</a>
        <a href="#projects" class="hover:text-cyan-400 transition-colors">Projects</a>
        <a href="#contact" class="hover:text-cyan-400 transition-colors">Contact</a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
/* This CSS creates the "slow" fade animation.
  The '.fade-' prefix matches the name="fade" attribute on the <Transition> component.
*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>