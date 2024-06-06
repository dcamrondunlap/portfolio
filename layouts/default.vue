<template>
  <div class="bg-blue-950 min-h-screen text-[#c8d2dd] flex flex-col">
    <UiHero />
    <UiNavbar />
    <SectionsContact />
    <div class="flex justify-center md:justify- md:ml-2 mt-10">
      <slot />
    </div>
  </div>
</template>

<script setup>

</script>
