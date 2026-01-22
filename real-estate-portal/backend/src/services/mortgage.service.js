export const calculateMortgage = (amount, interest, years) => {
  const monthlyRate = interest / 12 / 100;
  const months = years * 12;

  const emi =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  return Math.round(emi);
};
