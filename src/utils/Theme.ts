import {useDark, useToggle} from '@vueuse/core'

const isDark = useDark({
    selector: 'body',
    attribute: 'data-bs-theme',
    valueDark: 'dark',
    valueLight: 'light'
})
const toggle = useToggle(isDark)
let timeout: number | undefined

export function changeTheme() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
        toggle()
    }, 300)
}