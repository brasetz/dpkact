const CreateCampaignCard = () => {
  return (
    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 border-gray-700 before:backdrop-blur-xl bg-white/5">
      <form>
        <div className="grid gap-4 lg:gap-6">
          <div>
            <label
              htmlFor="campaign-title"
              className="block mb-2 text-sm font-medium text-white"
            >
              Campaign Title
            </label>
            <input
              type="text"
              name="campaign-title"
              id="campaign-title"
              className="py-3 px-4 block w-full rounded-lg text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-900 border border-white/20 text-gray-200 placeholder-gray-500 focus:ring-gray-600"
              placeholder="Enter campaign title"
            />
          </div>

          {/* Campaign Description */}
          <div>
            <label
              htmlFor="campaign-description"
              className="block mb-2 text-sm font-medium text-white"
            >
              Description
            </label>
            <textarea
              id="campaign-description"
              name="campaign-description"
              rows="6"
              className="py-3 px-4 block w-full rounded-lg text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-900 border border-white/20 text-gray-200 placeholder-gray-500 focus:ring-gray-600"
              placeholder="Describe your campaign..."
            ></textarea>
          </div>

          {/* Funding Goal */}
          <div>
            <label
              htmlFor="campaign-goal"
              className="block mb-2 text-sm font-medium text-white"
            >
              Funding Goal (in Ether)
            </label>
            <input
              type="number"
              step={"0.1"}
              name="campaign-goal"
              id="campaign-goal"
              className="py-3 px-4 block w-full rounded-lg text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-900 border border-white/20 text-gray-200 placeholder-gray-500 focus:ring-gray-600"
              placeholder="Enter the funding goal"
            />
          </div>

          {/* Campaign Duration */}
          <div>
            <label
              htmlFor="campaign-duration"
              className="block mb-2 text-sm font-medium text-white"
            >
              Campaign Duration (in days)
            </label>
            <input
              type="number"
              name="campaign-duration"
              id="campaign-duration"
              className="py-3 px-4 block w-full rounded-lg text-sm focus:border-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-gray-900 border border-white/20 text-gray-200 placeholder-gray-500 focus:ring-gray-600"
              placeholder="Enter duration in days"
            />
          </div>
        </div>
      </form>

      {/* Submit Button */}
      <div className="mt-6 grid">
        <button
          type="submit"
          className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-lime-500 text-white hover:bg-lime-700 focus:outline-none focus:bg-lime-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Create Campaign
        </button>
      </div>
    </div>
  );
};

export default CreateCampaignCard;
