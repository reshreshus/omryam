<template>
  <div class="w-cont">
    <the-header />
    <router-view class="py-5" />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="sass">
.w-cont
  @apply max-w-cont mx-auto
</style>
