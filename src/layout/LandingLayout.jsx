import { Outlet } from "react-router-dom"
export const LandingLayout = () => {
  return (
	<div className=" min-h-screen bg-gray-bg h-full grid ">
		<Outlet/>
	</div>
  )
}

