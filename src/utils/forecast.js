const request = require("request")

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=5e9a22780f21e64ea3e3b460ffdfacbc&query=" +
    latitude +
    "," +
    longitude
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Not able to connect to weather API", undefined)
    } else {
      if (response.body.error) {
        callback("Server error", undefined)
      } else {
        callback(
          undefined,
          ` It is currently ${
            response.body.current.temperature
          }  degress out there. It feels like ${+response.body.current
            .feelslike}. Forecast is ${
            response.body.current.weather_descriptions[0]
          }.`
        )
      }
    }
  })
}

module.exports = forecast
