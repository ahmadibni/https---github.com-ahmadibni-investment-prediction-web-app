export function Result({ result }) {
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
        {result.map((item) => (
          <tr>
            <td></td>
            <td>$10,850</td>
            <td>$10,850</td>
            <td>$10,850</td>
            <td>$10,850</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
