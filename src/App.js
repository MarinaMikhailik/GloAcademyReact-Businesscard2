import React, { Component } from 'react';
import logo from './images/logo.svg';
import phone from './images/phone.svg';
import './App.css';
import backgroundMainImg from "./images/main-bg-600.webp";
import sliderItem1 from "./images/1.svg";
import sliderItem2 from "./images/2.svg";
import sliderItem3 from "./images/3.svg";
import sliderItem4 from "./images/4.svg";

function  Header(props) {
	return (
		<header>
			<div className='wrapper'>
				<div className='header'>
					<a href='#'><img src={logo} className='header-logo'/></a>
					<a href="tel:888" className="header-phone"><img src={phone}/></a>
					<div className="header-phonelink">
						<a href={`tel:${props.numberPhone}`}>{`+${props.numberPhone}`}</a>
					</div>
				</div>
			</div>
		</header>
	);
}
function Button(props) {
	return (
		<button className={`btn ${props.class}`}>
			<span>{props.text}</span>
		</button>
	);
}
function Main() {
	return (
		<main style={{
			backgroundImage: `url(${backgroundMainImg})`,
			backgroundRepeat: 'no-repeat',
			backgroundColor: '#E6E3DE'
		}}>
			<div className="wrapper">
				<div className="main">
					<h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
					<div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более.</div>
					<Button class="main-btn" text="Подробнее"/>
				</div>
			</div>
		</main>
	);
}
const styleFeatureItemDiv1 = {
	backgroundImage: `url(${sliderItem1})`
};
const styleFeatureItemDiv2 = {
	backgroundImage: `url(${sliderItem2})`
};
const styleFeatureItemDiv3 = {
	backgroundImage: `url(${sliderItem3})`
};
const styleFeatureItemDiv4 = {
	backgroundImage: `url(${sliderItem4})`
};

function FeaturesSliderItem(props) {
	return (
		<div className="features-slider_item">
			<div className="features-img" style={props.number === "1" ? styleFeatureItemDiv1 : props.number === "2" ? styleFeatureItemDiv2 : props.number === "3" ? styleFeatureItemDiv3 : styleFeatureItemDiv4}></div>
			<div className="features-feature">{props.text}</div>
		</div>
	);
}

function Features() {
	return (
		<section className="features">
			<div className="wrapper">
				<div className="features-wrapper">
					<h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
					<div className="features-subhead">О нас</div>
					<div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру 	                                  сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить.</div>
					<div className="features-slider">
						<div className="features-slider_items">
							<FeaturesSliderItem text="Первое целевое преимущество" number="1"/>
							<FeaturesSliderItem text="Второе целевое преимущество" number="2"/>
							<FeaturesSliderItem text="Третье целевое преимущество" number="3"/>
							<FeaturesSliderItem text="Четвертое целевое преимущество" number="4"/>
						</div>
						<button className="features-slider-arrow features-slider-prev">
							<svg width="9" height="16"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
								</path>
							</svg>
						</button>
						<button className="features-slider-arrow features-slider-next">
							<svg width="9"
								height="16" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
								</path>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = { name: '',
			tel: '',
			email: '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		console.log(event.target);
		if (event.target.id === 'name') {
			this.setState({ name: event.target.value });
		} else if (event.target.id === 'tel') {
			this.setState({ tel: event.target.value });
		} else {
			this.setState({ email: event.target.value });
		}

	}
	handleSubmit(event) {
		alert(`Отправленное имя: ${this.state.name},
		tel: ${this.state.tel},
		email: ${this.state.email}`);
		event.preventDefault();
	}
	render() {
		return (
			<form className="contact-form" onSubmit={this.handleSubmit}>
				<input type="text" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Ваше имя"/>
				<input type="tel" id="tel" value={this.state.tel} onChange={this.handleChange} placeholder="Телефон"/>
				<input type="email" id='email'  value={this.state.email} onChange={this.handleChange} placeholder="E-mail"/>
				<Button class="contact-btn" text="Позвоните мне"/>
			</form>
		);
	}
}

function Contact() {
	return (
		<section className="contact">
			<div className="wrapper">
				<div className="contact-wrapper">
					<h2 className="contact-title">Остались вопросы?</h2>
					<div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
					<ContactForm/>
					<div className="contact-personal">Я даю своё<a href="#">согласие</a>на обработку моих персональных данных.</div>
				</div>
			</div>
		</section>
	);
}

function Footer(props) {
	return (
		<footer>
			<div className="footer">
				<div className="footer-logo"></div>
				<div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
				<a href="tel:888" className="footer-phone"></a>
				<div className="footer-websurfer"><span className="footer-websurfer_build">Сделано </span> <a href="#"
				>Ваше имя</a></div>
				<div className="footer-phonelink"><a href="tel:888">{`+${props.numberPhone}`}	</a></div>
			</div>
		</footer>
	);
}


function App() {
	return (
		<div>
			<Header numberPhone='7(962)556-1234'/>
			<Main/>
			<Features/>
			<Contact/>
			<Footer numberPhone='7(962)556-1234'/>
		</div>
	);
}

export default App;
