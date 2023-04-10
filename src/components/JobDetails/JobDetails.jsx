import React from 'react';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
/* import { getAppliedJob } from '../../utilities/fakeDb'; */
import DetailCard from '../DetailCard/DetailCard';

const JobDetails = () => {
  /* const [clickedJobs, setClickedJobs] = useState([]);
  const [apldJob, setApldJob] = useState([])

  useEffect(() => {
      fetch('data.json')
          .then(res => res.json())
          .then(data => setClickedJobs(data))
  }, []);

  useEffect(() => {
    const storedJobs = getAppliedJob();
    const savedJobs = [];
    // step 1: get id of the addedProduct
    for (const id in storedJobs) {
        // step 2: get product from products state by using id
        const appliedJobs = clickedJobs.find(clickedJob => clickedJob.id === id)
        if (appliedJobs) {
            // step 3: add quantity
            const quantity = storedJobs[id];
            appliedJobs.quantity = quantity;
            // step 4: add the added product to the saved cart
            savedJobs.push(appliedJobs);
        }
        // console.log('added Product', addedProduct)
    }
    // step 5: set the cart
    setApldJob(savedJobs);
}, [clickedJobs])


const handleApplyNow = (details) => {
  // cart.push(product); '
  let newJob = [];
  // const newCart = [...cart, product];
  // if product doesn't exist in the cart, then set quantity = 1
  // if exist update quantity by 1
  const exists = apldJob.find(pd => pd.id === details.id);
  if (!exists) {
      details.quantity = 1;
      newJob= [...apldJob, details]
  }
  else {
      exists.quantity = exists.quantity + 1;
      const remaining = apldJob.filter(pd => pd.id !== details.id);
      newJobs = [...remaining, exists];
  }

  setApldJob(newJob);
  addToDb(details.id)
}
 */

  /* previous code */
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
          <DetailCard details ={details}
          
          ></DetailCard>
          {/* <div className='flex justify-around my-container my-20 gap-10'>
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
          </div> */}
         </section>
        </>
    );
};

export default JobDetails;