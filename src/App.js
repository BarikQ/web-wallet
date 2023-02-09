import { ethers } from "ethers";

import Ellipse from "./components/Ellipse/Ellipse";
import Header from "./components/Header/Header";
import Footer from "components/Footer/Footer";
import Layout from "components/Layout/Layout";

import styles from "./App.module.scss";

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
    <Layout className={styles.app}>
      <Header />
      <main className={styles.main}>
        <button onClick={connectHandler}> Connect Wallet </button>
      </main>
      <Footer />
    </Layout>
  );
}

export default App;
