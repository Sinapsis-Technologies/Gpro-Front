import { Badge } from "primereact/badge";
import { Sidebar } from "primereact/sidebar";
import { useContext } from "react";
import { LayoutContext } from "./context/layoutcontext";

const AppProfileSidebar = () => {
    const { layoutState, setLayoutState } = useContext(LayoutContext);

    const onProfileSidebarHide = () => {
        setLayoutState((prevState) => ({
            ...prevState,
            profileSidebarVisible: false,
        }));
    };

    return (
        <Sidebar
            visible={layoutState.profileSidebarVisible}
            onHide={onProfileSidebarHide}
            position="right"
            className="layout-profile-sidebar w-full sm:w-25rem"
        >
            <div className="flex flex-column mx-auto md:mx-0">
                <span className="mb-2 font-semibold">Hola</span>
                <span className="text-color-secondary font-medium mb-5">
                    Usuario
                </span>
            </div>
        </Sidebar>
    );
};

export default AppProfileSidebar;
