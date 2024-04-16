let basket = JSON.parse(localStorage.getItem("bzvz")) || []; //ako imamo local data uzmi to 
console.log(basket);
let kosarica = document.getElementById('shopping-cart');
let artikl = document.getElementById('cart-items');


// izracun ikonice uz kosaricu
let calculation = () => { 
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.map((x) => x.quantity).reduce((acc, curr) => acc + curr, 0) || '';
};

calculation();

let generateCartItems = () => {
    if(basket.length !== 0){
        console.log("basket is not empty");
        return artikl.innerHTML = basket.map((x) => { //x targeta sve iz local storagea -> svaku karticu
            let {id, quantity} = x;
            return `
            <div class="single-item">
                <h4>${id}</h4>
                <div class="buttons">
                    <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                    <div id=${id} class="quantity">
                        ${quantity}
                    </div>
                    <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                </div>
            </div>
                    
            `
        }).join("");
    }
    else
    {
        //console.log("basket is empty");
        kosarica.innerHTML= `
        <h2 class="cart-heading"> Cart is Empty </h2>
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
    generateCartItems();
    localStorage.setItem("bzvz", JSON.stringify(basket));
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
    generateCartItems(); // rerenderiraj kartice
    localStorage.setItem("bzvz", JSON.stringify(basket));
}

// izracun kolicine na kartici
let update = (id) => { 
    let search = basket.find((x) => x.id === id);
    //console.log(search.quantity);
    document.getElementById(id).innerHTML = search.quantity;
    calculation();
}; 

let removeItem = (id) => {
    let selectedItem = id; 
    basket = basket.filter((x) => x.id !== selectedItem.id);
    generateCartItems();
    calculation();
    localStorage.setItem("bzvz", JSON.stringify(basket));
}

generateCartItems();

