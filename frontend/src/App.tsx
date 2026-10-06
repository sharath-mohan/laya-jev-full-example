import { Header } from "./components/header"
import { DataTable } from "./components/Tickets/data-table"
import { columns } from "./components/Tickets/columns"
import { useState, useEffect } from "react"
import { fetchTickets } from "./api"

export function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTickets()
      setData(response)
    }
    fetchData()
  }, [])
  return (
    <div className="min-h-screen bg-olive-100">
      <Header />
      <div className="m-4 flex items-center space-x-1">
        <div className="w-3/4 overflow-hidden">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </div>
  )
}

export default App
