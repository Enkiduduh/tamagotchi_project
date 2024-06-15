import Button_command from "../objet/Button_command/Button_command";
import PropTypes from "prop-types";
import { useState } from "react";

function Pannel_commands() {
  const [counter, setCounter] = useState();

  const handleClick = () => {
    setCounter(counter + 1);
    console.log(counter)
  };


  return (
    <div className="button-commands">
      <div className="button-commands-wrapper-left">
        <Button_command cmd="a" name="A" actionFunc={handleClick} />
        <Button_command cmd="left" name="Left" actionFunc={handleClick} />
      </div>
      <div className="button-commands-wrapper-central">
        <Button_command cmd="up" name="Up" actionFunc={handleClick} />
        <Button_command cmd="down" name="Down" actionFunc={handleClick} />
      </div>
      <div className="button-commands-wrapper-right">
        <Button_command cmd="right" name="Right" actionFunc={handleClick} />
        <Button_command cmd="b" name="B" actionFunc={handleClick} />
      </div>
    </div>
  );
}

Pannel_commands.propTypes = {
  actionFunc: PropTypes.func.isRequired,
};

export default Pannel_commands;
