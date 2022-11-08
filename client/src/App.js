import './App.css'
import React from 'react'
import Header from './components/routes/Header'
import Footer from './components/routes/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
	Calendar,
	Schedule,
	Login,
	Home,
	SignUp,
} from './components/routes/index'
import {
	ApolloProvider,
	ApolloClient,
	InMemoryCache,
	createHttpLink,
} from '@apollo/client'

const httpLink = createHttpLink({
	uri: 'http://localhost:3001/graphql',
})

const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
})

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<Header></Header>
				<Routes>
					<Route path="/calendar" element={<Calendar />}></Route>
					<Route path="/schedule" element={<Schedule />}></Route>
					<Route path="/login" element={<Login />}></Route>
					<Route path="/" element={<Home />}></Route>
					<Route path="/signup" element={<SignUp />}></Route>
				</Routes>
				<Footer />
			</Router>
		</ApolloProvider>
	)
}

export default App
// Footer
