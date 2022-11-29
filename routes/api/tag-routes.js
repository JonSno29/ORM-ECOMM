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

  

router.post('/', async (req, res) => {
  try {
    const newTagData = await Tag.create();
    res.status(201).json(newTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const updateTag = await Tag.update({
      tag_name: req.body.tag_name,
    }, {
      where: {
        id: req.params.id,
      },
});
    res.status(200).json(updatedTag);
} catch (err) {
  res.status(500).json(err);
}
});

router.delete('/:id', async(req, res) => {
  try {
    const deleteTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
});
if (!deletedTag) {
  res.status(404).json({ message: 'No tag found with this id!'});
  return;
}
    res.status(200).json(deletedTag);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
