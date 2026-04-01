
export default function Results({ userInput }) {
    return <section id="results">
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest Earned</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{userInput.initialInvestment}</td>
                    <td>{userInput.annualInvestment}</td>
                    <td>{userInput.expectedReturn}</td>
                    <td>{userInput.duration}</td>
                </tr>
            </tbody>
        </table>
    </section>
}

