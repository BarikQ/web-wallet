import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "components/Footer/Footer";
import Layout from "components/Layout/Layout";

import styles from "./App.module.scss";

function App() {

  return (
    <Layout className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/somewhere" element={<Somewhere />} />
        </Routes>
      </main>
      <Footer />
    </Layout>
  );
}

function Main() {
  return (
    <div>
      Main Page
    </div>
  )
}

function Somewhere() {
  return (
    <div>Somewhere Route</div>
  )
}

export default App;
