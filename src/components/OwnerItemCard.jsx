import React from 'react'

const OwnerItemCard = ({data}) => {
  return (
    <div className='flex mt-4 bg-white rounded-lg shadow-md overflow-hidden border border-orange-400 w-125'>
      <div className='w-36 h-full shrink-0 bg-gray-50'>
        <img src={data.image} alt="fooditem" className='w-full h-full object-cover' />
      </div>
      <div className='flex flex-col justify-between p-3 flex-1'>
        <div>
           <h1 className='text-base font-semibold text-orange-400'>{data.name}</h1>
           <p className='font-medium text-gray-600'>Category: {data.category}</p>
           <p className='font-medium text-gray-600'>Food Type: {data.foodType}</p>
        </div>
      </div>
    </div>
  )
}

export default OwnerItemCard