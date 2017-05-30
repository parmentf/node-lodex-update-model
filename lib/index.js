module.exports.update = (oldModel) => {
  const model = oldModel
  const uri = model[0]
  uri.transformers[0].operation = 'COLUMN'
  uri.transformers[0].args = [
      {
          "name": "column",
          "type": "column",
          "value": "uri"
      }
  ]
  return model
}