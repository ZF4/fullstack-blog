import * as React from 'react';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import type { IBlog } from './utils/types'
import Home from './components/Home';
import Admin from './components/Admin'
import AddBlog from './components/AddBlog';
import NavBar from './components/NavBar'

const App: React.FC<IAppProps> = () => (

	<Router>
		<NavBar />
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/blog/:id/admin" component={Admin}/>
			<Route exact path="/blog/add" component={AddBlog}/>


		</Switch>
	</Router>


)


export interface IAppProps { }


export default App;