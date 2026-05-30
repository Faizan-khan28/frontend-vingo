import React from 'react'
import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const OwnerItemCard = ({data}) => {
    const navigate = useNavigate()
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
        <div className='flex items-center justify-between'>
            <div className='font-medium text-gray-600'>Price: {data.price}</div>
            <div className='flex items-center gap-4 cursor-pointer p-2 rounded-full text-orange-500'>
                <FaPen onClick={()=> navigate(`/edit-item/${data._id}`)} size={16} />
                <FaTrashAlt size={16} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default OwnerItemCard