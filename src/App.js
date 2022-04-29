import { useState/*, useEffect*/ } from 'react'
import cloudyImg from './img/cloudy.jpeg'
import './animations.css'

//const API_KEY = "cda7151f40e144b3a91153640222804"

function ContentContainer(props) {
	return(
		<div className={props.className + " content--container"} onClick={props.onClick}>
			<img className="weather-img" src={cloudyImg} alt="some" />
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
	
	const [containerClasses, setClasses] = useState({
		leftNone: "container-left--none",
		left: "container-left",
		middle: "container-middle",
		right: "container-right",
		rightNone: "container-right--none",
	})
	
	function handleLeftClick() {

		let Animation = new Promise((resolve, reject) => {
			let newLeft = "container-left left-to-middle"
			let newMiddle = "container-middle middle-to-right"
			let newRight = "container-right right-to-none"
			let newClasses = {left: newLeft, middle: newMiddle, right: newRight}
			setClasses(newClasses)
			setTimeout(() => {resolve('resolved')}, 1000) 
		})
		
		Animation.then(() => {
			let newLeft = "container-left"
			let newMiddle = "container-middle"
			let newRight = "container-right"
			let newClasses = {left: newLeft, middle: newMiddle, right: newRight}
			setClasses(newClasses)
		})
	}
	
	function handleRightClick() {
	
	}

	return(
		<div className="App">
			<h1 className="title">Current Weather</h1>
			<div className="contents--container">
				<ContentContainer className={containerClasses.leftNone}/>
				<ContentContainer onClick={handleLeftClick}  className={containerClasses.left}/>
				<ContentContainer className={containerClasses.middle} />
				<ContentContainer onClick={handleRightClick} className={containerClasses.right}/>
				<ContentContainer className={containerClasses.rightNone}/>
			</div>
		</div>
	)
}
