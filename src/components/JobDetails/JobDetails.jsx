import React from 'react';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const jobs = useLoaderData();
    
    const dynamic = useParams();
  
    const [details, setDetails] = useState([]);
    
    useEffect(() => {
        const detailJob = jobs.find(job => job.id === dynamic.id)
         setDetails(detailJob)
      }, []);
     
const {id, job_description, job_responsibility, educational_requirements, experience, salary, job_title, location, phone ,email} = details;
    return (
        <>
         <section>
          <div className='flex justify-around my-container my-20 gap-10'>
           <div className='grow'>
          <p><span className='text-xl font-bold'>Job Description:</span>{job_description}</p>
          <p><span className='text-xl font-bold'>Job Responsibility:</span>{job_responsibility}</p>
          <p><span className='text-xl font-bold'>Educational Requirements:</span>{educational_requirements}</p>
          <p><span className='text-xl font-bold'>Experience:</span>{experience}</p>
           </div>
           <div className='flex flex-col'>
           <div className='bg-violet-100 py-10 px-10 gap-5'>
           <div>
           <p className='text-xl font-bold'>Job Details</p>
          <p>Salary: {salary}</p>
           <p>Job Title: {job_title}</p>
           </div>
           <div className=''>
           <p className='text-xl font-bold'>Contact Information</p>
            <p>Phone: {phone}</p>
            <p>Email : {email}</p>
            <p>Address: {location}</p>
           </div>
           </div>
           <button className='btn btn-accent'>Apply Now</button>
           </div>
          </div>
         </section>
        </>
    );
};

export default JobDetails;