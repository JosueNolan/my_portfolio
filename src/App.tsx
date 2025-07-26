import { RouterProvider } from "react-router"
import { ThemeProvider } from "./components/ThemeProvider"
import router from "./routes"

function App() {

  return (
    <ThemeProvider defaultTheme="system">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App