import React from 'react';
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
const JobDetails = () => {
    const dynamic = useParams();
    console.log(dynamic)
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch("data.json")
          .then((res) => res.json())
          .then((data) => console.log(data));
         
      }, []);

    return (
        <div>
            This is dynamic
        </div>
    );
};

export default JobDetails;