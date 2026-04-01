export default function UserInput({ OnChange, userInput }) {


  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number"
            value={userInput.initialInvestment}
            required
            onChange={(event) => OnChange('initialInvestment', event.target.value)} />
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number"
            value={userInput.annualInvestment}
            required
            onChange={(event) => OnChange('annualInvestment', event.target.value)} />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number"
            value={userInput.expectedReturn}
            required
            onChange={(event) => OnChange('expectedReturn', event.target.value)} />
        </p>
        <p>
          <label>Duration</label>
          <input type="number"
            value={userInput.duration}
            required
            onChange={(event) => OnChange('duration', event.target.value)} />
        </p>
      </div>
    </section>
  );
}
