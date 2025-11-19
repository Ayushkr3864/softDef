import React from 'react'
import Hamburger from "hamburger-react";    
function Navbar() {
  return (
      <>
         <nav className=" flex justify-around lg:p-5">
                    <div className="flex w-[225px] md:h-16 md:mt-[57px] mt-5  ">
                      <img src="/plant.png" alt="" className="w-12 h-12   " />
                      <h1 className="  font-black text-[#FFFFFF] text-[28px] mt-[7px] ml  ">
                        FloraVision
                      </h1>
                    </div>
                    <ul className=" w-[531px] hidden md:flex justify-around h-[35px] mt-16 text-[#FFFFFF] p-2  ">
                      <li>Home</li>
                      <li>
                        <select name="Plant">
                          <option value="" disabled selected>
                            Plant Type
                          </option>
                          <option value="Aglaonema plant" className="text-zinc-700">
                            Aglaonema plant
                          </option>
                          <option value="Plantain Lilies" className="text-zinc-700">
                            Plantain Lilies
                          </option>
                          <option value="Cactus" className="text-zinc-700">
                            Cactus
                          </option>
                        </select>
                      </li>
                      <li>More</li>
                      <li>Contact</li>
                    </ul>
                    <div className="flex md:gap-x-10 gap-x-5 mt-8 md:mt-[68px] h-[35px]">
                      <img
                        src="/search.png"
                        alt="search"
                        className="w-[26px] h-[26px]  "
                      />
                      <img src="/bag.png" alt="bag" className="w-[26px] h-[26px]" />
                      <div className="-mt-3">
                        <Hamburger color="#FFFFFF" size={24} />
                      </div>
                    </div>
                  </nav>  
      </>
  )
}

export default Navbar