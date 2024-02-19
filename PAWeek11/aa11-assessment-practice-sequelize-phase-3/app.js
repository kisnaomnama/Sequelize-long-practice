require('express-async-errors');
require('dotenv').config();
const express = require('express');
const { WarehouseItem } = require('./db/models')
const app = express();

app.use(express.json());


app.get('/items', async (req, res) => {
  const items = await WarehouseItem.findAll({
    where: {
      isUsed: false
    }
  })
  res.json(items)
})


app.put('/items/:id', async (req, res) => {
 const { name, price, quantity, isUsed } = req.body;
 const updateItem = await WarehouseItem.findByPk(req.params.id)

  if(!updateItem){
    res.status(404)
    res.json(
      {
        "message": "Warehouse Item not found"
      }
    )
  }
    await updateItem.update({
      name: name || updateItem.name,
      price: price || updateItem.price,
      quantity: quantity || updateItem.quantity,
      isUsed: isUsed || isUsed === true || isUsed === false ? isUsed: updateItem.isUsed
    })

    await updateItem.save()
    res.json(updateItem)
})


if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}
