const Product = require('../models/product');
// const Cart = require('../models/cart');

 exports.getProducts =  (req, res, next) => {
  Product.findAll()
  .then(products=>{
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
    res.send({
      content: products
    })
  })
.catch (err => console.log(err));
};


exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  
  Product.findByPk(prodId)
  .then(product =>{
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.name,
      path: '/products'
    });
    })
    .catch(err => console.log(err));
};

exports.getIndex  = async (req, res, next) => {
const pageAsNumber = Number.parseInt(req.query.page);
const  sizeAsNumber = Number.parseInt(req.query.size);

let page = 0;
if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
  page= pageAsNumber;
}

let size = 8;
if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10 ){
  size = sizeAsNumber;
}

const prods_ = await Product.findAndCountAll({
  limit : size,
  offset : page * size
})
    res.render('shop/index', {
      prods: prods_.rows,
      pageTitle: 'Shop',
      totalPage: Math.ceil(prods_.count / size),
      path: '/'
    });
}

// exports.getCart = (req, res, next) => {
//   Cart.getCart(cart => {
//     Product.fetchAll(products => {
//       const cartProducts = [];
//       for (product of products) {
//         const cartProductData = cart.products.find(
//           prod => prod.id === product.id
//         );
//         if (cartProductData) {
//           cartProducts.push({ productData: product, qty: cartProductData.qty });
//         }
//       }
//       res.render('shop/cart', {
//         path: '/cart',
//         pageTitle: 'Your Cart',
//         products: cartProducts
//       });
//     });
//   });
// };

// exports.postCart = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findById(prodId, product => {
//     Cart.addProduct(prodId, product.price);
//   });
//   res.redirect('/cart');
// };

// exports.postCartDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findById(prodId, product => {
//     Cart.deleteProduct(prodId, product.price);
//     res.redirect('/cart');
//   });
// };

// exports.getOrders = (req, res, next) => {
//   res.render('shop/orders', {
//     path: '/orders',
//     pageTitle: 'Your Orders'
//   });
// };

// exports.getCheckout = (req, res, next) => {
//   res.render('shop/checkout', {
//     path: '/checkout',
//     pageTitle: 'Checkout'
//   });
// };
