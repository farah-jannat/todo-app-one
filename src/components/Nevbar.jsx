import React from 'react'

const Nevbar = () => {
  return (
    <nev className = "flex justify-between bg-indigo-900 text-white py-3">
        <div className="logo">
            <span className='font-bold text-xl mx-9'>iTask</span>
        </div>
      <ul className='flex gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
      </ul>
    </nev>
  )
}

export default Nevbar
