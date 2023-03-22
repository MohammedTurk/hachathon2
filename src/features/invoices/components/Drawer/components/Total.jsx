import React from 'react'

const Total = () => {
  return (
    <div className='flex justify-end gap-10 my-3'>
      <div className='flex flex-col'>
        <span className='text-gray-400 text-sm'>Subtotal</span>
        <span className='text-gray-400 text-sm'>Fees</span>
        <span className='font-bold'>$Total</span>
      </div>
      <div className='flex flex-col'>
        <span className='text-gray-400 text-sm'>$450</span>
        <span className='text-gray-400 text-sm'>$..</span>
        <span className='font-bold'>$..</span>
      </div>
    </div>
  )
}

export default Total
