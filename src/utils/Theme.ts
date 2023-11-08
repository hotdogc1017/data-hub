import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const doToggle = useToggle(isDark)
let timeout = ref<NodeJS.Timeout>()
export const toggle = () => {
  clearTimeout(timeout.value)
  timeout.value = setTimeout(() => {
    doToggle()
  }, 300)
}
