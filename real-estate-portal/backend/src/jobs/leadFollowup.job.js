import cron from "node-cron";
import Lead from "../models/Lead.js";
import { sendEmail } from "../utils/email.js";

export const leadFollowupJob = () => {
  cron.schedule("0 9 * * *", async () => {
    console.log("Running lead follow-up job...");

    const leads = await Lead.find({ stage: "New Lead" });

    for (let lead of leads) {
      await sendEmail(
        lead.email,
        "Follow-up on your property enquiry",
        `<p>Hello ${lead.name}, we are following up on your enquiry.</p>`
      );
    }

    console.log("Lead follow-ups sent");
  });
};
