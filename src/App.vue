<template>
  <div id="root">
    <es-router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'App',
  setup() {
    function onESCreate(app, params) {}

    return {
      onESCreate
    }
  }
})
</script>

<style scoped>
#root {
  width: 1920px;
  height: 1080px;
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
