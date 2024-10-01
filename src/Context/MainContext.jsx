import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { connectMetamask } from "../Utils/connectMetamask";

export const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [account, setAccount] = useState("");

  const connectMetamaskWithAccount = connectMetamask(setAccount);
  return (
    <MainContext.Provider
      value={{
        account,
        connectMetamaskWithAccount,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
