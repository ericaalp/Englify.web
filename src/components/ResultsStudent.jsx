import React, { useRef, useEffect } from "react";

const students = [
  {
    id: 1,
    name: "SALAXOV JAXONGIR",
    image: "https://d8tj7d7pfsmw2.cloudfront.net/1/X1C-g0ihBRiTNFc0-SkC3fUSFq3dN_kh.webp",
  },
  {
    id: 2,
    name: "SHARIPOV AKMALJON",
    image: "https://d8tj7d7pfsmw2.cloudfront.net/1/V-MSRDBc4n6e6OOXxxcjJymyRpj9Q_DU.webp",
  },
  {
    id: 3,
    name: "SHARIPOV AKMALJON",
    image: "https://d8tj7d7pfsmw2.cloudfront.net/1/sVM5RV9ZiMQLQfYW4sy_MP70aCiSpyy5.webp",
  },
  {
    id: 4,
    name: "JO'RABOYEV JAVOHIR",
    image: "https://d8tj7d7pfsmw2.cloudfront.net/1/T3RJLxYsCvTz9Fm3ZyaoIeeS51nwTYxG.webp",
  },
  {
    id: 5,
    name: "BAZARBAYEV BABURBEK",
    image: "https://d8tj7d7pfsmw2.cloudfront.net/1/xVVrAtQD06cBoXV4H3FsdPyt0LgCqBnc.webp",
  },
  {
    id: 6,
    name: "QOBULOV ABU BAKIR",
    image: "https://d8tj7d7pfsmw2.cloudfront.net/1/U7V0ryi21mq0Kfd46ehumhd_uZDvcYd7.webp",
  },
];

function ResultsStudent() {
  const scrollRef = useRef(null);

    useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      scrollAmount += 1;
      scrollContainer.scrollLeft = scrollAmount;

      if (
        scrollContainer.scrollLeft + scrollContainer.clientWidth >=
        scrollContainer.scrollWidth
      ) {
        scrollAmount = 0;
      }
    }, 10); // tezlikni shu yerdan sozlaysan

    return () => clearInterval(scrollInterval);
  }, []);


  return (
    <section className="py-25 bg-[#F5F6FA]">
      <div className="mx-auto max-w-6xl">

        <h2 className="text-5xl font-bold text-center mb-15 text-[#28004D]">
          Talabalarimiz natijalari 💣
        </h2>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-hidden"
        >
          {students.map((student) => (
            <div
              key={student.id}
              className="relative shrink-0 rounded-3xl  h-100 w-70"
            >
              <img
                src={student.image}
                alt={student.name}
                className="rounded-2xl"
              />

              <span className="absolute block  bottom-10 left-8 bg-white text-[#28004D] font-semibold px-8 py-1
               rounded-2xl">
                {student.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ResultsStudent;
