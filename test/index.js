const expect = require('chai').expect
const update = require('../lib/').update
const oldModel = require('./model.json')

describe('lib', () => {

  describe('update', () => {

    it('should produce a model as an output', () => {
      const res = update(oldModel)
      expect(res).to.exist
      expect(typeof res).to.equal('object')
      expect(res[0]).to.exist
      expect(res[0].cover).to.equal('collection')
      expect(res[0].label).to.equal('uri')
      expect(res[0].name).to.equal('uri')
    })

    it('should un-autogenerate the URI', () => {
      const uri = update(oldModel)[0]
      expect(uri.transformers).to.exist
      expect(uri.transformers.length).to.equal(1)
      expect(uri.transformers[0].operation).to.equal('COLUMN')
      expect(uri.transformers[0].args).to.deep.equal([
        {
          "name": "column",
          "type": "column",
          "value": "uri"
        }
      ])
    })

    it('should put the label into the args[0].value', () => {
      const collection = update(oldModel)[1]
      expect(collection.transformers).to.exist
      expect(collection.transformers.length).to.equal(1)
      expect(collection.transformers[0].args[0].value).to.equal("Nom de la catégorie")
    })

    it('should transofrm multiple transformers into one', () => {
      const istexQuery = update(oldModel)[6]
      expect(istexQuery.transformers.length).to.equal(1)
      expect(istexQuery.transformers[0].args[0].value).to.equal("Dans ISTEX")
    })
  })

})