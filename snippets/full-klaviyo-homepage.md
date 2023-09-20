```javascript
// Paste into Home page template
window.addEventListener('load', function() {
// on Home page, initialize 
let item = {};
var _learnq = window._learnq || [];
function addedToCart() {
  fetch(`${window.location.origin}/cart.js`)
  .then(res => res.clone().json().then(data => {
    var cart = {
      total_price: data.total_price/100,
      $value: data.total_price/100,
      total_discount: data.total_discount,
      original_total_price: data.original_total_price/100,
      items: data.items
    }
        if (item !== 'undefined') {
          cart = Object.assign(cart, item)
        } 
    if (klAjax) {
        _learnq.push(['track', 'Added to Cart', cart]);
        klAjax = false;
      }
  }))
}
(function (ns, fetch) {
  ns.fetch = function() {
    const response = fetch.apply(this, arguments);
    response.then(res => {
      if (`${window.location.origin}/cart/add.js`
        .includes(res.url)) {
          addedToCart()
      }
    });
    return response
  }
}(window, window.fetch));
var klAjax = true;
var atcButtons = document.querySelectorAll("form[action*='/cart/add'] button[type='submit']");
for (var i = 0; i < atcButtons.length; i++) {
    atcButtons[i].addEventListener("click", async function(ev) {
      let productHandle = ev.target.parentElement.parentElement.getAttribute('data-product-handle')  

      if (klAjax) {
        item = await fetchProductData(productHandle)
        _learnq.push(['track', 'Added to Cart', item]);
        klAjax = false;  
      }
    })
}
});

async function fetchProductData(productHandle) {
  try {
    const response = await fetch(`https://getonly.ca/products/${productHandle}.json`);
    const data = await response.json();

    const product = data.product;
    const originalURL = data.product.images[0].src;
    // Use a regex to insert _grande file size (to make it smaller)
    const modifiedURL = originalURL.replace(/\.(jpg|jpeg|png)/, '_grande.$1');

    return {
      "Name": product.title,
      "ProductID": product.id,
      "Categories": [],
      "ImageURL": modifiedURL,
      "URL": `https://getonly.ca/products/${product.handle}`,
      "Brand": product.vendor,
      "Price": product.variants[0].price,
      "CompareAtPrice": product.variants[0].compare_at_price
    };
  } catch (error) {
    console.error('Error fetching product data:', error);
    return null; // Handle errors as needed
  }
}
console.log('Klaviyo Home Page loaded!')
```