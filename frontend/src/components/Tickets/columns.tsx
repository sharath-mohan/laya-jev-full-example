import { createColumnHelper } from "@tanstack/react-table"
import { type DataTableFeatures } from "./data-table-features"
import { type Ticket } from "@/types"

const columnHelper = createColumnHelper<DataTableFeatures, Ticket>()
export const columns = columnHelper.columns([
  columnHelper.accessor("id", {
    header: "ID",
    size: 60,
  }),
  columnHelper.accessor("subject", {
    header: "Subject",
  }),
  columnHelper.accessor("body", {
    header: "Body",
  }),
  columnHelper.accessor("type", {
    header: "Type",
    size: 100,
  }),
  columnHelper.accessor("analysed_type", {
    header: "Analysed Type",
    size: 140,
  }),
])
