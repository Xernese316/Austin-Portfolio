<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// --- REAL-TIME CLOCK ---
const currentTime = ref('');
let timer;

const updateTime = () => {
  currentTime.value = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });
};

onMounted(() => {
  updateTime();
  timer = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(timer);
});


// --- REAL-TIME WEATHER (from Open-Meteo) ---
const lat = 39.7392;
const lon = -104.9903;
const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,is_day&temperature_unit=fahrenheit`;

const { data: weather, pending, error } = useFetch(apiUrl, {
  lazy: true,
});


// --- State for tracking the current unit ---
const currentUnit = ref('fahrenheit');

// --- Computed properties for temperature ---
const temperatureFahrenheit = computed(() => Math.round(weather.value?.current?.temperature_2m) ?? 'N/A');
const temperatureCelsius = computed(() => {
  const f = weather.value?.current?.temperature_2m;
  if (f === null || f === undefined) return 'N/A';
  return Math.round((f - 32) * 5 / 9);
});
const displayTemperature = computed(() => {
  if (currentUnit.value === 'celsius') {
    return temperatureCelsius.value;
  }
  return temperatureFahrenheit.value;
});


// --- Weather condition and icon logic ---
const isDay = computed(() => weather.value?.current?.is_day === 1);

const weatherInfo = computed(() => {
  const code = weather.value?.current?.weather_code;
  const wmo = {
    0: { text: "Clear", icon: isDay.value ? 'heroicons:sun-20-solid' : 'heroicons:moon-20-solid' },
    1: { text: "Mainly Clear", icon: isDay.value ? 'heroicons:sun-20-solid' : 'heroicons:moon-20-solid' },
    2: { text: "Partly Cloudy", icon: isDay.value ? 'heroicons:cloud-sun-20-solid' : 'heroicons:cloud-moon-20-solid' },
    3: { text: "Overcast", icon: 'heroicons:cloud-20-solid' },
    45: { text: "Fog", icon: 'heroicons:bars-3-bottom-left-20-solid' },
    61: { text: "Slight Rain", icon: 'heroicons:cloud-rain-20-solid' },
    80: { text: "Rain Showers", icon: 'heroicons:cloud-rain-20-solid' },
    95: { text: "Thunderstorm", icon: 'heroicons:bolt-20-solid' },
  };
  return wmo[code] || { text: 'Clear', icon: 'heroicons:sparkles-20-solid' };
});

const condition = computed(() => weatherInfo.value.text);
const weatherIcon = computed(() => weatherInfo.value.icon);
</script>

<template>
  <section id="about" class="py-20 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-white">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold text-center mb-12">About Me</h2>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h3 class="text-3xl font-bold text-cyan-500 dark:text-cyan-400 mb-4">Education</h3>
          <div class="mb-6 bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm flex items-center">
            <img src="~/assets/images/cu-denver-logo.png" alt="University of Colorado Denver Logo" class="h-16 w-16 mr-4 object-contain">
            <div>
              <h4 class="text-xl font-semibold">University of Colorado Denver</h4>
              <p class="text-gray-500 dark:text-gray-400">Master of Science in Computer Science | Aug 2023 - May 2025</p>
              <p class="text-gray-500 dark:text-gray-400">GPA: 3.713/4</p>
            </div>
          </div>
          <div class="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm flex items-center">
            <img src="~/assets/images/pune-university-logo.png" alt="Savitribai Phule Pune University Logo" class="h-16 w-16 mr-4 object-contain">
            <div>
              <h4 class="text-xl font-semibold">Savitribai Phule Pune University</h4>
              <p class="text-gray-500 dark:text-gray-400">Bachelor of Engineering in Information Technology | June 2017 - May 2021</p>
            </div>
          </div>
        </div>

        <div 
          :class="isDay 
            ? 'bg-gradient-to-br from-sky-400 to-blue-600' 
            : 'bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900'"
          class="text-white p-6 rounded-2xl shadow-2xl min-h-[180px] transition-all duration-1000"
        >
          <div v-if="pending" class="flex items-center justify-center h-full">Loading weather...</div>
          <div v-else-if="error" class="flex items-center justify-center h-full text-red-400">Could not load weather data.</div>
          <div v-else-if="weather" class="flex flex-col h-full">
            <div class="flex justify-between items-start">
              <div class="flex items-start">
                
                <Icon 
                  :name="weatherIcon" 
                  :class="{ 'animate-pulse': condition === 'Clear' }"
                  class="text-7xl text-slate-100 flex-shrink-0" 
                />

                <div class="ml-4">
                  <div class="flex items-baseline gap-2">
                    <div class="text-6xl font-bold">{{ displayTemperature }}</div>
                    <div class="text-2xl font-light">
                      <button @click="currentUnit = 'celsius'" :class="currentUnit === 'celsius' ? 'text-white' : 'text-slate-300 hover:text-slate-100'" class="transition-colors">°C</button>
                      <span class="text-slate-400 mx-1">|</span>
                      <button @click="currentUnit = 'fahrenheit'" :class="currentUnit === 'fahrenheit' ? 'text-white' : 'text-slate-300 hover:text-slate-100'" class="transition-colors">°F</button>
                    </div>
                  </div>
                  <p class="text-2xl font-semibold mt-1">{{ condition }}</p>
                </div>
              </div>

              <div class="flex items-center text-sm bg-black/20 px-2 py-1 rounded-full flex-shrink-0">
                <Icon name="mdi:map-marker" class="mr-1" />
                Denver, CO
              </div>
            </div>

            <div class="mt-auto ml-2 text-sm text-slate-300">
              Local Time: {{ currentTime }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>