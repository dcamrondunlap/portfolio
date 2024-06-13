<template>
  <div class="navbar-wrapper">
    <header class="px-4 py-4 sm:px-24 rounded-full max-w-xs sm:w-64 flex">
      <button @click="isMenuOpen = !isMenuOpen" class="sm:hidden">
        <Icon name="ci:hamburger" class="text-cyan-400 text-xl" color="" />
      </button>
      <nav :class="{'hidden': !isMenuOpen}" class="sm:block mt-4 font-bold sm:mt-2 ">
        <ul class="menu border border-cyan-400 md:bg-transparent rounded-box p-2 space-y-2 sm:space-y-0 sm:space-x-4  sm:items-center active:text-bg-blue-950 text-xl ">
          <li>
            <NuxtLink
              to="/"
              class="flex items-center justify-center rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-cyan-400 hover:text-white tooltip tooltip-right"
              data-tip="About"
              >
              <Icon name="cib:about-me" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/experience"
              class="flex items-center justify-center rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-cyan-400 hover:text-white tooltip tooltip-right mr-3"
              data-tip="Experience"
              >
              <Icon name="mdi:connect-without-contact" />
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects"
              class="flex items-center justify-center rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-cyan-400 hover:text-white tooltip tooltip-right mr-3"
              data-tip="Projects"
              >
              <Icon name="grommet-icons:projects" />
            </NuxtLink>
          </li>

        </ul>
      </nav>
    </header>
  </div>
</template>

<script setup>
  const isMenuOpen = ref(false)


</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>
