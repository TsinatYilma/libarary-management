import React from 'react'
import { Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className='min-h-full min-w-ful'>

        <div className="min-h-full w-full border-2">
         <Outlet />
        </div>
    </div>
  )
}

export default AdminLayout