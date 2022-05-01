const API_KEY = "cda7151f40e144b3a91153640222804"
const istanbulUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Istanbul&aqi=no`
const newYorkUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=New York&aqi=no`
const londonUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=London&aqi=no`
const berlinUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Berlin&aqi=no`
const tokyoUrl = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Tokyo&aqi=no`

const fetchDataFunction = () => {
	return (Promise.all([
		fetch(istanbulUrl).then(value => value.json()),
		fetch(newYorkUrl).then(value => value.json()),
		fetch(londonUrl).then(value => value.json()),
		fetch(berlinUrl).then(value => value.json()),
		fetch(tokyoUrl).then(value => value.json())
	])
	.then((responseData) => {
				return([
					{
						name: "Istanbul",
						currentWeather: responseData[0].current.condition.text,
						date: responseData[0].current.last_updated.slice(0, 10),
						temp_c: responseData[0].current.temp_c,
					},
					{
						name: "New York",
						currentWeather: responseData[1].current.condition.text,
						date: responseData[1].current.last_updated.slice(0, 10),
						temp_c: responseData[1].current.temp_c,
					},
					{
						name: "London",
						currentWeather: responseData[2].current.condition.text,
						date: responseData[2].current.last_updated.slice(0, 10),
						temp_c: responseData[2].current.temp_c,
					},
					{
						name: "Berlin",
						currentWeather: responseData[3].current.condition.text,
						date: responseData[3].current.last_updated.slice(0, 10),
						temp_c: responseData[3].current.temp_c,
					},
					{
						name: "Tokyo",
						currentWeather: responseData[4].current.condition.text,
						date: responseData[4].current.last_updated.slice(0, 10),
						temp_c: responseData[4].current.temp_c,
					},
				])
			})
	)
}

export default fetchDataFunction
