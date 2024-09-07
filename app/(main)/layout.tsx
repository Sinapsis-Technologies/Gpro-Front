import { Metadata } from "next";
import Layout from "../../layout/layout";

interface MainLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: "G-PRO Ucompensar",
    description:
        "Not Desciption",
    robots: { index: false, follow: false },
    viewport: { initialScale: 1, width: "device-width" },
    openGraph: {
        type: "website",
        title: "PrimeReact APOLLO-REACT",
        url: "https://ucompensar.edu.co/",
        description:
            "Not Desciption",
        images: ["https://ucompensar.edu.co/wp-content/uploads/2021/04/main-logo.svg"],
        ttl: 604800,
    },
    icons: {
        icon: "/favicon.ico",
    },
};

export default function MainLayout({ children }: MainLayoutProps) {
    return <Layout>{children}</Layout>;
}
