import { useState } from "react";
import Header from "../../layer/Header/Header";
import Footer from "../../layer/Footer/Footer";
import Pannel_commands from "../Panel_commands/Pannel_commands";
import Gauge from "../objet/Gauge/Gauge";
import Mood_display from "../objet/Mood_Display/Mood_display";
import Sad from "../../assets/images/emotes/emote_Sad.png";
import Happy from "../../assets/images/emotes/emote_Happy.png";
import Sick from "../../assets/images/emotes/emote_Sick.png";
import Angry from "../../assets/images/emotes/emote_Angry.png";
import Normal from "../../assets/images/emotes/emote_Normal.png";
import Heal1 from "../../assets/images/emotes/test1.png";
import Heal2 from "../../assets/images/emotes/test2.png";
import Heal3 from "../../assets/images/emotes/test3.png";
import Action_command from "../objet/Action_Command/Action_command";

function Main_screen() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    console.log("click ok")
  };

  return (
    <>
      <Header />
      <div className="main_screen-container">
        <div className="wrapper-left"></div>
        <div className="wrapper-center">
          <div className="screen-container">
            <div className="screen">
              <div className="screen-left">
                <Gauge gaugeName="Health" gaugeValue={100} maxValue={100} />
                <Gauge gaugeName="Hunger" gaugeValue={100} maxValue={100} />
                <Gauge gaugeName="Happiness" gaugeValue={100} maxValue={100} />
                <Mood_display moodType="Sad" img={Sad} />
              </div>
              <div className="screen-center"></div>
              <div className="screen-right">
                <Action_command actionName="Heal" img={Heal1} onClick={handleClick}/>
                <Action_command actionName="Food" img={Heal2} onClick={handleClick}/>
                <Action_command actionName="Play" img={Heal3} onClick={handleClick}/>
              </div>
            </div>
          </div>
          <Pannel_commands />
        </div>
        <div className="wrapper-right"></div>
      </div>
      <Footer />
    </>
  );
}

export default Main_screen;
