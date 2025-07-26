import MainLayout from "@/components/MainLayout"
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router"
import DefaultPage from "./DefaultPage"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<DefaultPage />} />
		</Route>
	)
)

export default router
