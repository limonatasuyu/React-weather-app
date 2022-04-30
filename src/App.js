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
	
	
	function handleAnimation(event) {

		let oldClasses = {...containerAnims}
		let newClasses;
		
		if (event.pageX > 120 && event.pageX < 650)        {newClasses = leftClickAnims}
		else if (event.pageX > 1270 && event.pageX < 1790) {newClasses = rightClickAnims}
		else {return}

		setAnims(newClasses)
		setTimeout(() => {setAnims(oldClasses)}, 2000)
	}

	return(
		<div className="App">
			<h1 className="title">Current Weather</h1>
			<div className={containerAnims.animation + " contents--container"}>
				<ContentContainer className={containerAnims.leftNone}/>
				<ContentContainer onClick={handleAnimation}  className={containerAnims.left}/>
				<ContentContainer className={containerAnims.middle} />
				<ContentContainer onClick={handleAnimation} className={containerAnims.right}/>
				<ContentContainer className={containerAnims.rightNone}/>
			</div>
		</div>
	)
}
