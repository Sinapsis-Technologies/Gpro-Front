/* eslint-disable max-len */
import Link from "next/link"
import { useContext } from "react"
import AppMenu from "./AppMenu"
import { LayoutContext } from "./context/layoutcontext"
import { MenuProvider } from "./context/menucontext"
import { LayoutState } from "../types/layout"

const AppSidebar = () => {
  const { setLayoutState } = useContext(LayoutContext)
  const anchor = () => {
    setLayoutState((prevLayoutState: LayoutState) => ({
      ...prevLayoutState,
      anchored: !prevLayoutState.anchored
    }))
  }
  return (
        <>
            <div className="sidebar-header">
                <Link href="/" className="app-logo" >
                        <svg
                            width="240"
                            height="41"
                            viewBox="0 0 1045 302"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="app-logo-normal"
                            style={{ width: "196px", height: "48px" }}
                        >
                            <path d="M447.472 123.846C445.218 119.898 442.284 116.168 438.675 112.878C431.679 106.953 422.428 102.788 410.695 102.788C389.712 102.788 365.119 117.924 365.119 149.95C365.119 183.952 389.938 198.649 410.922 198.649C421.526 198.649 430.326 196.017 437.095 191.409C443.862 187.024 448.602 180.441 450.858 172.544H400.995V139.42H500.046C500.946 151.045 499.592 170.13 492.372 185.926C476.128 221.682 438.675 235.064 411.148 235.064C360.607 235.064 322.475 196.674 322.475 149.95C322.475 101.47 362.638 66.3729 411.824 66.3729C451.759 66.3729 486.055 92.4769 495.306 123.846H447.472Z"
                            fill="var(--logo-color)"/>
                            <path d="M570.671 186.363H507.27V150.607H570.671V186.363Z"
                            fill="var(--logo-color)"/>
                            <path d="M628.434 144.465H644.002C648.064 144.465 654.831 144.465 660.474 142.052C666.114 139.64 670.627 134.595 670.627 124.943C670.627 115.289 665.887 110.684 660.02 108.271C654.155 105.859 647.16 105.859 642.423 105.859H628.434V144.465ZM640.391 69.4428C671.304 69.4428 682.811 74.0494 691.835 81.2881C704.922 91.8188 711.464 107.832 711.464 124.284C711.464 140.737 704.471 158.067 693.864 166.841C682.358 176.272 671.078 180.88 645.131 180.88H628.434V231.772H585.79V69.4428H640.391Z"
                            fill="#231F20"/>
                            <path d="M729.293 69.4435H783.894C810.068 69.4435 826.313 74.0488 835.564 81.0688C849.553 91.5995 855.87 107.613 855.87 125.381C855.87 137.886 852.261 147.537 847.521 154.777C841.881 163.33 833.758 168.815 825.861 172.106L860.381 231.773H816.385L772.84 153.459H779.833C790.664 153.459 799.914 152.582 805.554 149.071C810.744 145.782 815.03 138.103 815.03 129.109C815.03 120.555 810.744 113.755 805.104 110.245C800.366 107.393 793.597 105.858 787.73 105.858H771.937V231.773H729.293V69.4435Z"
                            fill="#231F20"/>
                            <path d="M910.926 150.388C910.926 175.176 928.3 198.428 956.954 198.428C987.188 198.428 1001.85 171.667 1001.85 150.828C1001.85 129.769 987.188 102.787 956.504 102.787C926.946 102.787 910.926 127.355 910.926 150.168V150.388ZM868.282 152.363C868.282 99.2761 910.249 66.3721 956.277 66.3721C1007.72 66.3721 1044.5 105.419 1044.5 150.608C1044.5 195.797 1007.95 234.844 956.053 234.844C903.48 234.844 868.282 194.26 868.282 152.583V152.363Z"
                            fill="#231F20"/>
                            <path d="M50.7376 97.252C43.3656 97.252 37.3896 103.228 37.3896 110.6V150.717V190.836C37.3896 198.208 43.3656 204.184 50.7376 204.184C58.1096 204.184 64.0856 198.208 64.0856 190.836V150.717V110.6C64.0856 103.228 58.1096 97.252 50.7376 97.252Z"
                            fill="var(--logo-color)"/>
                            <path d="M91.2875 79.4512C83.9155 79.4512 77.9395 85.4272 77.9395 92.7992V150.718V208.636C77.9395 216.008 83.9155 221.984 91.2875 221.984C98.6595 221.984 104.635 216.008 104.635 208.636V150.718V92.7992C104.635 85.4272 98.6595 79.4512 91.2875 79.4512Z"
                            fill="var(--logo-color)"/>
                            <path d="M131.837 61.7935C124.465 61.7935 118.489 67.7695 118.489 75.1415V150.718V226.295C118.489 233.667 124.465 239.643 131.837 239.643C139.209 239.643 145.185 233.667 145.185 226.295V150.718V75.1415C145.185 67.7695 139.209 61.7935 131.837 61.7935Z"
                            fill="var(--logo-color)"/>
                            <path d="M212.936 97.252C205.564 97.252 199.588 103.228 199.588 110.6V150.717V190.836C199.588 198.208 205.564 204.184 212.936 204.184C220.308 204.184 226.284 198.208 226.284 190.836V150.717V110.6C226.284 103.228 220.308 97.252 212.936 97.252Z"
                            fill="var(--logo-color)"/>
                            <path d="M172.387 79.4512C165.015 79.4512 159.039 85.4272 159.039 92.7992V150.718V208.636C159.039 216.008 165.015 221.984 172.387 221.984C179.759 221.984 185.735 216.008 185.735 208.636V150.718V92.7992C185.735 85.4272 179.759 79.4512 172.387 79.4512Z"
                            fill="var(--logo-color)"/>
                            <path d="M131.837 19.8699C127.151 19.8699 122.467 21.1272 118.287 23.6432L32.576 75.2592C24.7347 79.9832 19.8627 88.6045 19.8627 97.7579V203.677C19.8627 212.831 24.7347 221.453 32.576 226.175L118.287 277.791C126.644 282.822 137.028 282.825 145.385 277.791L231.097 226.175C238.939 221.453 243.811 212.831 243.811 203.677V97.7579C243.811 88.6045 238.939 79.9832 231.096 75.2592L145.387 23.6432C141.207 21.1272 136.521 19.8699 131.837 19.8699ZM131.837 301.435C123.608 301.435 115.381 299.227 108.04 294.806L22.3307 243.19C8.556 234.895 0 219.755 0 203.677V97.7579C0 81.6805 8.556 66.5392 22.3293 58.2445L108.041 6.62854C122.719 -2.2088 140.955 -2.21013 155.632 6.62854L241.344 58.2445C255.117 66.5392 263.673 81.6805 263.673 97.7579V203.677C263.673 219.755 255.117 234.895 241.344 243.19L155.632 294.806C148.295 299.226 140.064 301.435 131.837 301.435Z"
                            fill="#231F20"/>
                        </svg>
                        <svg
                            width="35"
                            height="35"
                            viewBox="-17 0 300 300"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="app-logo-small"
                        >
                            <path d="M50.7376 97.252C43.3656 97.252 37.3896 103.228 37.3896 110.6V150.717V190.836C37.3896 198.208 43.3656 204.184 50.7376 204.184C58.1096 204.184 64.0856 198.208 64.0856 190.836V150.717V110.6C64.0856 103.228 58.1096 97.252 50.7376 97.252Z"
                            fill="var(--logo-color)"/>
                            <path d="M91.2875 79.4512C83.9155 79.4512 77.9395 85.4272 77.9395 92.7992V150.718V208.636C77.9395 216.008 83.9155 221.984 91.2875 221.984C98.6595 221.984 104.635 216.008 104.635 208.636V150.718V92.7992C104.635 85.4272 98.6595 79.4512 91.2875 79.4512Z"
                            fill="var(--logo-color)"/>
                            <path d="M131.837 61.7935C124.465 61.7935 118.489 67.7695 118.489 75.1415V150.718V226.295C118.489 233.667 124.465 239.643 131.837 239.643C139.209 239.643 145.185 233.667 145.185 226.295V150.718V75.1415C145.185 67.7695 139.209 61.7935 131.837 61.7935Z"
                            fill="var(--logo-color)"/>
                            <path d="M212.936 97.252C205.564 97.252 199.588 103.228 199.588 110.6V150.717V190.836C199.588 198.208 205.564 204.184 212.936 204.184C220.308 204.184 226.284 198.208 226.284 190.836V150.717V110.6C226.284 103.228 220.308 97.252 212.936 97.252Z"
                            fill="var(--logo-color)"/>
                            <path d="M172.387 79.4512C165.015 79.4512 159.039 85.4272 159.039 92.7992V150.718V208.636C159.039 216.008 165.015 221.984 172.387 221.984C179.759 221.984 185.735 216.008 185.735 208.636V150.718V92.7992C185.735 85.4272 179.759 79.4512 172.387 79.4512Z"
                            fill="var(--logo-color)"/>
                            <path d="M131.837 19.8699C127.151 19.8699 122.467 21.1272 118.287 23.6432L32.576 75.2592C24.7347 79.9832 19.8627 88.6045 19.8627 97.7579V203.677C19.8627 212.831 24.7347 221.453 32.576 226.175L118.287 277.791C126.644 282.822 137.028 282.825 145.385 277.791L231.097 226.175C238.939 221.453 243.811 212.831 243.811 203.677V97.7579C243.811 88.6045 238.939 79.9832 231.096 75.2592L145.387 23.6432C141.207 21.1272 136.521 19.8699 131.837 19.8699ZM131.837 301.435C123.608 301.435 115.381 299.227 108.04 294.806L22.3307 243.19C8.556 234.895 0 219.755 0 203.677V97.7579C0 81.6805 8.556 66.5392 22.3293 58.2445L108.041 6.62854C122.719 -2.2088 140.955 -2.21013 155.632 6.62854L241.344 58.2445C255.117 66.5392 263.673 81.6805 263.673 97.7579V203.677C263.673 219.755 255.117 234.895 241.344 243.19L155.632 294.806C148.295 299.226 140.064 301.435 131.837 301.435Z"
                            fill="#231F20"/>
                        </svg>
                </Link>
                <button
                    className="layout-sidebar-anchor p-link z-2 mb-2"
                    type="button"
                    onClick={anchor}
                ></button>
            </div>

            <div className="layout-menu-container">
                <MenuProvider>
                    <AppMenu />
                </MenuProvider>
            </div>
        </>
  )
}

export default AppSidebar
