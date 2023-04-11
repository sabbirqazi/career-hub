import { useState } from "react";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
  const [filteredJobs, setFilteredJobs] = useState(savedJobs)

  const [jobTypeFilter, setJobTypeFilter] = useState("");

  
  const handleJobTypeFilterChange = (event) => {
    setJobTypeFilter(event.target.value);
    if (event.target.value === "") {
      setFilteredJobs(savedJobs);
    } else {
      const filteredJobs = savedJobs.filter(
        (job) => job.job_type.includes(event.target.value)
      );
      setFilteredJobs(filteredJobs);
    }
  };

  return (
    <>
      <div className="bg-gray-100 ">
        <div>
         
          <h1 className="text-4xl font-bold text-center py-36 text-indigo-500">
            You Have Applied These Jobs{" "}
          </h1>
        </div>
      </div>
     
      <div className="flex justify-end items-center my-container mt-20">
          <label className="mr-2 text-xl font-bold">Filter job: </label>
          <select
            value={jobTypeFilter}
            onChange={handleJobTypeFilterChange}
            className="rounded-md px-5 py-3 text-md border-gray-700 bg-gray-300"
          >
            <option value="">All</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>

     
      {filteredJobs.map((job) => (
        <div key={job.id} className="my-container mb-20 mt-5">
          <div className=" border-box border-2 border-gray-300 rounded-lg flex justify-between  items-center bg-gray-50 p-6 ">
            <div className=" h-26 w-32">
              <img src={job.logo} alt="" />
            </div>
            <div className="flex flex-col gap-4">
              {" "}
              <p className="text-xl font-bold">{job.job_title}</p>
              <p className="text-xl font-semibold text-gray-700">
                {job.company_name}
              </p>
              <div className="flex gap-2">
                <p className="border-2 rounded-md border-indigo-500 px-8 py-2 text-xl text-indigo-900">
                  {job.job_type[0]}
                </p>
                <p className="border-2 rounded-md border-indigo-500 px-8 py-2 text-xl text-indigo-900">
                  {job.job_type[1]}
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
                  {job.location}
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
                  {job.salary} 
                </p>
              </div>
            </div>
            <div >
              <Link to={`/jobDetails/${job.id}`}>
                <button className="px-8 py-3 font-semibold rounded btn-main">
                  View details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    
    </>
  );
};

export default AppliedJobs;
