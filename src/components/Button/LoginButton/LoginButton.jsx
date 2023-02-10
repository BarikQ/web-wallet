import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "../Button";
import { ReactComponent as MetamaskLogo } from 'assets/images/icons/metamask_logo.svg';
import { ReactComponent as Unlink } from 'assets/images/icons/unlink.svg';

import styles from "./LoginButton.module.scss";

export default function LoginButton() {
  const [account, setAccount] = useState("");

  useEffect(() => {    
    if (window.ethereum) {      
      window.ethereum.on("accountsChanged", accountsChanged);         
      window.ethereum.on("chainChanged", chainChanged);          
      window.ethereum.on("disconnect", disconnect);    
    }  

    return () => {
      window.ethereum.removeListener("accountsChanged", accountsChanged);
      window.ethereum.removeListener("chainChanged", chainChanged);
    }
  }, []);

  const connectHandler = async (e) => {
    e.preventDefault();
    if (window.ethereum) {
      try {
        const res = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        accountsChanged(res);
      } catch (err) {
        console.error(err);
        alert("Попап с ошибкой логина");
      }
    } else {
      alert(
        'Здесь должен был появиться красивый попап из макета с сообщением "Install MetaMask Extension"'
      );
    }
  };

  const disconnect = (data) => {
    setAccount('');
    
    console.log(data);
  }

  const chainChanged = () => {
    window.location.reload();
  }

  const accountsChanged = (newAccount) => {
    setAccount(newAccount[0]);

    if (!newAccount[0]) alert('Попап с: "You has been disconnected"');
    // здесь можно было бы делать запрос на данные кошелька - баланс, аккаунты и т.д. + сохранять в редакс/контекст стор
  }

  return (
    <>
      {account ? (
        <Link to="/somewhere" className={styles.loginStatus}>
          <MetamaskLogo className={styles.metamaskIcon} />
          <span>{account.slice(0, 10)}...{account.slice(-4)}</span>
          <Unlink onClick={connectHandler} /> {/* не понял для чего эта кнопка, разлогинить аккаунт через js нельзя, поэтому просто логин оставил... */}
        </Link>
      ) : (
        <Button
          text="Connect Wallet"
          className={styles.button}
          onClick={connectHandler}
        />
      )}
    </>
  );
}
