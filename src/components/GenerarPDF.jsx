import React from "react";
import { Document } from "@react-pdf/renderer";
import Plantilla from "./pdf/Plantilla.jsx";
import Plantilla2 from "./pdf/Plantilla2.jsx";
import Plantilla3 from "./pdf/Plantilla3.jsx";

const GenerarPDF = () => {
    return(
        <Document>
            <Plantilla />
            <Plantilla2 />
            <Plantilla3 />
        </Document>
    )
}
export default GenerarPDF