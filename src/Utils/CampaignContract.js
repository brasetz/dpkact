import { ethers } from "ethers";
import { getCampaign, getCampaignManagerContract } from "./CampaignManager";

// get a list of camapaigns
export const getCampaignsDetail = async () => {
  const { campaignManagerContract } = await getCampaignManagerContract();

  const campaignContractAddresses =
    await campaignManagerContract.getCampaigns();

  const campaignsDetail = await Promise.all(
    campaignContractAddresses.map(async (contractAddress) => {
      const campaignContract = await getCampaign(contractAddress);
      const details = await campaignContract.details();

      const campaignDetails = {
        contractAddress: contractAddress,
        creator: details.creator,
        title: details.title,
        goal: ethers.utils.formatEther(details.goal),
        deadline: new Date(details.deadline * 1000).toLocaleString(),
        raisedAmount: ethers.utils.formatEther(details.raisedAmount),
        successful: details.successful,
        fundsWithdrawn: details.fundsWithdrawn,
      };

      return campaignDetails;
    })
  );

  console.log("campaignsDetail", campaignsDetail);

  return campaignsDetail;
};
