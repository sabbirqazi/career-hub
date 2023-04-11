import React from 'react';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

import DetailCard from '../DetailCard/DetailCard';

const JobDetails = () => {
  

  /* previous code */
    const jobs = useLoaderData();
    
    const dynamic = useParams();
  
    const [details, setDetails] = useState([]);
    
    useEffect(() => {
        const detailJob = jobs.find(job => job.id === dynamic.id)
         setDetails(detailJob)
      }, []);
     
const {id, job_description, job_responsibility, educational_requirements, experience, salary, job_title, location, phone ,email, logo} = details;
    return (
        <>
         <section>
         <div className='bg-gray-100 '>
            <div>
            <h1 className="text-4xl font-bold text-center py-32 text-indigo-500">
          Your Selected Job Details{" "}
        </h1>
            </div>
            </div> 
          <DetailCard details ={details}
          
          ></DetailCard>
          
         </section>
        </>
    );
};

export default JobDetails;