import React from 'react'
import '../scss/contact.scss'

export class Contact extends React.Component{
	render(){
		return(
			<section className="contact">
				<ContactForm/>
				<Map/>
			</section>
			)
	}
}

class ContactForm extends React.Component{
	render(){
		return(
			<div className="contact-form">
				<h2>Feel free to contact me</h2>
				<input type="text" name="name" placeholder="name"/>
				<input type="text" name="email" placeholder="email"/>
				<input type="text" name="subject" placeholder="subject"/>
				<textarea name="subject" placeholder="message"></textarea>
				<div className="send">send</div>
			</div>
			)
	}
}

class Map extends React.Component{
	
    componentDidMount(){
        var location = {lat: 22.122676, lng: 80.720467};
        var options = {
            center: location,
            scrollwheel: false,
            zoom: 15
        }
        var icon = '../../public/img/map-marker.svg';
        var map = new google.maps.Map(document.getElementById('staticMap'), options)
        var marker = new google.maps.Marker({
          map: map,
          position: location,
          title: 'My location',
          icon: icon,
          optimized: false
        })
    }
	render(){
		return(
			<div className="location">
				<ul>
					<li><span className="label">adress</span><span>Belgium, Brusells, Liutte 27, BE</span></li>
					<li><span className="label">phone</span><span>+1 256 254 84 56</span></li>
					<li><span className="label">e-mail</span><span>roberthsmith@company.com</span></li>
				</ul>
				<div className='fullscreen' id="staticMap"></div>
			</div>
			)
	}
}
