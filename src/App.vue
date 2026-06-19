<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AvailableSection from './components/AvailableSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import MultiserverSection from './components/MultiserverSection.vue'
import ServerSection from './components/ServerSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <AvailableSection />
    <FeaturesSection />
    <MultiserverSection />
    <ServerSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
