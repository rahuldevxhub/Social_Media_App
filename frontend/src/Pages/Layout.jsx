import { Outlet } from "react-router-dom"
import SideBar from "../components/SideBar"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { dummyUserData } from "../assets/assets.js"
import Loading from "../components/Loading"

const Layout = () => {

  const user = dummyUserData
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return user ? (
    <div className="w-full flex h-screen overflow-hidden">

      {/* Sidebar */}
      <div className={`${sidebarOpen ? "block" : "hidden"} sm:block  `}>
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      {/* Main */}
      <div className="flex-1 bg-slate-50 overflow-y-auto">
        <Outlet />
      </div>

      {/* Mobile toggle */}
      {
        sidebarOpen ? (
          <X
            className="absolute top-0 right-0 p-2 z-100 bg-transparent rounded-md border-none shadow w-10 h-10 text-gray-600 sm:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        ) : (
          <Menu
            className="absolute top-0 right-0 p-2 z-50 h-10 w-10 bg-transparent rounded-md sm:hidden"
            onClick={() => setSidebarOpen(true)}
          />
        )
      }

    </div>
  ) : (
    <Loading />
  )
}

export default Layout