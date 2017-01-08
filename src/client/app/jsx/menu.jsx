import React from 'react'
import '../scss/menu.scss'
import {Svg} from '../svg.jsx'
import {Link} from 'react-router'

export class Menu extends React.Component{
	state={
		show: false
	}
	render(){
		let show = (this.state.show)? "show":"";
		return(
			<div className="menu">
				<a className="logo">college dunia</a>
				<Svg onClick={this.showMenu} className="hamburger" src="../../public/img/menu.svg"/>
				<ul className={"menu-right " + show}id="menu">
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/about">About</Link></li>
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/skills">skills</Link></li>
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/portfolio">portfolio</Link></li>
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/experience">experience</Link></li>
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/reference">references</Link></li>
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/blog">blog</Link></li>
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/calendar">calendar</Link></li>
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/contact">contact</Link></li>
					<li><Link activeClassName="active" className="menu-item "  to=""><Svg src="../../public/img/menu.svg"/></Link></li>
				</ul>
			</div>
		)
	}

	showMenu = () => {
		if(this.state.show){
			this.setState({show: false})
		}
		else{
			this.setState({show: true})
		}
	}
}