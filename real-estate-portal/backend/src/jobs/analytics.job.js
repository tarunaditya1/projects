import cron from "node-cron";
import User from "../models/User.js";
import Property from "../models/Property.js";
import Lead from "../models/Lead.js";
import Analytics from "../models/Analytics.js";

export const analyticsJob = () => {
  cron.schedule("0 0 * * *", async () => {
    console.log("Running daily analytics job...");

    const totalUsers = await User.countDocuments();
    const totalProperties = await Property.countDocuments();
    const totalLeads = await Lead.countDocuments();

    await Analytics.create({
      totalUsers,
      totalProperties,
      totalLeads
    });

    console.log("Analytics data saved");
  });
};
