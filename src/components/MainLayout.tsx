import { Outlet } from "react-router"
import Header from "./Header"

const MainLayout = () => {
	return (
		<div className="min-h-[100dvh] overflow-x-clip">
			<Header />
			<main className="mt-[75px] p-2 pb-96 max-sm:px-4">
				<Outlet />
			</main>
		</div>
	)
}

export default MainLayout
