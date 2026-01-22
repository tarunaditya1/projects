import cron from "node-cron";
import Property from "../models/Property.js";
import { generatePropertyPDF } from "../utils/pdfGenerator.js";

export const reportJob = () => {
  cron.schedule("0 10 * * 1", async () => {
    console.log("Running weekly report job...");

    const properties = await Property.find();

    for (let property of properties) {
      generatePropertyPDF(property);
    }

    console.log("Weekly property reports generated");
  });
};
