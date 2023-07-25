import React, { useState, useEffect } from 'react';
import './styles/App.css';
import Template from './components/Template';
import Footer from './components/Footer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {
  const [showButtons, setShowButtons] = useState(true);
  const [mode, setMode] = useState('none');

  console.log('mode:');
  console.log(mode);

  function toggleButtons() {
    setShowButtons((prev) => !prev);
    setMode(mode === 'none' ? 'preview' : 'none');
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const generate = async () => {
      if (mode === 'download') {
        const pdf = new jsPDF('portrait', 'pt', 'a4');
        const data = await html2canvas(document.querySelector('.cv-template'));
        const img = data.toDataURL('img/png');
        const imgProperties = pdf.getImageProperties(img);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
          (imgProperties.height * pdfWidth) / imgProperties.width;
        pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('cv.pdf');
        setShowButtons(true);
        setMode('none');
      }
    };
    generate();
  }, [mode]);

  const saveAsPDF = () => {
    setShowButtons(false);
    setMode('download');
  };

  return (
    <div className="container">
      <Template showButtons={showButtons} />
      <div className="btn-container">
        <button onClick={toggleButtons}>Preview</button>
        <button onClick={saveAsPDF} className="save-btn">
          <i className="fa-solid fa-download"></i>Save as pdf
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
