export const ScoreBar = ({ label, value }) => (
  <div className="score-bar">
    <div className="score-bar__meta">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
    <div className="score-bar__track">
      <span className="score-bar__fill" style={{ width: `${value}%` }} />
    </div>
  </div>
);

