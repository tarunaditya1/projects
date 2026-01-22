export const calculateMortgage = (req, res) => {
  const { amount, interest, years } = req.body;

  const monthlyRate = interest / 12 / 100;
  const months = years * 12;

  const emi =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  res.json({ emi: Math.round(emi) });
};
