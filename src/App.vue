<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useMousePosition } from './composables/useMousePosition.js'
import BgIcons from './components/BgIcons.vue'
import CursorGlow from './components/CursorGlow.vue'
import ScrollTopBtn from './components/ScrollTopBtn.vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ReleaseStrip from './components/ReleaseStrip.vue'
import AvailableSection from './components/AvailableSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import MultiserverSection from './components/MultiserverSection.vue'
import FaqSection from './components/FaqSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import ServerSection from './components/ServerSection.vue'
import SecuritySection from './components/SecuritySection.vue'
import CompareSection from './components/CompareSection.vue'
import DownloadSection from './components/DownloadSection.vue'
import ContentSection from './components/ContentSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'

const mouse = useMousePosition()
const orbX = computed(() => (mouse.x - 0.5) * 30)
const orbY = computed(() => (mouse.y - 0.5) * 30)

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
  <CursorGlow />
  <BgIcons />
  <div class="bg-orbs" aria-hidden="true" :style="{ transform: 'translate(' + orbX + 'px, ' + orbY + 'px)' }">
    <div class="bg-orb bg-orb--1"></div>
    <div class="bg-orb bg-orb--2"></div>
    <div class="bg-orb bg-orb--3"></div>
  </div>
  <NavBar />
  <!-- id is the skip link's target; it is the first thing a keyboard or
       screen-reader visitor reaches. -->
  <main id="main">
    <HeroSection />
    <ReleaseStrip />
    <AvailableSection />
    <FeaturesSection />
    <MultiserverSection />
    <ServerSection />
    <SecuritySection />
    <CompareSection />
    <DownloadSection />
    <ContentSection />
    <FaqSection />
    <ServicesSection />
    <ContactSection />
  </main>
  <ScrollTopBtn />
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
  inset: -60px;
  z-index: -1;
  pointer-events: none;
  transition: transform 0.3s ease-out;
  will-change: transform;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  pointer-events: none;
}

.bg-orb--1 {
  width: 700px;
  height: 700px;
  top: -15%;
  left: -10%;
  background: color-mix(in srgb, var(--accent-bright) 40%, transparent);
  animation: orbFloat1 20s ease-in-out infinite;
}

.bg-orb--2 {
  width: 600px;
  height: 600px;
  top: 25%;
  right: -15%;
  background: color-mix(in srgb, var(--accent) 38%, transparent);
  animation: orbFloat2 24s ease-in-out infinite;
}

.bg-orb--3 {
  width: 500px;
  height: 500px;
  bottom: -15%;
  left: 30%;
  background: color-mix(in srgb, var(--accent-bright) 30%, transparent);
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
  .bg-orb--1 { width: 350px; height: 350px; }
  .bg-orb--2 { width: 300px; height: 300px; }
  .bg-orb--3 { width: 250px; height: 250px; }
}

@media (prefers-reduced-motion: reduce) {
  .bg-orb { animation: none; }
}
</style>
