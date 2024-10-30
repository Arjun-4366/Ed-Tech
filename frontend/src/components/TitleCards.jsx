import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import courses from "../Data/courses";


function TitleCards() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const navigate = useNavigate();
  const datas = courses


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
        {datas.map((item) => (
          <div key={item.id} className="flex justify-center">
            <div
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-lg overflow-hidden shadow-lg bg-white border-2 cursor-pointer hover:scale-105 transition-all duration-500"
              onClick={() => navigate(`/details/${item.id}`)}
            >
              <img src={`${item.img}`} alt="" />
              <div className="w-full flex flex-col items-start justify-start px-4 py-1  gap-3">
                <h1 className="text-sm font-bold text-black">
                  {item.name}
                </h1>
                 <h1 className=" text-xs font-semibold">{item.author}</h1>
                 <p className="text-yellow-600">₹{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-8 space-x-4">
        <GrFormPrevious
          onClick={handlePreviousPage}
          className="text-4xl text-green-500 cursor-pointer"
        />
        <MdNavigateNext
          onClick={handleNextPage}
          className="text-4xl text-green-500 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default TitleCards;
