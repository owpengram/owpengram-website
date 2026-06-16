<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import PillarsSection from './components/PillarsSection.vue'
import AvailableSection from './components/AvailableSection.vue'
import PlannedSection from './components/PlannedSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import MultiserverSection from './components/MultiserverSection.vue'
import ServerSection from './components/ServerSection.vue'
import PersonasSection from './components/PersonasSection.vue'
import GetStartedSection from './components/GetStartedSection.vue'
import SupportSection from './components/SupportSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <main>
    <HeroSection />
    <PillarsSection />
    <AvailableSection />
    <PlannedSection />
    <FeaturesSection />
    <MultiserverSection />
    <ServerSection />
    <PersonasSection />
    <GetStartedSection />
    <SupportSection />
    <ContactSection />
  </main>
  <SiteFooter />
</template>
