import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import  post  from './assets/default.png'
import  logo  from './assets/post (1) 1.png'
import  coco  from './assets/coca-leaves128 1.png'
import { useState } from 'react'

function App() {

  const [toggleDark, setToggleDark] = useState(false)

  console.log(toggleDark)

  return (
    // <div className='mb-6 flex flex-col lg:flex-row bg-black '>
    <div className={`${ toggleDark?"bg-slate-950  text-white":"bg-white"}  flex flex-col lg:flex-row `}>

    {/* Sidebar */}
    <section className='flex flex-col justify-between items-center mt-6 w-full lg:w-1/6 lg:items-center lg:mt-10'>
      <article className='flex flex-col gap-10'>
        <div className='flex justify-around items-center gap-4'>
          <img src={logo} alt="logo" className='h-12' />
          <h2 className='text-2xl font-semibold'>Canvas</h2>
        </div>
        {/* <div className='flex justify-around items-center gap-2 border border-black rounded-lg p-2'> */}
        <div className={`flex justify-around items-center gap-2 border ${toggleDark ? 'border-white' : 'border-black'} rounded-lg p-2 `}>

          <img src={post} alt="List of Notes" className='h-6' />
          <span className='text-sm font-large'>List of Notes</span>
        </div>
      </article>
      <article className='flex flex-row justify-center items-center gap-2 mb-2'>
        <p className='text-sm '>Powered by Leaf Technologies</p>
        <img src={coco} alt="Leaf Technologies" className='h-6' />
      </article>
    </section>

    {/* Main Content */}
    <section className='mt-8 w-full lg:w-4/5'>
      <Navbar toggleDark={toggleDark} setToggleDark={setToggleDark} />
      {/* <div className='relative z-20 bg-black border border-gray-300 rounded-lg p-6 mt-6 lg:-mt-1'> */}
      <div className={`relative z-20 ${toggleDark ? 'bg-slate-900' : 'bg-white'} border border-gray-300 rounded-lg p-6 mt-6 lg:-mt-1`}>

        <p className='mt-4 lg:mt-10 ml-4 '>
          Notes created on <span className='font-semibold'>16th May 2024</span>
        </p>
        <Card toggleDark={toggleDark}/>
      </div>
    </section>
  </div>
  )
}

export default App
