import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const FeaturedJob = ({job}) => {
   const {id, logo, job_title, job_type, sallary , location, company_name} = job;
   const navigate = useNavigate()
    return (
        <>
          <div className='h-96 w-88 rounded-lg border-gray-50 bg-gray-100 p-8'>
          <img src={logo} alt="" />
          <p>{job_title}</p>
          <p>{company_name}</p>
          <p>{job_type}</p>
          <div>
            <p>{location}</p>
            <p>{sallary}</p>

          </div>
          <button onClick={()=>navigate(`jobDetails/${id}`)} className="btn btn-primary">Details </button>
          </div>
        </>
    );
};

export default FeaturedJob;