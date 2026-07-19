import { useEffect, useRef, useState } from "react";
import { category } from "../catogery"
import Navbar from "../components/Navbar"
import CategoryCard from "./CategoryCard"
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { useSelector } from "react-redux";

export const UserDashboard = () => {
  const {city,shopsInMyCity} = useSelector(state=>state.user)
  const cateScrollRef = useRef()
  const shopScrollRef = useRef()
  const [showLeftCateButton,setShowLeftCateButton] = useState(false)
  const [showRightCateButton,setShowRightCateButton] = useState(false)
  const [showLeftShopButton,setShowLeftShopButton] = useState(false)
  const [showRightShopButton,setShowRightShopButton] = useState(false)

  const updateButton = (ref,setLeftButton,setRightButton) => {
    const element = ref.current
    if(element) {
     setLeftButton(element.scrollLeft > 0)
     setRightButton(element.scrollLeft + element.clientWidth < element.scrollWidth - 2);
    }
  }

  const handleScroll = (ref,direction) => {
     if(ref.current) {
      ref.current.scrollBy({
        left: direction == "left" ? -200 : 200,
        behavior: "smooth"
      })
     }
  }

  useEffect(()=>{
    if(cateScrollRef.current) {
      updateButton(cateScrollRef,setShowLeftCateButton,setShowRightCateButton)
      updateButton(shopScrollRef,setShowLeftShopButton,setShowRightShopButton)
      cateScrollRef.current.addEventListener('scroll',()=>{
        updateButton(cateScrollRef,setShowLeftCateButton,setShowRightCateButton)
      })
      shopScrollRef.current.addEventListener('scroll',()=>{
        updateButton(shopScrollRef,setShowLeftShopButton,setShowRightShopButton)
      })
    }
  },[])
  return (
   <div className="w-screen min-h-screen flex flex-col gap-5 items-center bg-[#fff9f6] overflow-y-auto">
     <Navbar/>

     <div className="w-full max-w-6xl flex flex-col gap-5 items-start p-2.5">
     <h1 className="text-gray-800 text-2xl sm:text-3xl">Inspiration for your first Oderer</h1>
     <div className="w-full relative">

      {showLeftCateButton && 
        <button onClick={()=>handleScroll(cateScrollRef,"left")} className=" absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-[#e64528] text-white p-2 rounded-full shadow-lg z-10">
        <FaChevronCircleLeft />
        </button>
      }

       <div className="w-full flex overflow-x-auto scrollbar-hide pl-2 pr-2 gap-4 pt-2 pb-2" ref={cateScrollRef}>
         {
         category.map((cate,index)=> (
           <CategoryCard name={cate.category} image={cate.image} key={index}/>
          ))
         }
       </div>

       {showRightCateButton && 
        <button onClick={()=>handleScroll(cateScrollRef,"right")} className=" absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-[#e64528] text-white p-2 rounded-full shadow-lg z-10">
        <FaChevronCircleRight />
       </button>
       }
     </div>
     </div>

      <div className="w-full max-w-6xl flex flex-col gap-5 items-start p-2.5">
        <h1 className="text-gray-800 text-2xl sm:text-3xl">Best Shop's In {city}</h1>
        <div className="w-full relative">

      {showLeftShopButton && 
        <button onClick={()=>handleScroll(shopScrollRef,"left")} className=" absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-[#e64528] text-white p-2 rounded-full shadow-lg z-10">
        <FaChevronCircleLeft />
        </button>
      }

       <div className="w-full flex overflow-x-auto scrollbar-hide pl-2 pr-2 gap-4 pt-2 pb-2" ref={shopScrollRef}>
         {
          shopsInMyCity?.map((shop,index)=> (
           <CategoryCard name={shop.name} image={shop.image} key={index}/>
          ))
         }
       </div>

       {showRightShopButton && 
        <button onClick={()=>handleScroll(shopScrollRef,"right")} className=" absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 bg-orange-600 hover:bg-[#e64528] text-white p-2 rounded-full shadow-lg z-10">
        <FaChevronCircleRight />
       </button>
       }
     </div>
      </div>
   </div>
  )
}