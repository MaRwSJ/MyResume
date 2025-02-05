import React from 'react';

const Contact = () => (
	<div className = 'contact-information'>
		<div className = 'row linkedin'>
			<i className = 'fab fa-linkedin' />
			<a href = 'https://www.linkedin.com/in/marwa-jamali/'>linkedin.com/in/marwasaidjamol</a>
		</div>
		<div className = 'row github'>
			<i className = 'fab fa-github' />
			<a href = 'https://github.com/MaRwSJ'>github.com/MaRwSJ</a>
		</div>
		<div className = 'row email'>
			<i className = 'fas fa-envelope' />
			mjamali6@uwo.ca
		</div>
		<div className = 'row home'>
			<i className = 'fas fa-home' />
			London, Ontario Canada
		</div>
	</div>
);

export default Contact;
