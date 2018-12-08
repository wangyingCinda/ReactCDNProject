import { BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom";

import React from "react"
import App from '../App'

import Article from "../components/Article"
import Font from "../components/Font"
import Login from "../components/Login"
import Main from "../components/Main"

import Navbar from "../components/Navbar"
import News from "../components/News"
import Register from "../components/Register"
// import Sidebar from "../components/Sidebar"
import Works from "../components/Works"
import Detail from "../components/Detail"



// import Detail from "../components/Detail"
// import store from "../store"


const router=(


	<Router>
		<App>
			<Switch>
				
					<Route path="/main" component = {Main}/>
				
				<Route path="/article" component = {Article}/>
				<Route path="/font" component = {Font}/>
				<Route path="/login" component = {Login}/>
				
				<Route path="/navbar" component = {Navbar}/>
				<Route path="/news" component = {News}/>
				<Route path="/register" component = {Register}/>
				{/*<Route path="/sidebar" component = {Sidebar}/>*/}
				<Route path="/works" component = {Works}/>
				<Route path="/detail/:id" component={Detail}/>
				

				<Redirect from="/" to="/main"/>
			</Switch>
		</App>
	</Router>

)
export default router