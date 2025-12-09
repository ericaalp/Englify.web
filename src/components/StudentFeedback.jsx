import React, { useRef, useEffect } from 'react';

const students = [
  {
    id: 1,
    image: "https://d8tj7d7pfsmw2.cloudfront.net/1/acHZw_4ZUUKMOCiE0_F2nXoHOZLrDckW.jpg",
  },
  {
    id: 2,
    image: "https://d8tj7d7pfsmw2.cloudfront.net/1/ipipsvtI96mwBFR_Kd9C2J5BsffFyXZ1.jpg",
  },
  {
    id: 3,
    image: "https://d8tj7d7pfsmw2.cloudfront.net/1/X0KcuriX9FqF7j4QQTK3ZU4YCSjd9xGX.jpg",
  },
  {
    id: 4,
    image: "https://d8tj7d7pfsmw2.cloudfront.net/1/L5E7kf2B6ayz4pSjLVJJx2zh-dita2P4.jpg",
  },
  {
    id: 5,
    image: "https://d8tj7d7pfsmw2.cloudfront.net/1/sza_vKM3wS1U7_agrFEcgtlTEM8_iDXk.jpg",
  },
  {
    id: 6,
    image: "https://d8tj7d7pfsmw2.cloudfront.net/1/rmTMpUsD0Sxe43pOzHRQHw2zmEr5v6IJ.jpg",
  },
];




function  StudentFeedback() {
  const scrollRef = useRef(null);


  return (
    <section className="py-25 bg-[#FFFFFFFF]">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-5xl font-bold text-center mb-15 text-[#28004D]">
          Talabalar fikrlari🤩
        </h2>


   <div className="relative">
    
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide px-6"
        >
          {students.map((student) => (
            <div
              key={student.id}
              className=" min-w-[260px] h-[400px] 
                border-2 border-[#00A4FF] rounded-[28px]
                overflow-hidden  bg-[#EFF9FF]"
            >
              <img
                src={student.image}
                alt={student.name}
                className="rounded-3xl w-full h-full pl-6 pr-6 "
              />

            </div>
          ))}
        </div>


        </div>

      </div>
    </section>
  );
}

export default StudentFeedback;