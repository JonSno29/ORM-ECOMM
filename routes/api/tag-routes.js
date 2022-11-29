const router = require('express').Router();
const { async } = require('seed/lib/seed');
const { Tag, Product, ProductTag } = require('../../models');


// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagMD = await Tag.findAll({
      include: [
      {
        model: Product,
        through: ProductTag,
        attributes: ['id','product_name','price', 'stock', 'category_id'],
      },
    ],
    });
    res.status(200).json(tagMD);
  } catch (err) {
    res.status(500).json(err);
  }
     });

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        attributes: ['id',],
      }
    ]
})
.then(dbTagData => {
  if (!dbTagData) {
    res.status(404).json({ message: 'No post found with this id'});
    return;
  }
  res.json(dbTagData);
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
});
});

  

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
