import { createContext } from "react";
import { ethers } from "ethers";
import PropTypes from "prop-types";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const connectMetamask = async () => {
    if (typeof window.ethereum === "undefined") {
      console.log("Metamask is not insatlled!");
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();

      return { signer, accounts };
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <MainContext.Provider
      value={{
        connectMetamask,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
