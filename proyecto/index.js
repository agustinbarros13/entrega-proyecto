document.addEventListener('DOMContentLoaded', function () {
  const products = [
    {
      name: 'Guitarra Acústica Fender',
      price: 299,
      stars: 4.5,
      reviews: 200,
      seller: 'Fender',
      image: 'img/guitarra-acustica.jpg'
    },
    {
      name: 'Piano Digital Yamaha',
      price: 799,
      stars: 4.8,
      reviews: 350,
      seller: 'Yamaha',
      image: 'img/teclado.jpg'
    },
    {
      name: 'Violín Stradivarius',
      price: 5000,
      stars: 5,
      reviews: 150,
      seller: 'Stradivarius',
      image: 'img/violin.jpg'
    },
    {
      name: 'Batería Pearl',
      price: 999,
      stars: 4.6,
      reviews: 400,
      seller: 'Pearl',
      image: 'img/bateria.jpg'
    },
    {
      name: 'Saxofón Yamaha',
      price: 1200,
      stars: 4.7,
      reviews: 300,
      seller: 'Yamaha',
      image: 'img/saxo.jpg'
    },
    {
      name: 'Teclado Sound',
      price: 199,
      stars: 4.3,
      reviews: 250,
      seller: 'Sound',
      image: 'img/synte.jpg'
    },
    {
      name: 'Guitarra Eléctrica ',
      price: 1499,
      stars: 4.9,
      reviews: 500,
      seller: 'Gibson',
      image: 'img/guitarra.jpg'
    },
    {
      name: 'Flauta Traversa Gemeinhardt',
      price: 399,
      stars: 4.4,
      reviews: 180,
      seller: 'Gemeinhardt',
      image: 'img/flauta.jpg'
    },
    {
      name: 'Bajo Fender ',
      price: 899,
      stars: 4.7,
      reviews: 320,
      seller: 'Fender',
      image: 'img/bajo.jpg'
    },
    {
      name: 'Acordeón Hohner',
      price: 999,
      stars: 4.6,
      reviews: 250,
      seller: 'Hohner',
      image: 'img/acordeon.jpg'
    }
  ]

  const productContainer = document.getElementById('productContainer')
  const productTemplate = document.getElementById('productTemplate')
  const filterSeller = document.getElementById('filterSeller')
  const filterPrice = document.getElementById('filterPrice')
  const filterButton = document.getElementById('filterButton')
  const clearButton = document.getElementById('clearButton')

  // Función general para las cartas de producto
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

  // Función para los productos en la página
  function renderProducts(products) {
    productContainer.innerHTML = ''
    products.forEach((product) => {
      const card = generateProductCard(product)
      productContainer.appendChild(card)
    })
  }

  // Renderiza todos los productos
  renderProducts(products)

  // Agrega opciones de vendedores al filtro
  const sellers = [...new Set(products.map((product) => product.seller))]
  sellers.forEach((seller) => {
    const option = document.createElement('option')
    option.textContent = seller
    option.value = seller
    filterSeller.appendChild(option)
  })

  // Función para aplicar filtros
  function applyFilters() {
    const selectedSeller = filterSeller.value
    const maxPrice = parseInt(filterPrice.value)

    const filteredProducts = products.filter((product) => {
      return (
        (selectedSeller === '' || product.seller === selectedSeller) &&
        (isNaN(maxPrice) || product.price <= maxPrice)
      )
    })

    renderProducts(filteredProducts)
  }

  // Filtros acumulables
  filterSeller.addEventListener('change', applyFilters)
  filterButton.addEventListener('click', applyFilters)

  clearButton.addEventListener('click', function () {
    filterSeller.selectedIndex = 0
    filterPrice.value = ''
    renderProducts(products)
  })
})
