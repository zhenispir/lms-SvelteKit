/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("evzj91z8cwoiskz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5vi1jly1",
    "name": "categories",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "rb0gjn41basbmew",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("evzj91z8cwoiskz")

  // remove
  collection.schema.removeField("5vi1jly1")

  return dao.saveCollection(collection)
})
