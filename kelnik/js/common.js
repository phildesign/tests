var requestURL = 'js/apartments.json'
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
var current = 0;
var arrSize = 20;
var cloneJson;

request.onload = () => {
    var apartments = request.response;
    fullJson = apartments.slice();
    apartmentsCount(apartments.length);
    getPacket(apartments, arrSize, fillApartments);
    document.querySelector('.apartments__more-button').onclick = () => {
        getPacket(apartments, arrSize, fillApartments);
    }

}
const getPacket = (arr, arrSize, callback, jsonObj) => {
    var packet = arr.slice(current, current + arrSize);
    current += arrSize;
    callback(packet);
    var test = request.response;
    console.log(test)
}

const apartmentsCount = (apartCount) => {
    document.querySelector('.apartmentsCount').innerHTML = apartCount;
}


outStr = '';
var list = document.querySelector('.apartments__inner');
const fillApartments = (jsonObj) => {
    var test = jsonObj;
    const out = () => {
        for (let i = 0; i < test.length; i++) {
            outStr += `
        <div class="apartments__item apartment d-flex ${test[i].mark}">
            <div class="apartment__inner">
                <div class="apartment__top-line top-line d-flex">
                    <div class="top-line__sale">${test[i].sale}</div>
                    <div class="top-line__offer">${test[i].offer}</div>
                    <div class="top-line__star"><img src="${test[i].star}"  alt=""></div>
                </div>
                <div class="apartment__img d-flex">
                    <img src="${test[i].img}" alt="">
                </div>
                <div class="apartment__description">
                    <p class="apartment__title">${test[i].name}</p>
                    <div class="apartment__props props d-flex">
                        <div class="props__look">${test[i].look}</div>
                        <div class="props__square"><span>${test[i].square}</span> м<sup
                                class="props__text props__text_sup">2</sup>
                            <p class="props__text">площадь</p>
                        </div>
                        <div class="props__floor"><span>${test[i].floor}</span> <p class="props__text">этаж</p>
                        </div>
                    </div>
                    <div class="apartment__price"><span>${(test[i].price).toLocaleString('ru')}</span> руб.</div>
                </div>
            </div>
            <div class="apartment__status">${test[i].status}</div>
        </div>
        `
            list.innerHTML = outStr;
        }
    }
    const minPrice = () => {
        document.querySelector('.filter__button_price').style.transform = 'rotate(180deg)';
        test = jsonObj.sort(sortMinPrice)
        console.log(test)
        outStr = '';
        out();
    }
    const sortMinPrice = (a, b) => {
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
    function maxPrice() {
        document.querySelector('.filter__button_price').style.transform = 'rotate(-180deg)';
        test = jsonObj.sort(sortMaxPrice)
        console.log(test)
        outStr = '';
        out();
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
        test = jsonObj.sort(sortMinRooms)
        console.log(test)
        outStr = '';
        out();
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
        test.sort(sortMaxRooms);
        out();
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

    minPriceButton = document.querySelector('.dropdown__item_min-price').onclick = minPrice;
    maxPriceButton = document.querySelector('.dropdown__item_max-price').onclick = maxPrice;
    out();
}

let minPriceButton, maxPriceButton, minRoomButton, maxRoomButton;

// top arrow
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

// validation form
var form = document.getElementsByTagName('form')[0];
var email = document.querySelector('.form__e-mail');
var error = document.querySelector('.error');

email.addEventListener("input", function (event) {
    if (email.validity.valid) {
        error.innerHTML = "";
        error.className = "error";
    }
}, false);
form.addEventListener("submit", function (event) {
    if (!email.validity.valid) {
        error.innerHTML = "Пожалуйста введите корректный e-mail";
        error.className = "error active";
        event.preventDefault();
    }
}, false);