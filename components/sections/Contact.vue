<template>
  <div class="mt-5 text-4xl ml-5 space-x-4 text-center">
    <NuxtLink
      to="https://github.com/dcamrondunlap"
      target="_blank"
      class="inline-block text-current transition-transform duration-200 hover:scale-125 hover:text-cyan-400"
    >
      <span class="inline-block">
        <Icon name="mdi:github" />
      </span>
    </NuxtLink>
    <NuxtLink
      to="https://www.linkedin.com/in/d-camron-dunlap-48756b76/"
      target="_blank"
      class="inline-block text-current transition-transform duration-200 hover:scale-125 hover:text-cyan-400"
    >
      <span class="inline-block">
        <Icon name="mdi:linkedin" />
      </span>
    </NuxtLink>
    <a
      href="/Resume.pdf"
      target="_blank"
      class="inline-block text-current transition-transform duration-200 hover:scale-125 hover:text-cyan-400"
      title="resume"
    >
    <span class="inline-block">
      <Icon name="mdi:resume" />
    </span>
    </a>
  </div>
</template>

<script setup>

</script>
