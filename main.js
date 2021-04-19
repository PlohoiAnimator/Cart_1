let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Grey Tshirt',
        tag: 'greytshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Grey Hoodie',
        tag: 'greyhoodie',
        price: 20,
        inCart: 0
    },
    {
        name: 'Black Tshirt',
        tag: 'blacktshirt',
        price: 15,
        inCart: 0
    },
    {
        name: 'Black Hoodie',
        tag: 'blackhoodie',
        price: 20,
        inCart: 0
    }

];

for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalPrice(products[i]);
    });
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    document.querySelector('.cart span').textContent = productNumbers;
}
onLoadCartNumbers();

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span'). textContent = 1;
    }
    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        cartItems = {
            [product.tag]:product
        }
        cartItems.inCart = 1;
    }
    localStorage.setItem('productInCart', JSON.stringify(cartItems));
}

function totalPrice(product){
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem('productInCart');
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');
    cartItems = JSON.parse(cartItems);

    if(cartItems && productContainer){
        productContainer.innerHTML += "";
        Object.values(cartItems).map(items => {
            productContainer.innerHTML += `
                <div class="product">
                    <ion-icon name="close-circle"></ion-icon>
                    <img src="images/${items.tag}.jpg">
                    <span>${items.name}</span>
                </div>
                <div class = "price">$${items.price}.00</div>
                <div class="quantity">
                <ion-icon name="arrow-back-circle"></ion-icon>${items.inCart}<ion-icon name="arrow-forward-circle"></ion-icon>
                </ion-icon>
                </div>
                <div class="total">$${items.inCart * items.price}.00</div>
            `;
        });
        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">Basket Total</h4>
                <h4 class="basketTotal">$${cartCost}.00</h4>
            </div>
        `;
    }
}
displayCart();















































/*let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Grey Tshirt',
        tag: 'greytshirt',
        price: 15,
        cartIn: 0
    },
    {
        name: 'Grey Hoodie',
        tag: 'greyhoodie',
        price: 20,
        cartIn: 0
    },
    {
        name: 'Black Tshirt',
        tag: 'blacktshirt',
        price: 15,
        cartIn: 0
    },
    {
        name: 'Black Hoodie',
        tag: 'blackhoodie',
        price: 20,
        cartIn: 0
    }

];
for(let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
    })
}

function onLoadCartNumbers(){
    let productNumber = localStorage.getItem('cartNumbers');

    if(productNumber){
        document.querySelector('.cart span').textContent = productNumber;
    }
}

function cartNumbers(product){
    console.log(product);
    let productNumber = localStorage.getItem('cartNumbers');

    productNumber = parseInt(productNumber);

    if(productNumber){
        localStorage.setItem('cartNumbers', productNumber + 1);
        document.querySelector('.cart span').textContent = productNumber + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
}
onLoadCartNumbers();*/ 