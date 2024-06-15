import Button_command from "../objet/Button_command/Button_command";
import PropTypes from "prop-types"

function Pannel_commands({actionFunc}) {
  return (
    <div className="button-commands">
      <div className="button-commands-wrapper-left">
        <Button_command cmd="a" name="A"actionFunc={actionFunc} />
        <Button_command cmd="left" name="Left"actionFunc={actionFunc} />
      </div>
      <div className="button-commands-wrapper-central">
        <Button_command cmd="up" name="Up" actionFunc={actionFunc}/>
        <Button_command cmd="down" name="Down" actionFunc={actionFunc}/>
      </div>
      <div className="button-commands-wrapper-right">
        <Button_command cmd="right" name="Right" actionFunc={actionFunc}/>
        <Button_command cmd="b" name="B" actionFunc={actionFunc} />
      </div>
    </div>
  );
}

Pannel_commands.propTypes = {
  actionFunc:PropTypes.func.isRequired,
 }

export default Pannel_commands;
