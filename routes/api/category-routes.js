const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/',async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{
        model: Product,
        as: 'products'}],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
      
  }
});

router.get('/:id', async (req, res) => {
  try {
    const categoryDataById = await Category.findByPk(req.params.id, {
      include: [{ model: Product, as: 'products' }],
      });
      if (!categoryDataById) {
        res.status(404).json({ message:'No category found with id '})
        return;
      }
      res.status(200).json(categoryDataById);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
  try {
    const newCategoryData = await Category.create(req.body);
    res.status(201).json(newCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  
});

router.put('/:id', async(req, res) => {
  try {
    const updatedCategory = await Category.update ({
      category_name: require.body.category_name,
    }, {
      where: {
        id: req.params.id
      },
    });
   if (!updatedCategory) {
      res.status(404).json({ message: 'No category found with id!'});
      return;
   }
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id,
      },
});
    if (!deletedCategory) {
      res.status(404).json({ message: 'No category found with id!'});
      return; 
    }
    res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
