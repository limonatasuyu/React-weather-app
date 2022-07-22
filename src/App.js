import { useState, useEffect} from 'react'
import defaultImg from './img/default.jpeg'
import sunnyImg from './img/sunny.jpeg'
import cloudyImg from './img/cloudy.jpeg'
import lightRainImg from './img/lightRain.jpeg'
import rainyImg from './img/rainy.jpeg'
import overcastImg from './img/overcast.jpg'
import './animations.css'
import fetchDataFunction from './fetchData'


function ContentContainer(props) {

	let weatherImg = defaultImg;
	
	// Checks if the data fetched at the time
	if (props.data) {
		if (props.data.currentWeather === "Sunny") {weatherImg = sunnyImg}
		if (props.data.currentWeather === "Light rain") {weatherImg = lightRainImg}
		if (props.data.currentWeather === "Rainy") {weatherImg = rainyImg}
		if (props.data.currentWeather === "Partly cloudy" || props.data.currentWeather === "cloudy") {weatherImg = cloudyImg}
		if (props.data.currentWeather === "Overcast") {weatherImg = overcastImg}
	}
	return(
		<div className={props.className + " content--container"} onClick={props.onClick}>
			<img className="weather-img" src={weatherImg} alt="some" />
			<div className="text-content">
				<h1>{props.data && props.data.name}</h1>
				<p>Condition: {props.data && props.data.currentWeather}</p>
				<p>Temp(C): {props.data && props.data.temp_c}</p>
				<p>Date: {props.data && props.data.date}</p>
			</div>
		</div>
	)
}

export default function App() {
	
	const [containerAnims, setAnims] = useState({
		animation: " ",
		leftNone: "container-left--none",
		left: "container-left",
		middle: "container-middle",
		right: "container-right",
		rightNone: "container-right--none",
	})
	
	const rightClickAnims = {
			animation: "right-to-left ",
			leftNone:  "container-left--none",
			left:  "container-left left-to-none",
			middle: "container-middle middle-to-left",
			right: "container-right right-to-middle",
			rightNone: "container-right--none none-to-right",
		}
	const leftClickAnims = {
			animation: "left-to-right ",
			leftNone:  "container-left--none none-to-left",
			left:  "container-left left-to-middle",
			middle: "container-middle middle-to-right",
			right: "container-right right-to-none",
			rightNone: "container-right--none",
		}
	
	function handleClick(event) {

		let oldClasses = {...containerAnims}
		let newClasses;
		let newData;
		
		const leftClickData = [data[4], ...data.slice(0, 4)]
		const rightClickData = [...data.slice(1,5), data[0]] 
		
		if (event.pageX > 120 && event.pageX < 650)        {newClasses = leftClickAnims;  newData=leftClickData}
		else if (event.pageX > 1270 && event.pageX < 1790) {newClasses = rightClickAnims; newData=rightClickData}
		else {return}

		setAnims(newClasses)
		setTimeout(() => {setAnims(oldClasses); setData(newData)}, 2000)
	}
	
	const [data, setData] = useState({})

	useEffect(() => {
		fetchDataFunction()
			.then(data => setData(data))
	}, [])

	return(
		<div className="App">
			<h1 className="title">Current Weather</h1>
			<div className={containerAnims.animation + " contents--container"}>
				<ContentContainer data={data[0]}  className={containerAnims.leftNone}/>
				<ContentContainer data={data[1]} onClick={handleClick}  className={containerAnims.left}/>
				<ContentContainer data={data[2]} className={containerAnims.middle} />
				<ContentContainer data={data[3]} onClick={handleClick} className={containerAnims.right}/>
				<ContentContainer data={data[4]} className={containerAnims.rightNone}/>
			</div>
		</div>
	)
}
