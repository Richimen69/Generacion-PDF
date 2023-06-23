import React from "react";
import { Document } from "@react-pdf/renderer";
import Plantilla from "./pdf/Plantilla.jsx";
import Plantilla2 from "./pdf/Plantilla2.jsx";

const GenerarPDF = () => {
    return(
        <Document>
            <Plantilla/>
            <Plantilla/>
            <Plantilla/>
            <Plantilla2/>
        </Document>
    )
}
export default GenerarPDF