import Active from 'components/svg/Active';
import Canceld from 'components/svg/Canceld';
import Disapproved from 'components/svg/Disapproved';
import Pending from 'components/svg/Pending';
import React from 'react'


function getSettings(status){
  switch (status) {
    case 'pending': 
    return {
      label: 'Pending Approval',
      statusColor: 'text-[#DAA545]',
      icon: <Pending />
    }
    case 'cnceled': 
    return {
      label: 'Canceld',
      statusColor: 'text-[#000]',
      icon: <Canceld />
    }
    case 'disapproved': 
    return {
      label: 'Disapproved',
      statusColor: 'text-[#000]',
      icon: <Disapproved />
    }
    default: return {
      label: 'Active',
      statusColor: 'text-[#4375FF]',
      icon: <Active />
    }
  }
}


const Status = ({status}) => {
  const StatusOptions =getSettings('pending')
  return (
    <>
      <div className='flex justify-between my-5'>
        <div className='flex items-center gap-3'>
          {StatusOptions.icon}
          <div className='leading-5'>
            <p className={`${StatusOptions.statusColor} font-semibold text-sm`}>{StatusOptions.label}</p>
            <span className='text-[#8C8C8C] text-xs'>Estimate: 24 hours.</span>
          </div>
        </div>
        <span className='text-[#8C8C8C] text-xs'>13/13/2013</span>
      </div>
    </>
  )
}

export default Status
