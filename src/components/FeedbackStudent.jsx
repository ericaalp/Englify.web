import React, { useRef } from 'react'

const students=[
 {
   id:1,
  name:'Ulugbek',
  videoId:'aKJHyFRaM60'
 },
 {
   id:2,
  name:'Ulugbek' ,
  videoId:'tWksLCoDKWQ'
 },
 {
   id:3,
  name:'Ulugbek' ,
  videoId:'Ftqrxnrfvwo'
 },
 {
   id:4,
  name:'Ulugbek' ,
  videoId:'QlIzIOeBnGg'
 },
 {
   id:5,
  name:'Ulugbek' ,
  videoId:'ZMW2D41hQ-o'
 },
 {
   id:6,
  name:"Ulugbek" ,
  videoId:'KUdGozaMSX4',
 }
]

function FeedbackStudent() {

  const scrollRef=useRef(null)
  return (
    <section className='py-20 bg-' >
      <div className='mx-auto max-w-6xl bg-white rounded-7xl'>
     <h2 className='text-5xl text-center text-[] font-bold mb-15'>Talabalar sharhlari</h2>
          
          <div ref={scrollRef} className='flex gap-10 overflow-x-auto'>
     {
      
            
              students.map((student)=>
              <div key={student.id} className='relative w-70 flex shrink-0'>
                   <iframe
                  className="w-full h-[450px] rounded-2xl"
                  src={`https://www.youtube-nocookie.com/embed/${student.videoId}`}
                  title={student.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />

                <button className='absolute block bottom-10 text-black bg-amber-50 left-25 text-md py-3 px-8 rounded-2xl'>{student.name}</button>

              </div>
              )
     }

          </div>

      </div>
    </section>
  )
}

export default FeedbackStudent
