var requestURL = 'js/apartments.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var apartments = request.response;
    apartmentsOut(apartments);
}

outStr = '';
var list = document.querySelector('.apartments__inner');
function apartmentsOut(jsonObj) {
    console.log()
    for (let i = 0; i < jsonObj.length; i++) {
        outStr += `
        <div class="apartments__item apartment d-flex ${jsonObj[i].mark}">
            <div class="apartment__inner">
                <div class="apartment__top-line top-line d-flex">
                    <div class="top-line__sale">${jsonObj[i].sale}</div>
                    <div class="top-line__offer">${jsonObj[i].offer}</div>
                    <div class="top-line__star"><img src="${jsonObj[i].star}"  alt=""></div>
                </div>
                <div class="apartment__img d-flex">
                    <img src="${jsonObj[i].img}" alt="">
                </div>
                <div class="apartment__description">
                    <p class="apartment__title">${jsonObj[i].name}</p>
                    <div class="apartment__props props d-flex">
                        <div class="props__look">${jsonObj[i].look}</div>
                        <div class="props__square"><span>${jsonObj[i].square}</span> м<sup
                                class="props__text props__text_sup">2</sup>
                            <p class="props__text">площадь</p>
                        </div>
                        <div class="props__floor"><span>${jsonObj[i].floor}</span> <p class="props__text">этаж</p>
                        </div>
                    </div>
                    <div class="apartment__price"><span>${(jsonObj[i].price).toLocaleString('ru')}</span> руб.</div>
                </div>
            </div>
            <div class="apartment__status">${jsonObj[i].status}</div>
        </div>
        `
        list.innerHTML = outStr;
    }
    document.querySelector('.apartmentsCount').innerHTML = jsonObj.length;
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

//arrow
let smoothJumpUp = function () {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0, -50);
        setTimeout(smoothJumpUp, 15);
    }
}
window.onscroll = function () {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 100) {
        document.querySelector('.top-arrow').style.display = 'block';
    } else {
        document.querySelector('.top-arrow').style.display = 'none';
    }
}

// validation e-mail
// function validate(form_id, email) {
//     let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     let address = document.forms[form_id].elements[email].value;
//     if (reg.test(address) == false) {
//         let alertMessage = document.createElement('p');
//         let alertMessageOut = document.querySelector('.form__group');
//         alertMessage.className = 'alert';
//         alertMessage.innerHTML = 'Пожалуйста введите корректный e-mail';
//         alertMessageOut.insertBefore(alertMessage, alertMessageOut.children[1]);
//         return false;
//     }
// }



// document.querySelector('.apartments__more-button').onclick = showMore;
// function showMore() {

// }


