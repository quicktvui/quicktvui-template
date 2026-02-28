import { defineComponent, h, ref } from 'vue'
import { Native } from '@extscreen/es3-vue'

const WebRTCPlayer = defineComponent({
  name: 'WebRTCPlayerComponent',
  props: {
    wsUrl: {
      type: String,
      default: '',
    },
    play: {
      type: Boolean,
      default: false,
    },
  },
  emits: [],
  setup(props, context) {
    const viewRef = ref()

    function reload() {
      Native.callUIFunction(viewRef.value, 'reload', [])
    }

    function release() {
      Native.callUIFunction(viewRef.value, 'release', [])
    }

    context.expose({
      reload,
      release,
    })

    return () => {
      const children = context.slots.default && context.slots.default()
      return h(
        'tv.huan.xiaoyou.webrtc.WebRTCPlayerComponent',
        {
          ref: viewRef,
          wsUrl: props.wsUrl,
          play: props.play,
        },
        children
      )
    }
  },
})

export default WebRTCPlayer
