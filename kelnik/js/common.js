let outStr = apartments.map(item => item), list;

outStr = '';
list = document.querySelector('.apartments__inner');
apartmentsOut();
function apartmentsOut(counter = 0) {
    for (let i = counter; i < counter + 21; i++) {
        outStr +=`
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