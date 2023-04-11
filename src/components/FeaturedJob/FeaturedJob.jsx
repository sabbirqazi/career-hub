import React from "react";
import { useNavigate } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const { id, logo, job_title, job_type, salary, location, company_name } = job;
  const navigate = useNavigate();
  return (
    <>
      <div className=" rounded-lg border-gray-100 bg-gray-50 shadow-md px-8 py-5 flex gap-4 flex-col">
        <img className="object-fit h-16 w-32" src={logo} alt="" />
        <p className="text-xl font-bold">{job_title}</p>
        <p className="text-xl font-semibold text-gray-700">{company_name}</p>
        <div className="flex gap-2">
          <p className="border-2 rounded-md border-indigo-500 px-8 py-2 text-xl text-indigo-900">
            {job_type[0]}
          </p>
          <p className="border-2 rounded-md border-indigo-500 px-8 py-2 text-xl text-indigo-900">
            {job_type[1]}
          </p>
        </div>
        <div className="flex gap-10 text-md font-bold">
          <p className="gap-1 flex flex-inline">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            {location}
          </p>
          <p className="gap-1 flex flex-inline">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            {salary}
          </p>
        </div>
        <button
          onClick={() => navigate(`jobDetails/${id}`)}
          className="px-8 py-3 w-48 font-semibold rounded bg-cyan-200 text-gray-900 text-xl"
        >
          View Details{" "}
        </button>
      </div>
    </>
  );
};

export default FeaturedJob;
