import {
  useEffect,
  useState,
  useContext,
  createContext,
  SetStateAction,
  Dispatch,
} from "react";
import { ethers } from "ethers";
import TransactionAbi from "../abi/Transaction.json";
declare var window: any;

interface MetamaskContext {
  accountAddr: string;
  contract: ethers.Contract | null;
  provider: ethers.providers.Web3Provider | null;
  chainId: string;
  setAccountAddr: Dispatch<SetStateAction<string>> | null;
  setContract: Dispatch<SetStateAction<ethers.Contract | null>>;
  setProvider: Dispatch<SetStateAction<ethers.providers.Web3Provider | null>>;
  setChainId: Dispatch<SetStateAction<string>>;
}

const StateContext = createContext<MetamaskContext>({} as MetamaskContext);

const StateContextProvider = ({ children }: any) => {
  const [accountAddr, setAccountAddr] = useState("");
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [provider, setProvider] =
    useState<ethers.providers.Web3Provider | null>(null);

  const [chainId, setChainId] = useState("");
  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log(provider);
    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });
        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccountAddr(address);
        const getChainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        let temp;
        if (getChainId != "0xc45") {
          temp = await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0xc45" }],
          });
        }
        if (getChainId) {
          setChainId(getChainId);
        }
        const contract = new ethers.Contract(
          TransactionAbi.address,
          TransactionAbi.abi,
          signer
        );
        setContract(contract);
        setProvider(provider);
        console.log(contract);
      } else {
        alert("Metamask is not Installed!");
      }
    };
    provider && loadProvider();
  }, []);
  return (
    <StateContext.Provider
      value={{
        accountAddr,
        contract,
        provider,
        chainId,
        setAccountAddr,
        setContract,
        setProvider,
        setChainId,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useMetaMask = () => {
  const context = useContext(StateContext);
  if (context === undefined) {
    throw new Error(
      'useMetaMask must be used within a "MetaMaskContextProvider"'
    );
  }
  return context;
};
export default StateContextProvider;
