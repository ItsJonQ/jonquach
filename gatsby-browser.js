import './src/utils/theme.css'

export const onRouteUpdate = () => {
  requestAnimationFrame(() => {
    window.scrollTo(0, 0)
  })
}
