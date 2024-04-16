let shop = document.getElementById('shop');
let currCategory = document.getElementById('curr-category');
let slogan = document.getElementById('hero-text');
let basket = JSON.parse(localStorage.getItem("bzvz")) || []; //ako imamo local data uzmi to 


const catsButton = document.getElementById('cats');
const miceButton = document.getElementById('mice');
const rabbitsButton = document.getElementById('rabbits');
const hamstersButton = document.getElementById('hamsters');
const fishButton = document.getElementById('fish');
const birdsButton = document.getElementById('birds');
const lizardsButton = document.getElementById('lizards');
const snakesButton = document.getElementById('snakes');
const otherButton = document.getElementById('other');
const dogsButton = document.getElementById('dogs');

let generateCategory = (c) => {
    let products = podaci.categories.find((y) => y.name === c).products;
    currCategory.innerHTML = `<div>CURRENT CATEGORY: ${podaci.categories.find((y) => y.name === c).name}</div>`

    console.log(products);
    return shop.innerHTML = products.map((x) => {
        let {name, image} = x; 
        let search = basket.find((x) => x.id === name) || [ ]; // pronadi u basketu na koliko je trenutno 
        return `
        <div id=name-${name} class="item">
                <img width="218" src=${image} alt="">
                <div class="details">
                    <div onclick="increment(${name})" class="buy-button">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <div id=${name} class="quantity">${search.quantity === undefined ? 0 : search.quantity}</div>
                    </div>
                    <h3>${name}</h3>
                </div>
            </div>   
        `
    }).join("");
}

catsButton.addEventListener('click', () => {
    generateCategory('cats');
    slogan.innerHTML = `For the curious ones...`;
});
miceButton.addEventListener('click', () => {
    generateCategory('mice');   
    slogan.innerHTML = `For the cute ones...`;
});
rabbitsButton.addEventListener('click', () => {
    generateCategory('rabbits');
    slogan.innerHTML = `For the fluffy ones...`;
});
hamstersButton.addEventListener('click', () => {
    generateCategory('hamsters');
    slogan.innerHTML = `For the playful ones...`;
});
fishButton.addEventListener('click', () => {
    generateCategory('fish');
    slogan.innerHTML = `For the serene ones...`;
});
birdsButton.addEventListener('click', () => {
    generateCategory('birds');
    slogan.innerHTML = `For the singing ones...`;
});
lizardsButton.addEventListener('click', () => {
    generateCategory('lizards');
    slogan.innerHTML = `For the unique ones...`;
});
snakesButton.addEventListener('click', () => {
    generateCategory('snakes');
    slogan.innerHTML = `For the mysterious ones...`;
});
otherButton.addEventListener('click', () => {
    generateCategory('other');
    slogan.innerHTML = `For the special ones...`;
});
dogsButton.addEventListener('click', () => {
    generateCategory('dogs');
    slogan.innerHTML = `For the loyal ones...`;
});

let increment = (name) => {
    let selectedItem = name; 
    console.log(selectedItem.id);
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
    console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("bzvz", JSON.stringify(basket));
};

// izracun kolicine na kartici
let update = (id) => { 
    let search = basket.find((x) => x.id === id);
    //console.log(search.quantity);
    document.getElementById(id).innerHTML = search.quantity;
    calculation();
}

// izracun ikonice uz kosaricu
let calculation = () => { 
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.map((x) => x.quantity).reduce((acc, curr) => acc + curr, 0) || '';
};

calculation();