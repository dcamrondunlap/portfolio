<template>
  <div class="bg-sky-950 min-h-screen text-zinc-300 flex justify-center items-center">
    <div>
      <NuxtLayout >
        <Header />
        <NuxtPage />
        <Footer />
      </NuxtLayout>
    </div>
  </div>
</template>

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
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.8s ease-in;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
