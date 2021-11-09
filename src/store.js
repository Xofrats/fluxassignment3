export default (init_model, view, renderer) => {
    let model = init_model
  
    function reducer(action, model) {
      const {forecasts, data} = action
      switch(action.type) {

          case 'updateLatest':
          return model.updateLatest(data, forecasts)

          case 'updateAll':
          return model.updateModel(data, forecasts)
  
        default:
          return model
      }
    }
  
    return action => {
      model = reducer(action, model)
      renderer(view(model))
    }
  }