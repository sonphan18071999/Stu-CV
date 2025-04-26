// This is a worker script for generating PDFs
// It offloads the CPU-intensive process from the main thread

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

interface PDFGenerationData {
  htmlContent: string;
  width: number;
  height: number;
}

// Listen for messages from the main thread
self.addEventListener(
  "message",
  async (event: MessageEvent<PDFGenerationData>) => {
    try {
      const { htmlContent, width, height } = event.data;

      // Create a temporary div to render the HTML
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = htmlContent;
      document.body.appendChild(tempDiv);

      // Render the HTML to canvas
      const canvas = await html2canvas(tempDiv, {
        useCORS: true,
        allowTaint: true,
        logging: false,
        scale: 2, // Higher quality
      });

      document.body.removeChild(tempDiv);

      // Generate PDF from canvas
      const imageDataURL = canvas.toDataURL("image/png", 0.8);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imageDataURL, "PNG", 0, 0, pdfWidth, pdfHeight);

      // Get PDF as base64 string
      const pdfOutput = pdf.output("datauristring");

      // Send the generated PDF back to the main thread
      self.postMessage({ status: "success", pdf: pdfOutput });
    } catch (error) {
      self.postMessage({ status: "error", message: String(error) });
    }
  }
);

export default {} as typeof Worker & { new (): Worker };
