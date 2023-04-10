import React from 'react';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    
    const dynamic = useParams();
    console.log(dynamic)
    const [details, setDetails] = useState([]);
    
    useEffect(() => {
        const jobb = jobs.find(job => job.id === dynamic.id)
         
         setDetails(jobb)
      }, []);
     
 console.log(details)
    return (
        <div>
          {
            console.log(details.id) 
          }
        </div>
    );
};

export default JobDetails;