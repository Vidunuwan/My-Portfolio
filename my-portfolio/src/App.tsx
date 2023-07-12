import Alert from "./components/Alert";
import List from "./components/List";
import Navbar from "./components/Navbar";

function App() {
  const items = ["HRMS", "Taxi", "LMS", "Reporrt Genarator"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Navbar />
      <List items={items} title="List" onSelectItem={handleSelectItem} />
      <Alert>
        <i className="bi bi-alarm"></i>
        <h1>sss</h1>
        Hello World
      </Alert>
    </div>
  );
}

export default App;
