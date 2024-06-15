import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../src/styles/App.scss";
import NotFound from "./component/NotFound/Not_found"
import Main_Screen from "./component/Main_screen/Main_screen"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main_Screen />} />
          {/* <Route path="/new" element={<New_char />} />
          <Route path="/charsList" element={<Chars_List />} />
          <Route path="/char/:id" element={<Char_page />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
