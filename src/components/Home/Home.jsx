/* import React, { useState } from 'react'; */
import FeaturedJob from '../FeaturedJob/FeaturedJob'; 
import JobCategory from '../JobCategory/JobCategory';
import heroImg from '../../assets/Images/P3OLGJ1 copy 1.png'
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
const Home = () => {
    let jobs = useLoaderData();
   
  
   const [showAllJobs, setShowAllJobs] = useState(false);
  
    jobs = showAllJobs ? jobs : jobs.slice(0, 4);
  
    const handleSeeAllClick = () => {
      setShowAllJobs(true);} 
    return (
        <>
          <div className='bg-gray-100 my-container flex flex-col-reverse lg:flex-row justify-between pt-20 mb-10 '>
            <div className='ml-5 lg:ml-20 pt-10 py-10 '>
             <h1 className='text-5xl flex flex-col  pt-5 font-semibold'>
                <span className='py-2'>
                One Step 
                </span>
                <span className='py-2'>Closer To Your</span>
                <span className='py-2 text-indigo-400'> Dream Job</span>
             </h1>
             <p className='tex-xl py-5'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it.  Manage all your job application from start to finish.</p>
             <button className='px-8 py-3 font-semibold rounded btn-main'>Get Started</button>
            </div>
            <div>
              <img src={heroImg} className="hero-img" alt="" />
            </div>
          </div>  
          <JobCategory></JobCategory>
          {/* feature job */}
          <section className='my-10'>
            <div className='my-container my-20'>
                <h1 className='text-center text-bold text-4xl'>Featured Jobs</h1>
                <p className='text-center text-xl py-5'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

           <div className='my-container my-10 grid grid-cols-1 lg:grid-cols-2 gap-5 justify-around'>
         
              {
                jobs.map(job => <FeaturedJob 
                  job = {job}
                  key = {job.id} >
                  </FeaturedJob>)
              }

             
           </div>

           {!showAllJobs && (
        <div className='text-center'>
          <button className='px-20 py-3 text-xl font-semibold rounded btn-main' onClick={handleSeeAllClick}>
            See All
          </button>
        </div>
      )}
           
            </section> 
        </>
    );
};

export default Home;