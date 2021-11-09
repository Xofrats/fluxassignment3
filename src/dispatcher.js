export default store => async ({type, ...params}) =>  {
    switch(type) {
      case 'hire':
        const { id } = params
        const salary = window.prompt('Salary?')
        if (salary) {
          const headers = { 'Content-Type': 'application/json', Accept: 'application/json' }
          const employee = await fetch('http://localhost:9090/employees',
            { method: 'POST', 
              body: JSON.stringify({ salary, manager: false }), 
              headers}).then(res => res.json())
          const person = await fetch('http://localhost:9090/persons/' + id,
            { method: 'PATCH', 
              body: JSON.stringify({ employeeId: employee.employeeId }), 
              headers}).then(res => res.json())
          store({type, ...params, employee, person})
        }
        break;

        case 'updateLatest':
        const data_res = await fetch('http://localhost:8080/data/Horsens')
        const data = await data_res.json()
        const forecasts = await fetch('http://localhost:8080/forecast').then(res => res.json())
          store({type, ...params, forecasts, data})
        break;

        // case 'updateAll':
        // const data_res = await fetch('http://localhost:8080/data')
        // const data = await data_res.json()
        // const forecasts = await fetch('http://localhost:8080/forecast').then(res => res.json())
        //   store({type, ...params, forecasts, data})
        // break;

      default:
    }
}
