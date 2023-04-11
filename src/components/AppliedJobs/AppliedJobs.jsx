import React, { useState } from "react";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
 




  return (
    <>
      <h1>Applied Jobs</h1>
    
      {savedJobs.map((job) => (
        <div key={job.id} className="my-container my-10">
          <div className="h-30 w-88 rounded-lg flex justify-between border-gray-50 bg-gray-100 p-8">
            <div>
              <img className="object-fit" src={job.logo} alt="" />
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
          
              <Link to={`/jobDetails/${job.id}`}>
                        <button className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'>View details</button>
                    </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AppliedJobs;


