let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem("data")) || []; //ako imamo local data uzmi to 

let calculation = () => { 
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.quantity).reduce((acc, curr) => acc + curr, 0);
};

calculation();

let generateCardItems = () => {
    if(basket.length !== 0){
        //console.log("basket is not empty");
        return shoppingCart.innerHTML = basket.map((x) => { //x targeta sve iz local storagea -> svaku karticu
            let {id, quantity} = x;
            let search = shopItemsData.find((y) => y.id === id) || []
            return `
            <div class="cart-item">
                <img width="200" src=${search.img} alt="">
                <div class="details">
                    <div class="title-price-x">
                        <h4 class="title-price">
                            <p>${search.name}</p>
                            <p class = "cart-item-price">$ ${search.price}</p>
                        </h4>
                        <i onclick="removeItem(${id})" class="bi-x-lg"></i>
                    </div>
                    <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                            <div id=${id} class="quantity">
                                ${x.quantity}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                    </div>
                    <h3>
                        $ ${quantity*search.price}
                    </h3>
                </div>
            </div> 
            `
        }).join("");
    }
    else
    {
        //console.log("basket is empty");
        shoppingCart.innerHTML = ``;
        label.innerHTML= `
        <h2> Cart is Empty </h2>
        <a href = "index.html">
            <button class="HomeBtn">Back to home</button>
        </a>
        `;
    }   
}

let increment = (id) => {
    let selectedItem = id; 
    let search = basket.find((x) => x.id === selectedItem.id)

    if(search === undefined){
        basket.push({
            id: selectedItem.id, 
            quantity: 1
        });
    }
    else{
        search.quantity++;
    }
    //console.log(basket);
    update(selectedItem.id);
    generateCardItems();
    localStorage.setItem("data", JSON.stringify(basket));
}

let decrement = (id) => {  
    let selectedItem = id; 
    let search = basket.find((x) => x.id === selectedItem.id)

    if(!search || search.quantity === 0) return; // ako je nula izbaci iz programa i nista ne radi
    else{
        search.quantity--;
    }
    //console.log(basket);
    update(selectedItem.id);
    basket = basket.filter((x) => x.quantity !== 0) // nuzno iznad setitem, a ispod update
    generateCardItems(); // rerenderiraj kartice
    localStorage.setItem("data", JSON.stringify(basket));
}

// izracun kolicine na kartici
let update = (id) => { 
    let search = basket.find((x) => x.id === id);
    //console.log(search.quantity);
    document.getElementById(id).innerHTML = search.quantity;
    calculation();
    TotalAmount();
}; 

let removeItem = (id) => {
    let selectedItem = id; 
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateCardItems();
    calculation();
    localStorage.setItem("data", JSON.stringify(basket));
    TotalAmount();
}

let clearCart = () =>{
    basket=[];
    localStorage.setItem("data", JSON.stringify(basket)); // ova dva uvijek u kompletu 
    generateCardItems();
    calculation();
}

generateCardItems();

let TotalAmount = () =>{
    if(basket.length !== 0){
        let amount = basket.map((x) => {
            let {id, quantity} = x; 
            let search = shopItemsData.find((y) => y.id === id) || [];
            return quantity * search.price; 
        }).reduce((total, x) => total + x, 0); // vrijednost, inicjalna vrijednost
        console.log(amount);
        label.innerHTML = `
            <h2>Total bill: $ ${amount}</h2>
            <button class="checkout">Checkout</button>
            <button onclick="clearCart()" class="removeAll">Remove All</button>
        `
    }

    else return;
}
TotalAmount();

