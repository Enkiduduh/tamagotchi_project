function Gauge({ gaugeName, gaugeValue, maxValue }) {
  const calcPourcent = ({ gaugeValue } / { maxValue }) * 100;

  return (
    <div className="gauge-container">
      <div className="gauge-name">{gaugeName}</div>
      <div className="gauge-visual-container">
        <div className="gauge-background">
          <div className="gauge" style={{ width: `${calcPourcent}%` }}></div>
        </div>
      </div>
    </div>
  );
}

export default Gauge;
