"use client"
import { dateBodyTemplate } from "@/shared/utilities/dates"
import { Column } from "primereact/column"
import { DataTable, DataTableFilterMeta } from "primereact/datatable"
import { useState } from "react"
import EmptyPage from "../../../../shared/small-components/empty/empty"

const BankPage =
() => {
  const [filters1] = useState<DataTableFilterMeta>({})
  return (
    <EmptyPage>
        <h5>Pagina De Administracion De Bancos De Preguntas</h5>
            <DataTable
                value={[{
                  id: 1,
                  name: "Banco 1",
                  country: { name: "USA" },
                  representative: "Sheila Daniels",
                  date: new Date(),
                  balance: 12000
                }]}
                paginator
                className="p-datatable-gridlines"
                showGridlines
                rows={10}
                dataKey="id"
                filters={filters1}
                filterDisplay="menu"
                loading={false}
                responsiveLayout="scroll"
                emptyMessage="No customers found."
                header={"Bancos de preguntas"}
            >
                <Column
                    field="name"
                    header="Nombre"
                    filter
                    filterPlaceholder="Buscar por nombre"
                    style={{ minWidth: "12rem" }}
                />
                <Column
                    header="Número de componentes"
                    filterField="country.name"
                    style={{ minWidth: "12rem" }}
                />
                <Column
                    header="Número de competencias"
                    filterField="representative"
                    showFilterMatchModes={false}
                    filterMenuStyle={{ width: "14rem" }}
                    style={{ minWidth: "14rem" }}
                />
                <Column
                    header="Fecha de creación"
                    filterField="date"
                    dataType="date"
                    style={{ minWidth: "10rem" }}
                    body={dateBodyTemplate}
                />
                <Column
                    header="Última fecha de modificación"
                    filterField="balance"
                    dataType="numeric"
                    style={{ minWidth: "10rem" }}
                    body={dateBodyTemplate}
                />
                <Column
                    field="Acciones"
                    header="Status"
                    filterMenuStyle={{ width: "14rem" }}
                    style={{ minWidth: "12rem" }}
                />
            </DataTable>
    </EmptyPage>
  )
}

export default BankPage
