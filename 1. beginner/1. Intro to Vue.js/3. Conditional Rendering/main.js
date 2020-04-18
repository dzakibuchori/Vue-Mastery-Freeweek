//Add an onSale property to the data, and use it to conditionally render a span that says “On Sale!”
var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: '../vmSocks-green-onWhite.jpg',
        inventory: 0,
        // inStock: true,
        onSale: true
    }
})

