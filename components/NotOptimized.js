import { Fragment } from 'react'

const NotOptimized = () => {
  return (
    <div className='not-optimized fixed z-50 bg-modal-color h-full w-full flex flex-col items-center justify-center backdrop-blur-md px-5 text-center space-y-2 text-dm-color2 font-bold'>
      <p>Unfortunately, this app is not optimized for your screen size</p>
      <p>:(</p>
    </div>
  )
}

export default NotOptimized