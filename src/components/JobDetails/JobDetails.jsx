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
          <DetailCard details ={details}
          
          ></DetailCard>
          
         </section>
        </>
    );
};

export default JobDetails;