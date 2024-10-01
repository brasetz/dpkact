import { ethers } from "ethers";

export const connectMetamask = async (setAccount) => {
  if (typeof window.ethereum === "undefined") {
    console.log("Metamask is not insatlled!");
    return;
  }

  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const accounts = await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();

    setAccount(accounts[0]);
    return { signer, accounts };
  } catch (error) {
    console.log("error", error);
  }
};
