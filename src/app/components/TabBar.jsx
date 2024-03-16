import React from 'react';

import Register from '../components/Register';
import Link from 'next/link';
import { CiCirclePlus } from "react-icons/ci";


function TabBar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-14 bg-white opacity-90">
    <div className="font-xl">
        <Link href='../components/Register.jsx' className="flex flex-col items-center justify-center hover:bg-[#EDF1F6]">
        <CiCirclePlus size={32} color='black'/>
            <span className="text-xs text-black">Registrera</span>
        </Link> 
        
    </div>
</div>
  )
}

export default TabBar;