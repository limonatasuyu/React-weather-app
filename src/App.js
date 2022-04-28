//import { useState, useEffect } from 'react'
import cloudyImg from './img/cloudy.jpeg'

const API_KEY = "cda7151f40e144b3a91153640222804"

function ContentContainer() {
	return(
		<div className="content--container">
			<img className="weather-img" src={cloudyImg} />
			<div className="text-content">
				<h1>London</h1>
				<p>Condition: cloudy</p>
				<p>Temp(C): 14.0</p>
				<p>Date: 28.04.2022</p>
			</div>
		</div>
	)
}

export default function App() {

	//const [data, setData] = useState({})

	//useEffect(() => {
	//	fetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=London&days=1&aqi=no&alerts=no`)
	//		.then(res => res.json())
	//		.then(data => setData(data))
	//}, [])
	//var condition = data.current.condition.text

	return(
		<div className="App">
			<h1 className="title">Current Weather</h1>
			<div className="contents--container">
				<div className="back-sign">&#60;</div>
				<ContentContainer />
				<div className="forward-sign">></div>
			</div>
		</div>
	)
}
