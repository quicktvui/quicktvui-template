<template>
  <div class='index-root-view-css'>
    <qt-image class='index-root-logo-css' :src='logo'></qt-image>
    <qt-text class='index-root-text-view-css' gravity='center' text='Hello World!' />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from '@vue/runtime-core'
import logo from '../assets/logo.png'

export default defineComponent({
  name: 'home',
  setup() {
    return {
      logo
    }
  }
})
</script>

<style>
.index-root-view-css {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.index-root-text-view-css {
  width: 400px;
  height: 60px;
  font-size: 50px;
  color: black;
  text-align: center;
}

.index-root-logo-css {
  width: 128px;
  height: 128px;
  margin-bottom: 30px;
}

</style>
