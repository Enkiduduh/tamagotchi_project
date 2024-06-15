import PropTypes from "prop-types"

function Button_command({cmd, name, actionFunc}) {
  return (
    <div className="button">
      <img src={`./images/btn_commands/btn-${cmd}.png`} alt={name} onClick={actionFunc} />
    </div>
  );
}

Button_command.propTypes = {
 cmd: PropTypes.string.isRequired,
 name: PropTypes.string.isRequired,
 actionFunc:PropTypes.func.isRequired,
}

export default Button_command;
