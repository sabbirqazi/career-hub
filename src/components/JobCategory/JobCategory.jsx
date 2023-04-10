import React from 'react';
import jobicon1 from '../../assets/Icons/accounts 1.png'
import jobicon2 from '../../assets/Icons/business 1.png'
import jobicon3 from '../../assets/Icons/social-media 1.png'
import jobicon4 from '../../assets/Icons/chip 1.png'
const JobCategory = () => {
    return (
        <>  <section  className='my-container mt-20'>
            <div>
             <h1 className='text-center text-4xl lg:text-5xl text-bold'>Job Category List</h1>
             <p className='text-center lg:text-xl text-semibold pt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='flex flex-col lg:flex-row justify-around my-16 gap-5'>
                <div className='h-55 w-55  p-6 bg-violet-50 hover:bg-violet-200 rounded-md'>
                    <img src={jobicon1} alt="" />
                    <p className='text-xl text-bold pt-3'>Account and Finance</p>
                    <p className=' text-gray-500 pt-3'>300 Jobs Available</p>
                </div>
                <div className='h-55 w-55 p-6 bg-violet-50  hover:bg-violet-200 rounded-md'>
                    <img src={jobicon2} alt="" />
                    <p className='text-xl text-bold pt-3'>Creative Design</p>
                    <p className=' text-gray-500 pt-3'>100+ Jobs Available</p>
                </div>
                <div className='h-55 w-55 p-6 bg-violet-50 hover:bg-violet-200 rounded-md'>
                    <img src={jobicon3} alt="" />
                    <p className='text-xl text-bold pt-3'>Marketing & Sales</p>
                    <p className=' text-gray-500 pt-3'>150 Jobs Available</p>
                </div>
                <div className='h-55 w-55 p-6 bg-violet-50 hover:bg-violet-200 rounded-md'>
                    <img src={jobicon4} alt="" />
                    <p className='text-xl text-bold pt-3'>Engineering Job</p>
                    <p className=' text-gray-500 pt-3'>220 Jobs Available</p>
                </div>
               
            </div>
            
            </section>
        </>
    );
};

export default JobCategory;