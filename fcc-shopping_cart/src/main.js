let shop = document.getElementById('shop');


let basket = JSON.parse(localStorage.getItem("data")) || []; //ako imamo local data uzmi to 

let generateShop = () => {
    return shop.innerHTML = shopItemsData.map((x) => {
        let {id, name, price, desc, img} = x; //dereferenciranje
        let search = basket.find((x) => x.id === id) || [ ]; // pronadi u basketu na koliko je trenutno 
        return `
        <div id=product-id-${id} class="item">
                <img width="220" src=${img} alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$${price}</h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
                            <div id=${id} class="quantity">
                            ${search.quantity === undefined ? 0 : search.quantity}
                            </div>
                            <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
    `    
    }).join("");
}

generateShop();

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
   
    localStorage.setItem("data", JSON.stringify(basket));
}

// izracun kolicine na kartici
let update = (id) => { 
    let search = basket.find((x) => x.id === id);
    //console.log(search.quantity);
    document.getElementById(id).innerHTML = search.quantity;
    calculation();
}

// izracun ikonice uz kosaricu
let calculation = () => { 
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.quantity).reduce((acc, curr) => acc + curr, 0);
};

calculation();