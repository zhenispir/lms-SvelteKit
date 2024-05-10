/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rb0gjn41basbmew",
    "created": "2024-05-06 04:59:30.154Z",
    "updated": "2024-05-06 04:59:30.154Z",
    "name": "categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a9nju1vo",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "uuaoxefg",
        "name": "courses",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "evzj91z8cwoiskz",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rb0gjn41basbmew");

  return dao.deleteCollection(collection);
})
