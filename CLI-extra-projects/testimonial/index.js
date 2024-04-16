const People = [
    {
        name: "Pero P", 
        text: "Thanks Amejzing Podcast! Amejzing Podcast should be nominated for service of the year. This is simply unbelievable!",
    }, 
    {
        name: "Vojko V",
        text: "I will recommend you to my colleagues. Without Amejzing Podcast, we would have gone bankrupt by now. Absolutely wonderful! I would be lost without Amejzing Podcast."
    }, 
    {
        name: "Krešo K", 
        text: "Just what I was looking for. Amejzing Podcast saved my business. If you want real marketing that works and effective implementation - Amejzing Podcast's got you covered."
    }
]

const Photos = [
    "pics/aiony-haust-3TLl_97HNJo-unsplash.jpg",
    "pics/albert-dera-ILip77SbmOE-unsplash.jpg",
    "pics/jimmy-fermin-bqe0J0b26RQ-unsplash.jpg"
];

let i = 0; 

quoteEl = document.querySelector(".quote");
nameEl = document.querySelector(".name");
pictureEl = document.querySelector(".picture");

//console.log(People[1].name);
console.log(pictureEl);

function update(){
    quoteEl.innerText = People[i%3].text;
    nameEl.innerText = People[i%3].name;
    pictureEl.innerHTML = `<img class="image" src="${Photos[i%3]}" alt="">`;
    setTimeout(update, 2000);

    i++;
}

update();