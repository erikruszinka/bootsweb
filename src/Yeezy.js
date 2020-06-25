import React from "react";
import search from './icons/icons8-search-60.png';
import photosquare from './icons/testimonial.png';
import sneakerl from './icons/yeezy2.png'
import sneakerr from './icons/yeezy1.png'
import sneaker from './icons/adidas-Yeezy-Boost-350-V2-FU9006-HALL-OF-SNEAKZ-preschool.png'
import box from './icons/shopping-bag.svg';
import burger from "./icons/icons8-squared-menu-60.png";
import './css/hover.css'
import './App.css';
import { Link } from "@reach/router";

const Yeezy=()=>{
    return(
        <div className="orange flex w-screen h-screen" >
            <div className="piece items-container w-1/3">
                <div className="flex pt-20 pl-20 items-center">
                    <div className='burger'><img src={burger} className='w-8' alt=""/></div>
                    <p className="text-2xl pl-4 font-bold">kalli</p>
                </div>
                <div className="h-32 pl-10 pl-20">
                    <p className="text-xs font-medium pb-4">NEW IN</p>
                    <div className="">
                        <h1 className="text-3xl font-bold">Yeezy Boost</h1>
                        <p className="text-3xl secondline font-bold">350 V2 Clay</p>
                    </div>
                    <button className="border-b-2 border-black text-xs font-medium">Buy Now</button>
                </div>
                <div className="flex pl-20 pb-20" >
                    <Link to="/"><button className='w-20 h-10 pl-8 left'></button></Link>
                    <Link to="/1"><button className="w-20 h-10 pl-8 right"></button></Link>
                    <div className="pl-8 text-xs font-medium flex items-center">01 - 02</div>
                </div>

            </div>
            <div className="piece circle-container w-1/3 "  >
                <div className="circle1 hvr-pop">
                </div>
                <div className=""><img src={sneakerl} className="w-500px leftboot" alt=""/></div>
                <div className=""><img src={sneakerr} className="w-500px rightboot" alt=""/></div>
            </div>
            <div className='piece flex flex-col justify-between items-end relative w-1/3'>
                <div className="flex pr-20 pt-20">
                    <div className='search'><img src={search} className="w-6 h-6" alt=""/></div>
                    <div><img src={photosquare} className="w-6 h-6 rounded-full" alt=""/></div>
                </div>
                <div className='flex basket sweep-to-top'>
                    <div className="w-400px h-40 bg-white flex pt-12 pl-12">
                        <div className="divhover"><img src={sneaker} className="w-24 basketboot1" alt=""/></div>
                        <div><p className="text-gray-500 text-xs">EDITOR'S PICK</p>
                            <p>Nike Air Force</p>
                            <p>1'07 All Black</p></div>
                    </div>
                    <div className="w-32 flex justify-center align-middle box h-40 hvr-sweep-to-bottom"><img src={box} className="text-white w-6 " alt=""/></div>
                </div>
            </div>
        </div>
    )
}

export default Yeezy;