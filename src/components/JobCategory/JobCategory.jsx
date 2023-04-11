import React, { useEffect, useState } from "react";
import SingleCategory from "../SingleCategory";

const JobCategory = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("category.json")
          .then((res) => res.json())
          .then((data) => setCategories(data));
      }, []);
 
  return (
    <>
      {" "}
      <section className="my-container mt-20">
        <div>
          <h1 className="text-center text-4xl lg:text-5xl text-bold">
            Job Category List
          </h1>
          <p className="text-center lg:text-xl text-semibold pt-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-around my-16 gap-5">
        {
            categories.map(category =>  <SingleCategory
             category={category}
            key={category.id}
            ></SingleCategory> )
        }
        </div>
       
      </section>
    </>
  );
};

export default JobCategory;
