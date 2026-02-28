<template>
  <div class="cast-page">
    <WebRTCPlayer
      ref="playerRef"
      class="player"
      :wsUrl="wsUrl"
      :play="true"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useESRouter } from '@extscreen/es3-router'

export default defineComponent({
  name: 'cast',
  setup() {
    const router = useESRouter()
    const wsUrl = ref('')
    const playerRef = ref(null)

    // Parse params from router
    const params = router.getParams()
    if (params && params.ws_url) {
        wsUrl.value = params.ws_url
    }

    return {
      wsUrl,
      playerRef,
    }
  },
})
</script>

<style scoped>
.cast-page {
  width: 1920px;
  height: 1080px;
  background-color: #000000;
}
.player {
  width: 1920px;
  height: 1080px;
}
</style>
