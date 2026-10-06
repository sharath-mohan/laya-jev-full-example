import { loadTicketData, truncateTicketData } from "@/api"
import { Button } from "./ui/button"

export function Header() {
  const loadData = async () => {
    await loadTicketData()
  }
  const truncateData = async () => {
    await truncateTicketData()
  }
  return (
    <header className="flex items-center justify-between border-b border-olive-100 bg-olive-200">
      <h1 className="p-4 text-2xl font-bold text-olive-900">Jev Example</h1>
      <div className="m-4 flex items-center space-x-1">
        <Button onClick={loadData}>Load Data</Button>
        <Button onClick={truncateData} variant={"outline"}>
          Truncate Data
        </Button>
      </div>
    </header>
  )
}
