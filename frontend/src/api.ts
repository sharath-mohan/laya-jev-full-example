export const loadTicketData = async () => {
  try {
    const response = await fetch("/api/load-tickets")
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error loading data:", error)
    throw error
  }
}

export const truncateTicketData = async () => {
  try {
    const response = await fetch("/api/truncate-tickets")
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error truncating data:", error)
    throw error
  }
}

export const fetchTickets = async () => {
  try {
    const response = await fetch("/api/tickets")
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching tickets:", error)
    throw error
  }
}
