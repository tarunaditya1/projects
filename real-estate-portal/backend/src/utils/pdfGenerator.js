import PDFDocument from "pdfkit";
import fs from "fs";

export const generatePropertyPDF = (property) => {
  const doc = new PDFDocument();
  const filePath = `uploads/property_${property._id}.pdf`;

  doc.pipe(fs.createWriteStream(filePath));

  doc.fontSize(18).text(property.title);
  doc.text(`Price: ₹${property.price}`);
  doc.text(`Location: ${property.location}`);
  doc.text(`Type: ${property.type}`);
  doc.text(`Area: ${property.area} sqft`);

  doc.end();

  return filePath;
};
