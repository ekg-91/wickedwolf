import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Routes/Home';
import TradMedia from './Routes/TradMedia';
import Photography from './Routes/Photography';
import Jewelry from './Routes/Jewelry';
import Costumes from './Routes/Costumes';
import Pets from './Routes/Pets';
import Taxidermy from './Routes/Taxidermy';
import Commissions from './Routes/Commissions';
import About from './Routes/About';
import Contact from './Routes/Contact';

const Main = () => (
	<Switch>
		<Route exact path='/' component={ Home }></Route>
		<Route path='/Traditional Media' component={ TradMedia }></Route>
		<Route path='/Photography' component={ Photography }></Route>
		<Route path='/Jewelry' component={ Jewelry }></Route>
		<Route path='/Costumes' component={ Costumes }></Route>
		<Route path='/AromatheraPets' component={ Pets }></Route>
		<Route path='/Taxidermy' component={ Taxidermy }></Route>
		<Route path='/Commissions' component={ Commissions }></Route>
		<Route path='/About the Artist' component={ About }></Route>
		<Route path='/Contact' component={ Contact }></Route>
	</Switch>
)

export default Main;
