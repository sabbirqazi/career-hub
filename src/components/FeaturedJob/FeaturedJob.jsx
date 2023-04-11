import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeaturedJob = ({job}) => {
   const {id, logo, job_title, job_type, sallary , location, company_name} = job;
   const navigate = useNavigate()
    return (
        <>
          <div className='h-96 w-88 rounded-lg border-gray-50 bg-gray-100 p-8'>
          <img className='object-fit h-16 w-32' src={logo} alt=""  />
          <p>{job_title}</p>
          <p>{company_name}</p>
          <p>{job_type}</p>
          <div>
            <p>{location}</p>
            <p>{sallary}</p>

          </div>
          <button onClick={()=>navigate(`jobDetails/${id}`)} className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'>View Details </button>
          </div>
        </>
    );
};

export default FeaturedJob;