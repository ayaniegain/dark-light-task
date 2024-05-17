import React, { useState } from 'react'
import setting from "../assets/sharp.png"
import toggle from "../assets/Vector.png"

import switchlogo from "../assets/switch.png"


function Navbar({toggleDark,setToggleDark}) {

  
const handleToggle=()=>{
  setToggleDark(!toggleDark)

}
  return (
    <section className={`${toggleDark? "bg-gray-800":"  bg-navColor"} flex flex-row justify-between h-20 rounded-tl-lg rounded-tr-lg relative z-0 p-4 sm:p-6`}>
    <div></div>
    <div className='flex flex-row justify-center items-center gap-x-4 mx-6'>
      <img src={setting} alt="Settings" className='h-6 mr-2' />
      <img src={toggleDark?  toggle:switchlogo} alt="Toggle" className={toggleDark? "h-5 rotate-180 transition ease-in-out delay-150 ":"h-10 transition ease-in-out delay-150"} onClick={handleToggle} />
      <p className='text-white font-semibold'>Logout</p>
    </div>
  </section>
  
  )
}

export default Navbar