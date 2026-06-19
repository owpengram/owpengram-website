<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BgIcons from './components/BgIcons.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AvailableSection from './components/AvailableSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import MultiserverSection from './components/MultiserverSection.vue'
import FaqSection from './components/FaqSection.vue'
import ServerSection from './components/ServerSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const progress = ref(0)
let ticking = false

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      progress.value = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <div class="scroll-track"><div class="scroll-thumb" :style="{ width: progress + '%' }"></div></div>
  <BgIcons />
  <div class="bg-orbs" aria-hidden="true">
    <div class="bg-orb bg-orb--1"></div>
    <div class="bg-orb bg-orb--2"></div>
    <div class="bg-orb bg-orb--3"></div>
  </div>
  <NavBar />
  <main>
    <HeroSection />
    <AvailableSection />
    <FeaturesSection />
    <MultiserverSection />
    <ServerSection />
    <FaqSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>

<style>
@keyframes orbFloat1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(60px, -40px) scale(1.08); }
  66% { transform: translate(-30px, 30px) scale(0.92); }
}

@keyframes orbFloat2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-50px, -35px) scale(0.93); }
  66% { transform: translate(45px, 25px) scale(1.07); }
}

@keyframes orbFloat3 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, 45px) scale(1.06); }
  66% { transform: translate(-55px, -25px) scale(0.94); }
}

.bg-orbs {
  position: fixed;
  inset: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.bg-orb--1 {
  width: 600px;
  height: 600px;
  top: -15%;
  left: -10%;
  background: color-mix(in srgb, var(--accent-bright) 30%, transparent);
  animation: orbFloat1 20s ease-in-out infinite;
}

.bg-orb--2 {
  width: 500px;
  height: 500px;
  top: 30%;
  right: -12%;
  background: color-mix(in srgb, var(--accent) 28%, transparent);
  animation: orbFloat2 24s ease-in-out infinite;
}

.bg-orb--3 {
  width: 450px;
  height: 450px;
  bottom: -15%;
  left: 35%;
  background: color-mix(in srgb, var(--accent-bright) 20%, transparent);
  animation: orbFloat3 28s ease-in-out infinite;
}

.scroll-track {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: 999;
  background: transparent;
}

.scroll-thumb {
  height: 100%;
  background: var(--grad);
  border-radius: 0 2px 2px 0;
  transition: width 0.1s linear;
  will-change: width;
}

@media (max-width: 720px) {
  .bg-orb { filter: blur(60px); }
  .bg-orb--1 { width: 300px; height: 300px; }
  .bg-orb--2 { width: 250px; height: 250px; }
  .bg-orb--3 { width: 200px; height: 200px; }
}

@media (prefers-reduced-motion: reduce) {
  .bg-orb { animation: none; }
}
</style>
