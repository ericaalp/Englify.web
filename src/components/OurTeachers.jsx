
import React, { useRef, useEffect } from 'react';

const students = [
  {
    id: 1,
    image: "https://d1t7rcnioaivek.cloudfront.net/1/HMjHYXSkx0DKXBSPAepnjPYyLKmX3Aby.jpg",
  },
  {
    id: 2,
    image: "https://d1t7rcnioaivek.cloudfront.net/1/kqajYepijV3MhOMtqBBiFyG4JpuyyJLr.jpg",
  },
  {
    id: 3,
    image: "https://d1t7rcnioaivek.cloudfront.net/1/5iZiW4_pJbemoAPDz6O72tR22g9wVRl8.jpg",
  },
  {
    id: 4,
    image: "https://d1t7rcnioaivek.cloudfront.net/1/7FcH0e4Ulw_4kM9pAvM8djT5LC2dJhCi.jpg",
  },
  {
    id: 5,
    image: "https://d1t7rcnioaivek.cloudfront.net/1/HG4Pe9T038ykpQOtWlUFgbOkfqzAUEf0.jpg",
  },
  {
    id: 6,
    image: "https://d1t7rcnioaivek.cloudfront.net/1/I3H-F9QyLygAeufNDE2GsSzZZ4S9bYRQ.jpg",
  },
  {
    id: 7,
    image: "https://d1t7rcnioaivek.cloudfront.net/1/Qgrd6VmQLvFJKmURhs4yfdNe-s0DhHUf.jpg",
  },
  {
    id: 8,
    image: "https://d1t7rcnioaivek.cloudfront.net/1/Bi5TW8L4NLJES74PK3ya-qOB1-rfR_lo.jpg",
  },
  {
    id: 9,
    image: "https://d1t7rcnioaivek.cloudfront.net/1/JC_xZ8sneMq0yLpTuPvRP4hxHYU7K3HD.jpg",
  },
];



function OurTeachers() {
const scrollRef = useRef(null);

  return (
    <section className="py-25 bg-[#FFFFFFFF]">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-5xl font-bold text-center mb-2  text-[#28004D]">
          Bizning ustozlar
        </h2>
        <p className='text-2xl text-[#28004D] text-center mb-10 font-bold'>
          Bizning maktabimiz ingliz tilini oson va qiziqarli o'rganish uchun ajoyib joy!
          Tajribali o'qituvchilar va zamonaviy dasturlar sizning maqsadlaringizga tezroq erishishingizga yordam beradi.
        </p>


   <div className="relative">
    
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide px-6"
        >
          {students.map((student) => (
            <div
              key={student.id}
              className="relative min-w-[220px] h-[400px] 
                border-2 border-[#00A4FF] rounded-[28px]
                overflow-hidden shadow-xl bg-[#EFF9FF]"
            >
              <img
                src={student.image}
                alt={student.name}
                className="rounded-3xl  "
              />

            </div>
          ))}
        </div>


        </div>

      </div>
    </section>
  );
}

export default OurTeachers
