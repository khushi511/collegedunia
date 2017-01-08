import React from 'react'
import {Svg} from '../svg.jsx'
import "../scss/splash.scss"

export class Splash extends React.Component{
	render(){
		return(
				<section className="splash " style={{backgroundImage: "url("+this.props.bgImage+")"}}>        
                </section>
			)
	}
}

export class Card extends React.Component{
	icons = ["../../public/img/facebook.svg", 
			 "../../public/img/twitter.svg",
			 "../../public/img/linkedin.svg",
			 "../../public/img/googleplus.svg", 
			 "../../public/img/dribble.svg", 
			 "../../public/img/instagram.svg"]

	data = [{label:'age', value:29},
			{label: 'address', value:'24058,Belgium, Brusells, Liutte 27, BE'},
			{label:'e-mail', value:'roberthsmith@company.com'},
			{label:'phone', value:'+1 256 254 84 56'},
			{label:'freelance', value:'Available'}]

	render(){
		return(
				<section className="card">
					<div className="description">
						<img src="../../public/img/profile-image.jpg" />
						<div className="introduction">
							<div className="hello">HELLO</div>
							<h1>I'm <em>Robert Smith</em></h1>
							<h6>Developer and businessman</h6>

							<hr/>
							<ul className="detail">
							{
								this.data.map((data, i)=>{
									return(<li><span className="label">{data.label}</span><span>{data.value}</span></li>)
								})
							}
								<li><span className="label vacation">On vacation</span><span className="calendar"><Svg src="../../public/img/calendar.svg"/>till April 15, 2016</span></li>
							
							</ul>
						</div>
					</div>
					<ul className="social-media-icons">
					{
						this.icons.map((icon, i)=>{
							return(<li className="icon"><Svg  src={icon}/></li>)
						})
					}
					</ul>
				</section>
			)
	}
}