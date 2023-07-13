import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Typist from "react-typist";
import Typed from "react-typed";

function App() {
  const items = ["HRMS", "Taxi", "LMS", "Reporrt Genarator"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <Navbar />
      <List items={items} title="List" onSelectItem={handleSelectItem} />
      {alertVisible && (
        <Alert
          text="Hello world"
          onClose={() => {
            setAlertVisibility(false);
          }}
        />
      )}

      <Buttons
        type="btn btn-primary"
        bName="Click me"
        onClick={() => {
          setAlertVisibility(true);
        }}
      />
      <Typist>
        <span>Umayana Vidunuwan Dissanayake</span>
      </Typist>
      <Typed strings={["Hello", "World", "React"]} typeSpeed={80} loop={true} />
    </div>
  );
}

export default App;
