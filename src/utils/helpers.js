import get from 'lodash/get'

export function formatReadingTime(minutes) {
  const mins = minutes === 1 ? 'min' : 'mins'
  return `${minutes} ${mins} read`
}

export function getSiteTitleFromProps(props) {
  return get(props, 'data.site.siteMetadata.title')
}
export function getSiteDescriptionFromProps(props) {
  return get(props, 'data.site.siteMetadata.description')
}
