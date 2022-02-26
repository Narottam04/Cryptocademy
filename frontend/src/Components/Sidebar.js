import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({openSidebar}) => {
    return (
        <aside
            className={`sidebar w-64 md:shadow transform ${openSidebar ? "translate-x-0" : "-translate-x-full "}    md:translate-x-0 transition-transform duration-150 ease-in bg-black fixed top-0 left-0 h-[100vh] border-r-2 border-white `}
            >
            <div className="sidebar-header flex items-center pl-6 py-4">
                <a href="#" className="inline-flex flex-row items-center">
                    <span className="leading-10 text-gray-100 text-4xl font-bold font-redressed">Cryptocademy</span>
                </a>
            </div>
            <div className="sidebar-content px-4 ">
                <ul className="flex flex-col w-full">
                
                <li className="my-px">
                    <Link
                    to="/admin"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 inline-block text-gray-300 mb-1 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </span>
                    <span className="ml-3">Watchlist</span>
                    </Link>
                </li>

                
                <li className="my-px">
                    <Link
                    to="/admin/productlist"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                        {/* svg */}
                    </span>
                    <span className="ml-3">Products List</span>
                    </Link>
                </li>
                
                <li className="my-px">
                    <Link
                    to="/admin/orderlist"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    </span>
                    <span className="ml-3">Customer Orders</span>
                    </Link>
                </li>

                <li className="my-px">
                    <Link
                    to="/admin"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                    <span className="flex items-center justify-center text-lg text-gray-400">
                        <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                        >
                        <path
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                        />
                        </svg>
                    </span>
                    <span className="ml-3">Notifications</span>
                    </Link>
                </li>

                <li className="my-px">
                    <Link
                    to="/"
                    className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    >
                    <span className="flex items-center justify-center text-lg text-red-400">
                        <svg
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                        >
                        <path
                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                        />
                        </svg>
                    </span>
                    <span className="ml-3">Logout</span>
                    </Link>
                </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar