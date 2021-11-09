export default store => async ({type, ...params}) =>  {
  const data_res = await fetch('http://localhost:8080/data/')
  const data = await data_res.json()
  const forecasts = await fetch('http://localhost:8080/forecast').then(res => res.json())

    switch(type) {

        case 'updateLatest':
          store({type, ...params, forecasts, data})
        break;

        case 'updateAll':

          store({type, ...params, forecasts, data})
        break;

      default:
    }
}
