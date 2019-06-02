let outStr = apartments.map(item => item), list;

outStr = '';
list = document.querySelector('.apartments__inner');
apartmentsOut();
function apartmentsOut(counter = 0) {
    for (let i = counter; i < apartments.length; i++) {
        outStr += `
        <div class="apartments__item apartment d-flex ${apartments[i].mark}">
            <div class="apartment__inner">
                <div class="apartment__top-line top-line d-flex">
                    <div class="top-line__sale">${apartments[i].sale}</div>
                    <div class="top-line__offer">${apartments[i].offer}</div>
                    <div class="top-line__star"><img src="${apartments[i].star}"  alt=""></div>
                </div>
                <div class="apartment__img d-flex">
                    <img src="${apartments[i].img}" alt="">
                </div>
                <div class="apartment__description">
                    <p class="apartment__title">${apartments[i].name}</p>
                    <div class="apartment__props props d-flex">
                        <div class="props__look">${apartments[i].look}</div>
                        <div class="props__square"><span>${apartments[i].square}</span> м<sup
                                class="props__text props__text_sup">2</sup>
                            <p class="props__text">площадь</p>
                        </div>
                        <div class="props__floor"><span>${apartments[i].floor}</span> <p class="props__text">этаж</p>
                        </div>
                    </div>
                    <div class="apartment__price"><span>${(apartments[i].price).toLocaleString('ru')}</span> руб.</div>
                </div>
            </div>
            <div class="apartment__status">${apartments[i].status}</div>
        </div>
        `
        list.innerHTML = outStr;
    }
    document.querySelector('.apartmentsCount').innerHTML = apartments.length;
}


let minPriceButton, maxPriceButton, minRoomButton, maxRoomButton;

minPriceButton = document.querySelector('.dropdown__item_min-price').onclick = minPrice;
function minPrice() {
    document.querySelector('.filter__button_price').style.transform = 'rotate(0deg)';
    outStr = '';
    apartments.sort(sortMinPrice);
    apartmentsOut();
}
function sortMinPrice(a, b) {
    const priceOne = a.price;
    const priceTwo = b.price;
    let comparsion = 0;
    if (priceOne > priceTwo) {
        comparsion = 1;
    } else if (priceOne < priceTwo) {
        comparsion = -1;
    }
    return comparsion;
}

maxPriceButton = document.querySelector('.dropdown__item_max-price').onclick = maxPrice;
function maxPrice() {
    document.querySelector('.filter__button_price').style.transform = 'rotate(-180deg)';
    outStr = '';
    apartments.sort(sortMaxPrice);
    apartmentsOut();
}
function sortMaxPrice(a, b) {
    const priceOne = a.price;
    const priceTwo = b.price;
    let comparsion = 0;
    if (priceOne < priceTwo) {
        comparsion = 1;
    } else if (priceOne > priceTwo) {
        comparsion = -1;
    }
    return comparsion;
}

minRoomButton = document.querySelector('.dropdown__item_min-rooms').onclick = minRooms;
function minRooms() {
    document.querySelector('.filter__button_room').style.transform = 'rotate(0deg)';
    outStr = '';
    apartments.sort(sortMinRooms);
    apartmentsOut();
}
function sortMinRooms(a, b) {
    const roomOne = a.rooms;
    const roomTwo = b.rooms;
    let comparsion = 0;
    if (roomOne > roomTwo) {
        comparsion = 1;
    } else if (roomOne < roomTwo) {
        comparsion = -1;
    }
    return comparsion;
}

maxRoomButton = document.querySelector('.dropdown__item_max-rooms').onclick = maxRooms;
function maxRooms() {
    document.querySelector('.filter__button_room').style.transform = 'rotate(-180deg)';
    outStr = '';
    apartments.sort(sortMaxRooms);
    apartmentsOut();
}
function sortMaxRooms(a, b) {
    const roomOne = a.rooms;
    const roomTwo = b.rooms;
    let comparsion = 0;
    if (roomOne < roomTwo) {
        comparsion = 1;
    } else if (roomOne > roomTwo) {
        comparsion = -1;
    }
    return comparsion;
}

let apartmentsJSON = JSON.stringify(apartments); 
document.querySelector('.apartments__more-button').onclick = showMore;
function showMore() {

}