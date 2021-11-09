const model = (weatherdatas, forecasts, filter = () => true) => {

    weatherdatas.forEach((item, i) => {item.id = i + 1;})

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

    const updateModel = (data, forecasts) => model(data, forecasts)

   // const updateLatest = (data) =>


    return { latestMeasurement, updateModel }
}

export default model