import { ethers } from "ethers";
import { getCampaign } from "./CampaignManager";

// get a campaign detail
export const getCampaignDetail = async (campaignContractAddress) => {
  const campaignContract = await getCampaign(campaignContractAddress);
  const details = await campaignContract.details();

  const campaignDetails = {
    contractAddress: campaignContractAddress,
    creator: details.creator,
    title: details.title,
    goal: ethers.utils.formatEther(details.goal),
    deadline: new Date(details.deadline * 1000).toLocaleString(),
    raisedAmount: ethers.utils.formatEther(details.raisedAmount),
    successful: details.successful,
    fundsWithdrawn: details.fundsWithdrawn,
  };

  console.log(campaignDetails);

  return campaignDetails;
};
