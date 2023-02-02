<script setup lang="ts">
// @ts-nocheck

// const { name } = toRefs(props)
// const currentIcon = computed(() =>
//   defineAsyncComponent({
//     loader: () => import(`~/assets/icons/${props.name}.svg`),
//     loadingComponent: {
//       template: "<span></span>",
//     },
//     errorComponent: {
//       template: "<span>error</span>",
//     },
//     delay: 200,
//     timeout: 3000,
//     suspensible: true,
//   })
// );
// const attrs = useAttrs();

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
  <!--template v-html="icon" class="" /-->
  <!--component :is="currenticon" :class="attrs.class" /-->
</template>
