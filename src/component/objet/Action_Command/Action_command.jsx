function Action_command({ actionName,img, onClick }) {

  return (
    <div className="action_command-container" onClick={onClick}>
      <div className="action_command-name">{actionName}</div>
      <div className="action_command-visual-container">
        <img src={img} alt=""/>
      </div>
    </div>
  );
}

export default Action_command;
