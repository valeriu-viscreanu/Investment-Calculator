import { calculateInvestmentResults } from "../util/investment.js";

export default function Results({ input }) {

    const annualData = calculateInvestmentResults(input);
    console.log(annualData);
    return <section id="results">
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest Earned</th>
                    {/* <th>Total Interest</th>
                    <th>Invested Capital</th> */}
                </tr>
            </thead>
            <tbody>
                {annualData.map((yearData) => (
                    <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{yearData.valueEndOfYear}</td>
                        <td>{yearData.interest}</td>
                        {/* <td>{yearData.totalInterest}</td>
                        <td>{yearData.annualInvestment}</td> */}
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
}

