import Header from "../../layer/Header/Header";
import Footer from "../../layer/Footer/Footer";
import Pannel_commands from "../Panel_commands/Pannel_commands";

function Main_screen() {



  return (
    <>
      <Header />
      <div className="main_screen-container">
        <div className="wrapper-left"></div>
        <div className="wrapper-center">
          <div className="screen-container">
            <div className="screen"></div>
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
