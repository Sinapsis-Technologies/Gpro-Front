import { ScrollTop } from "primereact/scrolltop"
import React from "react"
type EmptyPageProps = {
    children?: React.ReactNode;
    target?: string;
    threshold?: number;
};

const EmptyPage = ({ children, threshold = 50, target = "window" }: EmptyPageProps) => {
  return (
        <div className="grid">
            <ScrollTop target="window" threshold={50}/>
            <div className="col-12">
                <div className="card">
                    {children}
                </div>
            </div>
        </div>
  )
}

export default EmptyPage
