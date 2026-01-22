import { useState } from "react";
import { calculateMortgage } from "../../api/mortgage.api";

export default function MortgageForm() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState(null);

  const calculate = async () => {
    const res = await calculateMortgage({ amount, rate: 8, years: 20 });
    setResult(res.data);
  };

  return (
    <div className="card p-3">
      <input className="form-control" placeholder="Loan Amount"
        onChange={(e) => setAmount(e.target.value)} />
      <button className="btn btn-primary mt-2" onClick={calculate}>
        Calculate EMI
      </button>
      {result && <h5 className="mt-2">EMI: ₹{result.emi}</h5>}
    </div>
  );
}
