import React from 'react'

function Loader() {
  return (
    <div className='absolute bg-black bg-opacity-25 h-[100vh] w-[100vw] z-50 flex justify-center items-center'>
      <div className="loader"></div>
    </div>
  )
}

export default Loader
