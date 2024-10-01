import { GoArrowRight, GoArrowUpRight } from "react-icons/go";
import { projectImgURL } from "../Utils/constants";

const MyCampaigns = () => {
  return (
    <div className="max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32 mx-auto">
      <div className="flex absolute top-0 left-0 start-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-gradient-to-tl blur-3xl w-[55vw] h-[60vh] rounded-full origin-bottom-left -rotate-12 from-lime-900/70 via-indigo-900/70 to-blue-900/70 "></div>
      </div>
      <div className="max-w-5xl mb-10 lg:mb-14 md:flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white">
            My Campaigns
          </h2>
          <p className="mt-1 text-gray-300">
            Here you can manage and track your campaigns.
          </p>
        </div>
        <div className="py-5 md:py-0 text-start">
          <a
            className="inline-flex md:justify-center md:items-center gap-x-3 text-center bg-gradient-to-tl from-lime-600 to-lime-600 shadow-lg shadow-transparent hover:shadow-lime-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-lime-700/50 py-3 px-4"
            href="/create-campaign"
          >
            Create new campaign
            <GoArrowRight className="shrink-0 size-4" />
          </a>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
        {[0, 1, 2, 3].map((i) => (
          <a
            key={i}
            className="group block rounded-xl overflow-hidden focus:outline-none"
            href={`/campaign/${i}`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
              <div className="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                <img
                  className="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                  src={projectImgURL}
                  alt="Project Image"
                />
              </div>

              <div className="grow">
                <h3 className="text-xl font-semibold   text-gray-300 group-hover:text-white">
                  Studio by Preline
                </h3>
                <p className="mt-3  text-gray-300">
                  Produce professional, reliable streams easily leveraging
                  Preline&apos;s innovative broadcast studio
                </p>
                <p className="mt-4 inline-flex items-center gap-x-1 text-sm  decoration-2 group-hover:underline group-focus:underline font-medium text-lime-500">
                  Detail
                  <GoArrowUpRight />
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MyCampaigns;
