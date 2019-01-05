export function formatReadingTime(minutes) {
  const mins = minutes === 1 ? 'min' : 'mins'
  return `${minutes} ${mins} read`
}
