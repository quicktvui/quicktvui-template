<template>
  <div class='index-root-view-css'>
    <qt-image class='index-root-logo-css' :src='logo'></qt-image>
    <qt-text class='index-root-text-view-css' gravity='center' text='等待投屏...' />
    <qt-text class='ip-text' gravity='center' :text='`设备名称: ${deviceName}`' />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import logo from '../assets/logo.png'

export default defineComponent({
  name: 'home',
  setup() {
    const deviceName = ref('客厅电视')

    return {
      logo,
      deviceName
    }
  }
})
</script>

<style>
.index-root-view-css {
  width: 1920px;
  height: 1080px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.index-root-text-view-css {
  width: 1920px;
  height: 100px;
  font-size: 60px;
  color: #ffffff;
  text-align: center;
  margin-top: 40px;
}

.ip-text {
  width: 1920px;
  height: 60px;
  font-size: 30px;
  color: #aaaaaa;
  text-align: center;
  margin-top: 20px;
}

.index-root-logo-css {
  width: 200px;
  height: 200px;
  margin-bottom: 30px;
}
</style>
