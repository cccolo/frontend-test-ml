const express = require('express');
const axios = require('axios');
const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

router.get('/api/items/:id', (req, res) => {
  const itemsPath = `https://api.mercadolibre.com/items/${req.params.id}`;
  const itemsDescriptionPath = `https://api.mercadolibre.com/items/${req.params.id}/description`;
  return axios.all([
    axios.get(itemsPath),
    axios.get(itemsDescriptionPath)
  ]).then(axios.spread((items, descriptions) => {
    const item = items.data;
    const description = descriptions.data;
    const response = {
      item: {
        title: item.title,
        picture: item.pictures[0].url,
        price: {
          currency: item.currency_id,
          amount: item.price
        },
        condition: item.condition,
        freeShipping: item.shipping.free_shipping,
        description: description.plain_text,
        soldQuantity: item.sold_quantity,
      }
    };
    const categoriesPath = `https://api.mercadolibre.com/categories/${item.category_id}`;
    axios.get(categoriesPath).then((items) => {
      response.categories = items.data.path_from_root.map((item) => item.name);
      return res.send(response);
    })
  })).catch((error) => console.log(error));
});

router.get('/api/items', (req, res) => {
  const searchPath = `https://api.mercadolibre.com/sites/MLA/search?q=%27${req.query.q}%27`;
  return axios.get(searchPath)
    .then((response) => {
      let categoryId = 0;
      const items = response.data.results.slice(0, 4)
      const ids = items.map((item) => item.id)
      if (items.length > 0) {
        categoryId = items[0].category_id
      }
      const itemsPath = `https://api.mercadolibre.com/items?ids=${ids.join(',')}`;
      const categoriesPath = `https://api.mercadolibre.com/categories/${categoryId}`;
      return axios.all([
        axios.get(itemsPath),
        axios.get(categoriesPath)
      ])
    })
    .then(axios.spread((items, categories) => {
      return res.send({
        items: items.data.map((item) => (
          {
            id: item.id,
            title: item.title,
            picture: item.pictures[0].url,
            price: {
              currency: item.currency_id,
              amount: item.price
            },
            condition: item.condition,
            freeShipping: item.shipping.free_shipping,
            location: item.seller_address.state.name
          }
        )),
        categories: categories.data.path_from_root.map((item) => item.name)
      })
    })).catch((error) => res.send({items: []}));
});

app.use('/', router);

app.listen(port);