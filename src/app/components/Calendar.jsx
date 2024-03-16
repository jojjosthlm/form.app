import React from 'react'


function Calendar() {
  return (
    <div className="flex items-center justify-center bg-white">

            <div className="w-full shadow-lg">
                <div className="sm:p-6 p-6 bg-white">
                    <div className="flex items-strech justify-between pl-2">
                        <span tabIndex="0" className="focus:outline-none  text-xl font-bold text-gray-800">Februari</span>
                        <div className="flex bg-pink-100 p-1 rounded-sm">
                            <div className="bg-pink-100 text-sm text-black">Plant A</div>   
                            <button aria-label="calendar forward" className="focus:text-gray-900 hover:text-gray-400 ml-1 text-gray-800"> 
                                <svg width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9885 18.2549L0.519531 8.5507L2.11249 6.5L12.9885 14.9683L23.8738 6.5L25.4667 8.5507L12.9885 18.2549Z" fill="black"/>
                                </svg>
                            </button>
                        </div>
                    </div>       
                    <div className="flex items-strech justify-between pt-2 overflow-x-auto">
                        <table className="w-full">
                            <tbody>
                                <tr>
                                    <td>
                                    <div className="w-full h-full">
                                            <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                <a  role="link" tabIndex="0" className="focus:outline-none  focus:bg-[#2071B5] hover:bg-[#2071B5] text-sm w-7 h-7 flex items-center justify-center font-normal text-slate-800 hover:text-white rounded-full">12</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div className="w-full h-full">
                                    <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                <a  role="link" tabIndex="0" className="focus:outline-none  focus:bg-[#2071B5] hover:bg-[#2071B5] text-sm w-7 h-7 flex items-center justify-center font-normal text-slate-800 hover:text-white rounded-full">13</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div className="w-full h-full">
                                    <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                <a  role="link" tabIndex="0" className="focus:outline-none  focus:bg-[#2071B5] hover:bg-[#2071B5] text-sm w-7 h-7 flex items-center justify-center font-normal text-slate-800 hover:text-white rounded-full">14</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="w-full h-full">
                                        <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                <a  role="link" tabIndex="0" className="focus:outline-none  focus:bg-[#2071B5] hover:bg-[#2071B5] text-sm w-7 h-7 flex items-center justify-center font-normal text-slate-800 hover:text-white rounded-full">15</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div className="w-full h-full">
                                    <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                <a  role="link" tabIndex="0" className="focus:outline-none  focus:bg-[#2071B5] hover:bg-[#2071B5] text-sm w-7 h-7 flex items-center justify-center font-normal text-slate-800 hover:text-white rounded-full">16</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div className="w-full h-full">
                                    <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                <a  role="link" tabIndex="0" className="focus:outline-none  focus:bg-[#2071B5] hover:bg-[#2071B5] text-sm w-7 h-7 flex items-center justify-center font-normal text-slate-800 hover:text-white rounded-full">17</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div className="w-full h-full">
                                    <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                                                <a  role="link" tabIndex="0" className="focus:outline-none  focus:bg-[#2071B5] hover:bg-[#2071B5] text-sm w-7 h-7 flex items-center justify-center font-normal text-slate-800 hover:text-white rounded-full">18</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-center items-center p-1 rounded-sm bg-[#869BAD] text-black text-xs">Produkt A
                            <button aria-label="calendar forward" className="focus:text-gray-900 hover:text-gray-400 ml-1 text-gray-800"> 
                                <svg width="16" height="16" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.9885 18.2549L0.519531 8.5507L2.11249 6.5L12.9885 14.9683L23.8738 6.5L25.4667 8.5507L12.9885 18.2549Z" fill="black"/>
                                </svg>
                            </button>

                    </div>
                </div>
                <div className="bg-white pt-4 rounded-t-xl">
                <div className="grid grid-cols-8 gap-1 divide-x divide-y mx-3 text-gray-800 text-end">
                    <div className="font-semibold">Hour</div>
                    <div className="font-semibold"></div>
                    <div className="font-semibold col-span-2 px-1">Bid</div>
                    <div className="font-semibold col-span-2 px-1">Match</div>
                    <div className="font-semibold col-span-2 px-1">Price</div>
                    <div className="row-span-2 flex justify-center items-center">
                        <div className="bg-[#005C63] rounded-3xl px-0.5 py-4 text-center text-xs text-white">01</div>
                        <div className="bg-white"></div>
                    </div>
                    <div className=""></div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">100.00</div>
                    <div className=""></div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">100.00</div>
                    <div className="row-span-2 flex justify-center items-center">
                        <div className="bg-[#005C63] rounded-2xl px-0.5 py-4 text-center text-xs text-white">02</div>
                        <div className="bg-white"></div>
                    </div>
                    <div className=""></div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">100.00</div>
                    <div className=""></div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">100.00</div>
                    <div className="row-span-2 flex justify-center items-center">
                        <div className="bg-[#005C63] rounded-2xl px-0.5 py-4 text-center text-xs text-white">03</div>
                        <div className="bg-white"></div>
                    </div>
                    <div className=""></div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">100.00</div>
                    <div className=""></div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">100.00</div>
                    <div className="row-span-2 flex justify-center items-center">
                        <div className="bg-[#005C63] rounded-2xl px-0.5 py-4 text-center text-xs text-white">04</div>
                        <div className="bg-white"></div>
                    </div>
                    <div className=""></div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">100.00</div>
                    <div className=""></div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">100.00</div>
                    <div className="row-span-2 flex justify-center items-center">
                        <div className="bg-[#005C63] rounded-2xl px-0.5 py-4 text-white">05</div>
                        <div className="bg-white"></div>
                    </div>
                    <div className=""></div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">100.00</div>
                    <div className=""></div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">3.00</div>
                    <div className="col-span-2 px-1">100.00</div>

                    </div>                
                </div>
            </div>
        </div>
  )
}

export default Calendar;