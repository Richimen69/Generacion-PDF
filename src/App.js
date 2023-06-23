import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import GenerarPDF from './components/GenerarPDF.jsx';


function App() {
  const [verPDF, setverPDF] = useState(false)
  const Menu = () => {
    return (
      <nav>
        <Button onClick={() => {
          setverPDF(!verPDF)
        }}>Ver PDF</Button>

        <PDFDownloadLink document={<GenerarPDF />} fileName='Reporte.pdf'>
          <Button>Descargar</Button>
        </PDFDownloadLink>
      </nav>
    );
  };
  return (
    <div style={{ width: "100%" }}>
      <Menu />
      {verPDF ?
        <PDFViewer style={{ width: "100%", height: "90vh" }}>
          <GenerarPDF />
        </PDFViewer>
        : null}
    </div>
  )
}
export default App
