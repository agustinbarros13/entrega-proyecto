document.addEventListener('DOMContentLoaded', function () {
  const products = [
    {
      name: 'Guitarra Acústica Fender',
      price: 299,
      stars: 4.5,
      reviews: 200,
      seller: 'Fender',
      image:
        'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10002/097-0113-309_gtr_frt_001_rr.jpg'
    },
    {
      name: 'Piano Digital Yamaha',
      price: 799,
      stars: 4.8,
      reviews: 350,
      seller: 'Yamaha',
      image:
        'https://www.istockphoto.com/es/foto/sintetizador-electr%C3%B3nica-aislado-sobre-fondo-blanco-gm513439116-87611219'
    },
    {
      name: 'Violín Stradivarius',
      price: 5000,
      stars: 5,
      reviews: 150,
      seller: 'Stradivarius',
      image:
        'https://www.dawkes.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/4/6/460_1.jpg'
    },
    {
      name: 'Batería Pearl',
      price: 999,
      stars: 4.6,
      reviews: 400,
      seller: 'Pearl',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/91ApHKzpCrL._AC_SX425_.jpg'
    },
    {
      name: 'Saxofón Yamaha',
      price: 1200,
      stars: 4.7,
      reviews: 300,
      seller: 'Yamaha',
      image: 'https://static.keymusic.com/products/57771/XL/yamaha-yas-280.jpg'
    },
    {
      name: 'Teclado Casio',
      price: 199,
      stars: 4.3,
      reviews: 250,
      seller: 'Casio',
      image: 'https://m.media-amazon.com/images/I/71Kdt8K8HJL._AC_SL1500_.jpg'
    },
    {
      name: 'Guitarra Eléctrica Gibson Les Paul',
      price: 1499,
      stars: 4.9,
      reviews: 500,
      seller: 'Gibson',
      image:
        'https://cdn.shopify.com/s/files/1/0206/9470/products/gibson_les_paul_black_beauty_3d8e923b-51b9-48c3-9e28-d0a8bae43a41_1024x1024.jpg'
    },
    {
      name: 'Flauta Traversa Gemeinhardt',
      price: 399,
      stars: 4.4,
      reviews: 180,
      seller: 'Gemeinhardt',
      image:
        'https://cdn.shopify.com/s/files/1/0022/4007/8989/products/gemeinhardt-3sb.jpg'
    },
    {
      name: 'Bajo Fender Precision',
      price: 899,
      stars: 4.7,
      reviews: 320,
      seller: 'Fender',
      image:
        'https://www.fmicassets.com/Damroot/GuitarVertDesktopJpg/10006/0146102521_gtr_frt_001_rr.jpg'
    },
    {
      name: 'Acordeón Hohner',
      price: 999,
      stars: 4.6,
      reviews: 250,
      seller: 'Hohner',
      image:
        'https://images-na.ssl-images-amazon.com/images/I/61X2-VOn+UL._AC_SL1500_.jpg'
    }
  ]

  const productContainer = document.getElementById('productContainer')
  const productTemplate = document.getElementById('productTemplate')

  // Función para generar las cartas de producto
  function generateProductCard(product) {
    const card = productTemplate.content.cloneNode(true)
    card.querySelector('.product-image').src = product.image
    card.querySelector('.product-name').textContent = product.name
    card.querySelector(
      '.product-price'
    ).textContent = `Precio: $${product.price}`
    card.querySelector(
      '.product-stars'
    ).textContent = `Estrellas: ${product.stars}`
    card.querySelector(
      '.product-reviews'
    ).textContent = `Reseñas: ${product.reviews}`
    card.querySelector(
      '.product-seller'
    ).textContent = `Vendedor: ${product.seller}`
    return card
  }

  // Función para renderizar los productos en la página
  function renderProducts(products) {
    productContainer.innerHTML = ''
    products.forEach((product) => {
      const card = generateProductCard(product)
      productContainer.appendChild(card)
    })
  }

  // Renderizar los productos al cargar la página
  renderProducts(products)

  // Implementa la lógica para los filtros
})
function generateProductHTML(product) {
  return `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Precio: $${product.price}</p>
      <p>Categoría: ${product.category}</p>
    </div>
  `
}

function addProductsToPage() {
  const productsContainer = document.getElementById('products-container')
  productsContainer.innerHTML = ''
  products.forEach((product) => {
    const productHTML = generateProductHTML(product)
    productsContainer.innerHTML += productHTML
  })
}

document.addEventListener('DOMContentLoaded', addProductsToPage)
