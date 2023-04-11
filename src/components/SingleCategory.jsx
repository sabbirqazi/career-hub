import React from 'react';

const SingleCategory = ({category}) => {
    return (
        <>
           
          
            <div className=" p-10 bg-gray-50 bg-gradient-to-r hover:from-cyan-300 hover:to-blue-300 rounded-md">
             <img className="object-fit h-16" src={category.categorylogo} alt="" /> 
              <p className="text-2xl text-bold pt-3">{category.typeOfjob}</p>
              <p className=" text-xl text-gray-600 pt-3">{category.availableJob}</p>
            </div>
            
        
        </>
    );
};

export default SingleCategory;