const model = (weatherdatas, forecasts) => {

    weatherdatas.forEach((item, i) => {item.id = i + 1;})
    forecasts.forEach((item, i) => {item.id = i + 1;})

    const latestMeasurement = () => weatherdatas
            .sort((a, b) => (a.time > b.time) ? -1 : 1)
            .filter(point => point.place === "Copenhagen")
            .slice(0,4)
            .concat(weatherdatas.sort((a, b) => (a.time > b.time) ? -1 : 1)
            .filter(point => point.place === "Horsens")
            .slice(0,4))
            .concat(weatherdatas.sort((a, b) => (a.time > b.time) ? -1 : 1)
            .filter(point => point.place === "Aarhus")
            .slice(0,4))

    const minTemp = () => weatherdatas
            .filter(point => point.place === "Copenhagen")
            .filter(point => point.type === "temperature")
            .sort((a, b) => (a.value > b.value) ? 1 : -1)
            .slice(0,1)
            .concat(weatherdatas
                .filter(point => point.place === "Horsens")
                .filter(point => point.type === "temperature")
                .sort((a, b) => (a.value > b.value) ? 1 : -1)
                .slice(0,1))
                .concat(weatherdatas
                    .filter(point => point.place === "Aarhus")
                    .filter(point => point.type === "temperature")
                    .sort((a, b) => (a.value > b.value) ? 1 : -1)
                    .slice(0,1))

                    const maxTemp = () => weatherdatas
                    .filter(point => point.place === "Copenhagen")
                    .filter(point => point.type === "temperature")
                    .sort((a, b) => (a.value > b.value) ? -1 : 1)
                    .slice(0,1)
                    .concat(weatherdatas
                        .filter(point => point.place === "Horsens")
                        .filter(point => point.type === "temperature")
                        .sort((a, b) => (a.value > b.value) ? -1 : 1)
                        .slice(0,1))
                        .concat(weatherdatas
                            .filter(point => point.place === "Aarhus")
                            .filter(point => point.type === "temperature")
                            .sort((a, b) => (a.value > b.value) ? -1 : 1)
                            .slice(0,1))
                
                      
                    const totalPrecipitation = () =>  [weatherdatas
                        .filter(point => point.place === "Copenhagen")
                        .filter(point => point.type === "precipitation")
                        .slice(0,120)
                        .reduce((s, n) => ({value: s.value + n.value, place: "Copenhagen", id: 1}))]
                        .concat([weatherdatas
                            .filter(point => point.place === "Horsens")
                            .filter(point => point.type === "precipitation")
                            .slice(0,120)
                            .reduce((s, n) => ({value: s.value + n.value, place: "Horsens", id: 2}))]
                            )
                            .concat([weatherdatas
                                .filter(point => point.place === "Aarhus")
                                .filter(point => point.type === "precipitation")
                                .slice(0,120)
                                .reduce((s, n) => ({value: s.value + n.value, place: "Aarhus", id: 3}))]
                                )
                      
                    const avgWindspeed = () =>  [weatherdatas
                        .filter(point => point.place === "Copenhagen")
                        .filter(point => point.type === "wind speed")
                        .slice(0,120)
                        .reduce((s, n) => ({value: s.value + n.value /
                            weatherdatas.filter(point => point.place === "Copenhagen").filter(point => point.type === "wind speed").length
                            , place: "Copenhagen", id: 1}))]
                        .concat([weatherdatas
                            .filter(point => point.place === "Horsens")
                            .filter(point => point.type === "wind speed")
                            .slice(0,120)
                            .reduce((s, n) => ({value: s.value + n.value /
                                weatherdatas.filter(point => point.place === "Horsens").filter(point => point.type === "wind speed").length
                            , place: "Horsens", id: 2}))]
                            )
                            .concat([weatherdatas
                                .filter(point => point.place === "Aarhus")
                                .filter(point => point.type === "wind speed")
                                .slice(0,120)
                                .reduce((s, n) => ({value: s.value + n.value /
                                    weatherdatas.filter(point => point.place === "Aarhus").filter(point => point.type === "wind speed").length
                                    , place: "Aarhus", id: 3}))]
                                )
                
                
                    const hourlyPrediction = () => forecasts
                    .sort((a, b) => (a.time > b.time) ? 1 : -1)
                    .filter(point => point.place === "Copenhagen")
                    .slice(0,96)
                    .reverse()
                    .sort((a, b) => (a.type > b.type) ? 1 : -1)
                    .concat(forecasts.sort((a, b) => (a.time > b.time) ? 1 : -1)
                    .filter(point => point.place === "Horsens")
                    .slice(0,96)
                    .reverse()
                    .sort((a, b) => (a.type > b.type) ? 1 : -1)
                    )
                    .concat(forecasts.sort((a, b) => (a.time > b.time) ? 1 : -1)
                    .filter(point => point.place === "Aarhus")
                    .slice(0,96)
                    .reverse()
                    .sort((a, b) => (a.type > b.type) ? 1 : -1)
                    )

    const updateModel = (weatherdatas, forecasts) => model(weatherdatas, forecasts)

    const updateLatest = (weatherdatas, forecasts) => model(weatherdatas, forecasts)


    return { latestMeasurement, minTemp, maxTemp, totalPrecipitation, avgWindspeed, hourlyPrediction, updateModel, updateLatest }
}

export default model