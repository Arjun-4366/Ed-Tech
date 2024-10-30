import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import courses from "../Data/courses";
import Loading from "./Loading";
import PaymentModal from "./PaymentModal";

function Details({ loading }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }
 

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="p-20 flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4">
              <h1 className="text-2xl font-bold text-black mb-4">
                {course.name}
              </h1>
              <img
                src={process.env.PUBLIC_URL + course.img}
                alt={course.name}
                className="w-full h-auto rounded-lg mb-4"
              />
              <p className="text-gray-700 text-lg mb-4">
                Author: {course.author}
              </p>
              <div className="flex items-center justify-between px-4">
              <p className="text-yellow-700 text-xl">₹{course.price}</p>
              
                
                <PaymentModal/>

              
              </div>
             
            </div>
            <div className="col-span-1 md:col-span-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Details of the Course
              </h2>
              <p className="text-gray-700 text-lg mb-4">
                {course.details.description}
              </p>
              <p className="text-gray-700 text-lg mb-4">
                <strong>Prerequisites:</strong> {course.details.prerequisites}
              </p>
              <p className="text-gray-700 text-lg mb-4">
                <strong>Duration:</strong> {course.details.duration}
              </p>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Content:</h3>
              <ul className="list-disc list-inside text-gray-700 text-lg">
                {course.details.content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;
