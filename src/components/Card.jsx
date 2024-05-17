import React, { useEffect, useState } from "react";

import image1 from "../assets/Image (1).png";
import image2 from "../assets/Image (2).png";
import image3 from "../assets/Image (3).png";

function Card({toggleDark}) {

  const [appData, setAppdata] = useState([
    {
      id: 1,
      image: image3,
      website: "unstop.com",
      tags: ["winter", "Aquatic life", "marine fish"],
      highlight:
        "Water is an inorganic compound with the chemical formula H2O. It is a transparent, tasteless, odorless, and nearly colorless chemical substance.",
      notes:
        "My first note for research on a topic associated with water for my project.",
      time: "11:05 AM",
    },
    {
      id: 2,
      image: image2,
      website: "timesof India",
      tags: ["winter", "Aquatic life", "marine fish"],
      highlight: "The chemical composition of water is H2O.",
      notes: "This note is related to the study of water and its properties.",
      time: "12:30 PM",
    },
    {
      id: 3,
      image: image1,
      website: "geekgorgeeks.com",
      tags: ["winter", "Aquatic life", "marine fish"],
      highlight: "Water covers about 71% of the Earth's surface.",
      notes:
        "Considering the abundance of water on Earth, this note discusses its importance.",
      time: "01:45 PM",
    },
    {
      id: 4,
      image: image3,
      website: "unstop.com",
      tags: ["winter", "Aquatic life", "marine fish"],
      highlight:
        "Water molecules consist of two hydrogen atoms bonded to one oxygen atom.",
      notes: "An elementary fact about the molecular structure of water.",
      time: "02:15 PM",
    },
    {
      id: 5,
      image: image2,
      website: "timesof India",
      tags: ["winter", "Aquatic life", "marine fish"],
      highlight: "Water is essential for life on Earth.",
      notes:
        "A fundamental note emphasizing the vital role of water in sustaining life.",
      time: "03:30 PM",
    },
  ]);

  useEffect(() => {
    // setAppdata(data)  //for future reference
  }, []);

  if (!appData.length) return <h2> Loading...</h2>;

  return (
    <>
      {appData.map((item) => (
       <section
       key={item.id}
      //  className="bg-backGroundColor rounded-lg h-auto py-6  sm:px-0 m-6 w-full sm:w-[90%]"
       className={`${toggleDark ? "bg-gray-700 text-white": "bg-backGroundColor"} rounded-lg h-auto  py-6 xl:px-6 sm:px-0 mr-6 mt-6 w-full sm:w-[90%]`}
     >
       <article className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 xl:p-0">
         <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center ">
           <img src={item.image} alt="card" className="h-16" />
           <div className="flex flex-col justify-between mx-3 mt-2 sm:mt-0">
             <h1 className="font-bold text-xl tracking-wider">My Note #{item.id}</h1>
             <p className="text-[12px] font-bold">
               Webpage:<span className="font-thin ml-1">{item.website}</span>
             </p>
           </div>
         </div>
         <div className="mt-2 sm:mt-0  sm:mr-6">{item.time}</div>
       </article>
       <article className="flex flex-col gap-2 mt-2">
         <div className="ml-2">
           <span className="font-semibold">Tags:</span>
           {item.tags.map((i, index) => (
  <span
    key={index}
    className={`border ml-2 ${toggleDark ? 'border-green-600 border-2 bg-slate-300 text-black' : 'border-black '} rounded-full p-1 text-[12px]`}
  >
    {i}
  </span>
))}

         </div>
         <div className="ml-2">
           <span className="font-semibold">Highlight:</span>
           <span className="ml-4 text-sm">{item.highlight}</span>
         </div>
         <div className="ml-2">
           <span className="font-semibold">Notes:</span>
           <span className="ml-4 text-sm">{item.notes}</span>
         </div>
       </article>
     </section>
      ))}
    </>
  );
}

export default Card;
