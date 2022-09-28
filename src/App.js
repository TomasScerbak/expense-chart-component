import "./App.css";

import Main from "./components/Main";
import ExpenseHeader from "./components/ExpenseHeader";
import ExpenseBody from "./components/ExpenseBody";
import Attribution from "./components/Attribution";

function App() {
  return (
    <div className="App">
      <Main>
        <ExpenseHeader />
        <ExpenseBody />
      </Main>
      <Attribution />
    </div>
  );
}

export default App;
