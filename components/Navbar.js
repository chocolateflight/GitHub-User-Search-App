import { Fragment } from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='text-xl font-bold'>devfinder</div>
      <div className='flex space-x-4 items-center'>
        <p>Dark</p>
        <img src="/img/icon-moon.svg" alt="" className='aspect-square h-5'/>
      </div>
    </div>
  )
}

export default Navbar