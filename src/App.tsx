import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Auth from "./Auth/Auth"
import Layout from "./Layout/Layout"
import Home from "./Pages/Home/Home"


const App:FC = () => {
	return (
		<BrowserRouter>
			<Routes>				
				<Route path="/" element={<Layout/>}>
						<Route element={<Auth/>}>
							<Route index element={<Home/>}/>
						</Route>

						{/* 404 Page */}
						<Route path="*" element={<>404</>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
