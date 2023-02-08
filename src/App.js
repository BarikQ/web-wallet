import { ethers } from "ethers";

import "./App.scss";
import Ellipse from "./components/Ellipse/Ellipse";
import Header from "./components/Header/Header";

function App() {
  const connectHandler = async () => {
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(res);
        // await accountChange(res[0]);
      } catch (err) {
        console.error(err);
        // setErrorMessage("There was a problem connecting to MetaMask");
      }
    } else {
      // setErrorMessage("Install MetaMask");
    }
  };

  return (
    <div className="App">
      <Header />
      <Ellipse />
      <button onClick={connectHandler}> Connect Wallet </button>{" "}
    </div>
  );
}

export default App;
