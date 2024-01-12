import { useState } from "react";
// Style
import "../src/assets/css/App.css";
// Icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faStopwatch } from "@fortawesome/free-solid-svg-icons";
library.add(faGithub, faLinkedin, faStopwatch);
// Components
import Header from "./assets/components/Header";
import Counter from "./assets/components/Counter";
import Footer from "./assets/components/Footer";
// Functions
import addCounter from "./assets/js/addCounter";
import removeCounter from "./assets/js/removeCounter";

function App() {
  const [tab, setTab] = useState([{ ind: 0, num: 0 }]);
  console.log(tab);
  return (
    <>
      <Header />
      <main className="container">
        <div>
          {tab.length < 3 && (
            <button
              className="add-button"
              onClick={() => {
                addCounter(tab, setTab);
              }}
            >
              ADD COUNTER
            </button>
          )}
        </div>
        <div>
          {tab.map((elt, ind) => {
            return <Counter key={ind} ind={ind} tab={tab} setTab={setTab} />;
          })}
        </div>
        <div>
          {tab.length > 1 && (
            <button
              className="remove-button"
              onClick={() => removeCounter(tab, setTab)}
            >
              REMOVE COUNTER
            </button>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
