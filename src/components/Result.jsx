import { calculateInvestmentResults, formatter } from "../util/investment";

export function Result({ input }) {
  const result = calculateInvestmentResults(input);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

  return (
    <table id="result" className="center">
      <thead>
        <th>Year</th>
        <th>Investment Value</th>
        <th>Interest(Year)</th>
        <th>Total Interest</th>
        <th>Invested Capital</th>
      </thead>
      <tbody>
        {result.map((item) => {
          const totalInterest =
            item.valueEndOfYear -
            item.annualInvestment * item.year -
            initialInvestment;
          const totalAmountInvested = item.valueEndOfYear - totalInterest;
          return (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>{formatter.format(item.valueEndOfYear)}</td>
              <td>{formatter.format(item.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
