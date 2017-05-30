module.exports.update = (oldModel) => {
  const model = oldModel
  model.forEach((field) => {
    field.transformers = [{
      'operation': 'COLUMN',
      'args': [
        {
          'name': 'column',
          'type': 'column',
          'value': field.label
        }
      ]
    }]
  })
  return model
}
