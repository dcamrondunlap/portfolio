<template>
  <NuxtLayout >
    <NuxtPage  />
  </NuxtLayout>
</template>

<style>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>

<script setup>
 useHead({
  title: `D'Camron Dunlap`,
  meta: [
    { name: 'description', content: 'This is my amazing site, let me tell you all about it.' },
    { property: 'og:title', content: 'My Amazing Site' },
    { property: 'og:description', content: 'This is my amazing site, let me tell you all about it.' },
    { property: 'og:image', content: '/D.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
  link: [
    { rel: 'icon', type: 'image/png', href: '/logo.png' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
    },
  ],
})
</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>
