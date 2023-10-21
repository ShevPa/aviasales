export function filterTransfers(tickets, filters) {
  const noTransfer = filters[1].checked
  const oneTransfer = filters[2].checked
  const twoTransfer = filters[3].checked
  const threeTransfer = filters[4].checked
  let newTickets = []
  if (noTransfer) {
    newTickets = tickets.filter((item) => item.segments[0].stops.length === 0 || item.segments[1].stops.length === 0)
  }
  if (oneTransfer) {
    newTickets = tickets.filter((item) => item.segments[0].stops.length === 1 || item.segments[1].stops.length === 1)
  }
  if (twoTransfer) {
    newTickets = tickets.filter((item) => item.segments[0].stops.length === 2 || item.segments[1].stops.length === 2)
  }
  if (threeTransfer) {
    newTickets = tickets.filter((item) => item.segments[0].stops.length === 3 || item.segments[1].stops.length === 3)
  }
  return newTickets
}
const priceCompare = (first, second) => {
  return first.price - second.price
}
const durationCompare = (first, second) => {
  const firstSum = first.segments[0].duration + first.segments[1].duration
  const secondSum = second.segments[0].duration + second.segments[1].duration
  return firstSum - secondSum
}
export function sortTickets(tickets, filter) {
  const newTickets = JSON.parse(JSON.stringify(tickets))
  if (filter === 'theCheapest' || filter === 'optimal') {
    return newTickets?.sort(priceCompare)
  }
  return newTickets?.sort(durationCompare)
}
