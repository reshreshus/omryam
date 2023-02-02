<script setup lang="ts">
// @ts-nocheck

const props = defineProps<{
  name: string
  class: string
}>()

const icon = ref()

const iconsImport = import.meta.glob('assets/icons/**/**.svg', {
  as: 'raw',
  eager: false,
})

onMounted(async () => {
  try {
    const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]()
    const iconParent = document.createElement('span')
    iconParent.innerHTML = rawIcon
    const iconComp = iconParent.firstElementChild
    if (iconComp) {
      iconComp.classList.add(...props.class.split(' '))
      icon.value.outerHTML = iconComp.outerHTML
    }
  } catch (e) {
    console.error(`Icon '${props.name}' doesn't exist in 'assets/icons'`, e)
  }
})
</script>

<template>
  <span ref="icon" />
</template>
