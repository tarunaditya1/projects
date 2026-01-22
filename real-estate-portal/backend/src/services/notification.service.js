import { sendMail } from "../config/mail.js";

export const sendLeadNotification = async (agentEmail, leadData) => {
  const subject = "New Property Lead Received";
  const html = `
    <h3>New Lead</h3>
    <p>Name: ${leadData.name}</p>
    <p>Email: ${leadData.email}</p>
    <p>Phone: ${leadData.phone}</p>
  `;

  await sendMail(agentEmail, subject, html);
};
