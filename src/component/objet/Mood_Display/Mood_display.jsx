function Mood_display({ moodType, img }) {
  return (
    <div className="mood-container">
      <div className="mood-name">{moodType}</div>
      <div className="mood-visual-container">
        <img src={img} alt=""/>
      </div>
    </div>
  );
}

export default Mood_display;
