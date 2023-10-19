import { add } from 'date-fns'

export const transferHelper = (stops) => {
  if (stops.length === 0) return 'без пересадок'
  if (stops.length === 1) return '1 пересадка'
  return `${stops.length} пересадки`
}
export const durationToHours = (duration) => {
  const hours = Math.floor(duration / 60)
  const mins = duration % 60
  return `${hours}ч ${mins}м`
}
export const startFlightTime = (date) => {
  const time = new Date(date)
  const hours = time.getHours()
  const mins = time.getMinutes()
  return `${hours < 10 ? `0${hours}` : hours}:${mins < 10 ? `0${mins}` : mins}`
}
export const endFlightTime = (date, duration) => {
  const time = add(new Date(date), { minutes: duration })
  const hours = time.getHours()
  const mins = time.getMinutes()
  return `${hours < 10 ? `0${hours}` : hours}:${mins < 10 ? `0${mins}` : mins}`
}
