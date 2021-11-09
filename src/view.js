import React from 'react'

const WeatherData = ({data}) => [
    <td key='value'>{data.value}</td>,
    <td key='type'>{data.type}</td>,
    <td key='unit'>{data.unit}</td>,
    <td key='time'>{data.time}</td>,
    <td key='place'>{data.place}</td>
]

const DataRow = (props) => (
    <tr>
        <WeatherData {...props}/>
    </tr>
)

const WeatherDataBody = ({model, dispatcher}) => (
    <tbody>
        {
            model.latestMeasurement().map(data => <DataRow key={data.id.toString()} {...{data, dispatcher}}/>)
        }
    </tbody>
)

// eslint-disable-next-line
export default dispatcher => model => (
    <div id='base'>
        <h1>Weather Data</h1><button onClick = {() => dispatcher()({type:'updateAll'})}>Update All</button>
        <h1>Latest Measurements</h1><button onClick = {() => dispatcher()({type:'updateLatest'})}>Update</button>
        <table id='latest'>
            <thead><tr><td>Value</td><td>Type</td><td>Unit</td><td>Time</td><td>Place</td></tr></thead>
            <WeatherDataBody model={model} dispatcher={dispatcher}/>
        </table>
    </div>
)