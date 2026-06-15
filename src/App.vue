<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import PillarsSection from './components/PillarsSection.vue'
import MultiserverSection from './components/MultiserverSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import PersonasSection from './components/PersonasSection.vue'
import RoadmapSection from './components/RoadmapSection.vue'
import GetStartedSection from './components/GetStartedSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <PillarsSection />
    <MultiserverSection />
    <FeaturesSection />
    <PersonasSection />
    <RoadmapSection />
    <GetStartedSection />
  </main>
  <SiteFooter />
</template>
