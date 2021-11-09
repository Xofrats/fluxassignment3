export default (init_model, view, renderer) => {
    let model = init_model
  
    function reducer(action, model) {
      switch(action.type) {
        case 'hire':
          const { employee, person } = action
          return model.addEmployee(employee).updatePerson(person)

          case 'updateLatest':
          const {forecasts, data} = action
          return model.updateModel(data, forecasts)

          // case 'updateAll':
          //   const {forecasts, data} = action
          //   return model.updateModel(data, forecasts)
  
        default:
          return model
      }
    }
  
    return action => {
      model = reducer(action, model)
      renderer(view(model))
    }
  }