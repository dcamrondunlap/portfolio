<template>
  <div class="navbar text-3xl flex flex-row justify-center ml-5">
    <li>
      <NuxtLink
        to="/"
        class="flex items-center justify-center rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-cyan-400 hover:text-white tooltip tooltip-right mb-2"
        data-tip="Home"
        >
        <Icon name="mdi:home" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/about"
        class="flex items-center justify-center rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-cyan-400 hover:text-white tooltip tooltip-right mb-2"
        data-tip="About"
        >
        <Icon name="cib:about-me" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink
        to="/experience"
        class="flex items-center justify-center rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-cyan-400 hover:text-white tooltip tooltip-right mr-3 mb-2"
        data-tip="Experience"
        >
        <Icon name="mdi:connect-without-contact" />
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/projects"
        class="flex items-center justify-center rounded-full p-2 transition-colors duration-300 ease-in-out hover:bg-cyan-400 hover:text-white tooltip tooltip-right mr-3 mb-2"
        data-tip="Projects"
        >
        <Icon name="grommet-icons:projects" />
      </NuxtLink>
    </li>
  </div>
</template>

<script setup>



</script>

<style>
body {
  font-family: 'Inter', sans-serif;
}
</style>
