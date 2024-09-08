import CardInformation from "@/shared/small-components/card-information/card-information"

export default function Home () {
  return (
        <div className="grid">
            <div className="col-12 md:col-6 xl:col-3">
                <CardInformation title="Bancos" data="23" />
            </div>
            <div className="col-12 md:col-6 xl:col-3">
                <CardInformation title="Usuarios" data="3" />
            </div>
            <div className="col-12 md:col-6 xl:col-3">
                <CardInformation title="Evaluados" data="15" />
            </div>
            <div className="col-12 md:col-6 xl:col-3">
                <CardInformation title="Evaluaciones" data="14" />
            </div>
            <div className="col-12 md:col-6 xl:col-6">
                <CardInformation title="Empresas" data="17" />
            </div>
            <div className="col-12 md:col-6 xl:col-6">
                <CardInformation title="Equipos" data="2" />
            </div>
        </div>
  )
}
