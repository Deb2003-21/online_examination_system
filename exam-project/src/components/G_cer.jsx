// src/GeneratePdfPage.js
import { useRef, useEffect ,useState} from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useLocation } from 'react-router-dom';
import Cer from './Cer';


const G_cer = () => {

    
  const loc=useLocation()

  const  rprt= loc.state.rpt;
  const  nm= loc.state.name;

  
  const [currentDate, setCurrentDate] = useState('');
 

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    setCurrentDate(`${year}-${month}-${day}`);
  }, []);

  const certificateRef = useRef();
  



  useEffect(() => {


    const generatePdf = async () => {
      const images = certificateRef.current.getElementsByTagName('img');
      const loadImages = Array.from(images).map((img) => {
        return new Promise((resolve) => {
          img.onload = () => resolve();
          img.onerror = () => resolve(); // handle errors gracefully
        });
      });

      await Promise.all(loadImages);
      
      const input = certificateRef.current;
      html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape',
          unit: 'px',
          format: [canvas.width, canvas.height],
        });
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
        pdf.save('certificate.pdf');
         
      });
    };

    generatePdf();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <div ref={certificateRef}>
        <Cer  name={nm[0].name} grade={(rprt[0].score/rprt[0].total)*100 +'%'} date={currentDate} />
      </div>
    </div>
  );
};

export default G_cer;
