import { Outlet } from "react-router"
import Header from "./Header"

const MainLayout = () => {
	return (
		<div className="min-h-[100dvh] overflow-x-clip  dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:bg-[size:20px_20px] bg-[radial-gradient(#c1c7cf_1px,transparent_1px)] [background-size:16px_16px]">
			<Header />
			<main className="p-2 pb-96 max-sm:px-4">
				<Outlet />
			</main>
		</div>
	)
}

export default MainLayout
