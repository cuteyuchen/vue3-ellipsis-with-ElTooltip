<script lang="ts" name="vue3EllipsisWithElTooltip">
import { ref, onMounted, nextTick, defineComponent, h } from 'vue'
import { toolTipProps } from './type'
import { ElTooltip } from "element-plus"

export default defineComponent({
  name: 'XTextToolTip',
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    toolTipProps: {
      type: Object as () => toolTipProps,
      default: () => {
      }
    }
  },
  setup(props) {
    const XTextToolTipRef = ref<HTMLElement>()
    const showToolTip = ref(false)
    const XTextContentRef = ref(null)

    const updateOverflow = () => {
      if (XTextContentRef.value) {
        const el = XTextContentRef.value as HTMLElement
        showToolTip.value = el?.scrollWidth > el?.clientWidth;
      } else {
        showToolTip.value = false
      }
    }

    onMounted(() => {
      nextTick(() => {
        updateOverflow()
        new ResizeObserver(updateOverflow).observe(XTextToolTipRef.value as HTMLElement)
      })
    })

    return () => h('div', { ref: XTextToolTipRef, class: 'x-text-toolTip' }, [
      h(ElTooltip, {
        ...props.toolTipProps,
        disabled: !showToolTip.value,
        content: props.text
      }, [
        h('div', { ref: XTextContentRef, class: 'x-text-content' }, props.text)
      ])
    ])
  }
})

</script>

<style scoped>
.x-text-toolTip {
  width: 100%;
}

.x-text-toolTip .x-text-content {
  width: 100%;
  overflow: hidden;
  overflow-wrap: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: break-all;
}
</style>