import type { MenuModel } from "@/types"
import AppSubMenu from "./AppSubMenu"

const AppMenu = () => {
  const model: MenuModel[] = [
    {
      label: "Panel Inicial",
      icon: "pi pi-home",
      items: [
        {
          label: "Inicio",
          icon: "pi pi-fw pi-home",
          to: "/"
        }
      ]
    },
    {
      label: "Panel Administracion",
      icon: "pi pi-th-large",
      items: [
        {
          label: "Bancos",
          icon: "pi pi-fw pi-comment",
          to: "/admin/bancos"
        },
        {
          label: "Usuarios",
          icon: "pi pi-fw pi-calendar",
          to: "/admin/usuarios"
        },
        {
          label: "Roles",
          icon: "pi pi-fw pi-comments",
          to: "/apps/chat"
        },
        {
          label: "Empresas",
          icon: "pi pi-fw pi-folder",
          to: "/apps/files"
        },
        {
          label: "Plantillas",
          icon: "pi pi-fw pi-envelope"
        },
        {
          label: "Reportes",
          icon: "pi pi-fw pi-check-square",
          to: "/apps/tasklist"
        }
      ]
    },
    {
      label: "Panel de Control",
      icon: "pi pi-fw pi-star-fill",
      items: [
        {
          label: "Configuraciones",
          icon: "pi pi-fw pi-id-card",
          items: [
            {
              label: "Tipos De Documento",
              icon: "pi pi-fw pi-id-card",
              to: "/pages/userprofile"
            },
            {
              label: "Sectores",
              icon: "pi pi-fw pi-id-card",
              to: "/pages/userprofile"
            },
            {
              label: "Encabezados",
              icon: "pi pi-fw pi-id-card",
              to: "/pages/userprofile"
            }
          ]
        }
      ]
    }
  ]

  return <AppSubMenu model={model} />
}

export default AppMenu
