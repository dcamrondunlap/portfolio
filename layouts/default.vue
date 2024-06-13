<template>
  <!-- <div class="flex flex-col bg-sky-950 min-h-screen text-zinc-300">
    <div class="grid grid-rows-3 grid-flow-col gap-20 p-10 max-w-4xl m-auto">
      <div class="md:row-span-2 md:flex md:flex-col md:justify-center md:space-y-4">
        <UiHero />
        <UiNavbar />
        <SectionsContact />
      </div>
      <div class="row-span-2 col-span-2 md:justify- md:ml-4 mt-10 md:overflow-auto">
        <slot class="" />
      </div>
    </div>
  </div> -->

  <div class="flex items-center justify-center min-h-screen bg-sky-950 text-zinc-300 p-10">
    <div class="grid grid-rows-3 md:grid-cols-4 gap-20 w-full md:max-w-screen-2xl h-full ml-96">
      <!-- Fixed sections -->
      <div class="md:col-span-1 flex flex-col space-y-4 sticky top-0 self-start">
        <UiHero />
        <UiNavbar />
        <SectionsContact />
      </div>
      <!-- Scrollable content area -->
      <div class="col-span-3 overflow-y-auto  p-4 mt-4 md:mt-0 md:ml-36 ">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

grid grid-rows-3 grid-flow-col gap-2 bg-sky-950 min-h-screen text-zinc-300
