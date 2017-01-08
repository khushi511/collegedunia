import React from 'react'
import {Svg} from '../svg.jsx'
import '../scss/footer.scss'

export class Footer extends React.Component{
	icons = ["../../public/img/facebook.svg", 
			 "../../public/img/twitter.svg",
			 "../../public/img/linkedin.svg",
			 "../../public/img/googleplus.svg", 
			 "../../public/img/dribble.svg", 
			 "../../public/img/instagram.svg"]
	render(){
		return(
				<ul className="footer">
				{
					this.icons.map((icon, i)=>{
						return(<li className="icon"><Svg  src={icon}/></li>)
					})
				}
				</ul>
			)
	}
}