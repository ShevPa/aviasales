/* eslint-disable class-methods-use-this */
export default class TicketService {
  async getSearchId() {
    const response = await fetch('https://aviasales-test-api.kata.academy/search')
    if (!response.ok) {
      throw new Error(`Could not fetch with status ${response.status}`)
    }
    const res = await response.json()
    return res.searchId
  }

  async getData(searchId) {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    if (response.status === 500) {
      return this.getData(searchId)
    }
    if (!response.ok) {
      throw new Error(`Could not fetch with status ${response.status}`)
    }
    const res = await response.json()
    return res
  }
}
