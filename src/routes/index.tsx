import MainLayout from "@/components/MainLayout"
import {
	createHashRouter,
	createRoutesFromElements,
	Route,
} from "react-router"
import DefaultPage from "./DefaultPage"

const router = createHashRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<DefaultPage />} />
		</Route>
	)
)

export default router
