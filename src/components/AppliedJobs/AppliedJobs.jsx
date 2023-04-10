import React from "react";
import { useNavigate } from "react-router-dom";

const AppliedJobs = () => {
  const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
  const navigate = useNavigate()
  return (
    <>
      <h1>Applied Jobs</h1>

      {savedJobs.map((job) => (
        <div key={job.id} className="my-container my-10">
          <div className="h-30 w-88 rounded-lg flex justify-between border-gray-50 bg-gray-100 p-8">
            <div>
              <img src={job.logo} alt="" />
            </div>
            <div>
              {" "}
              <p>{job.job_title}</p>
              <p>{job.company_name}</p>
              <p>{job.job_type}</p>
              <div>
                <p>{job.location}</p>
                <p>{job.salary}</p>
              </div>
            </div>
            <div>
              {" "}
              <button
                onClick={() => navigate(`jobDetails/${job.id}`)}
                className="btn btn-primary"
              >
                Details{" "}
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AppliedJobs;
