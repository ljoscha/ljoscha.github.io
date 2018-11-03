var review = {
  1: {
    "src": "./img/rew-anna.jpg",
    "name": "Аня",
    "age": "Раб, 33 года",
    "comment": "Огромное спасибо за мой юбилейный сюрприз! Восторг, восхищение, и масса положительных эмоций!"
  },
  2: {
    "src": "./img/rew-anton.jpg",
    "name": "Антон",
    "age": "Раб, 34 года",
    "comment": "Благодарю Вас, за прекрасно сделанную работу и вкуснейший торт, Надежду за учтённые пожелания, а ещё хочется отметить ее работу, насколько без суеты (в зале было многолюдно), спокойно, грамотно она ее выполняет, приятно были удивлены!"
  },
  3: {
    "src": "./img/rew-maria.jpg",
    "name": "Марина",
    "age": "Раб, 19 лет",
    "comment": "Большое спасибо за Наполеон!!! Нежный и ооооочень вкусный ))) Действительно домашний. Даже сфотографировать не успела, в офисе разошелся за несколько минут )))"
  },
  4: {
    "src": "./img/rew-tim.jpg",
    "name": "Толик",
    "age": "Раб, 20 лет",
    "comment": "Заказывала веганский пирог на день рождения внучки, когда привезли потеряла дар речи.Это произведение искусств!А еще он оказался очень вкусным! Спасибо Вам большое за такую красоту и вкуснятину!"
  }
}

var filling = {
  1: {
    "src": "./img/filling-1.jpg",
    "title": "Брюнетка",
    "description": "Для самых ярких! Шоколадный бисквит с пропиткой, яркий вкус шоколадного крема (ганаша), нежная карамелизированная груша.",
    "price": "1000 руб/кг"
  },
  2: {
    "src": "./img/filling-2.jpg",
    "title": "Экстра шоколад",
    "description": "Шоколадный бисквит, мусс на натуральных сливках с темным бельгийским шоколадом и чернослив. Очень шоколадно и очень вкусно! Подходит для многоярусных тортов.",
    "price": "2000 руб/кг"
  },
  3: {
    "src": "./img/filling-3.jpg",
    "title": "Аристократ",
    "description": "Пропитанный ванильный бисквит, традиционное сочетание карамелезированного яблока с корицей и сметанное мусс-суфле.",
    "price": "3000 руб/кг"
  },
  4: {
    "src": "./img/filling-4.jpg",
    "title": "Новая классика",
    "description": "Шоколадный бисквит на сметане, легкий сметанный мусс с натуральной ягодной кислинкой (смородина, черника или другие ягоды)",
    "price": "4000 руб/кг"
  }
}

var appearance = {
  1: {
    "src": "./img/appearance-1.jpg",
    "name": "Ягодное ассорти",
    "price": "111 руб/кг"
  },
  2: {
    "src": "./img/appearance-2.jpg",
    "name": "Маршмэллоу",
    "price": "222 руб/кг"
  },
  3: {
    "src": "./img/appearance-1.jpg",
    "name": "Что-то еще",
    "price": "333 руб/кг"
  },
  4: {
    "src": "./img/appearance-2.jpg",
    "name": "Другое",
    "price": "444 руб/кг"
  },
  5: {
    "src": "./img/appearance-1.jpg",
    "name": "иное",
    "price": "555 руб/кг"
  }
}

let inputValue = document.getElementsByClassName("input-value"); //individual-form p.input-value

function burgerClick(button) {
  button.classList.toggle("change");
  let mobileNavigation = document.getElementById("mobile-navigation");
  mobileNavigation.classList.toggle("flex");
}

document.addEventListener("DOMContentLoaded", fillSlider);

function fillSlider() {
  name.innerHTML = review[counter].name;
  age.innerHTML = review[counter].age;
  comment.innerHTML = review[counter].comment;
  quantity.innerHTML = counter + "\/" + totalReviews;
  img.src = review[counter].src;
}

let counter = 1;

let container = document.getElementById("slider-content");

let name = document.getElementById("slider-name");
let age = document.getElementById("slider-age");
let comment = document.getElementById("slider-comment");

let quantity = document.getElementById("slider-quantity");
let img = document.getElementById("slider-img");

let priewBtn = document.getElementById("priew-btn")
let nextBtn = document.getElementById("next-btn")

let totalReviews = Object.keys(review).length;

function slider(counter) {
  fillSlider(counter);
  container.classList.toggle("animation");
  setTimeout(function () {
    container.classList.remove('animation');
  }, 250);
}

nextBtn.addEventListener('click', function () {
  counter++;

  if (counter > Object.keys(review).length) {
    counter = 1;
  }
  slider(counter);
});

priewBtn.addEventListener('click', function () {
  counter--;

  if (counter <= 0) {
    counter = Object.keys(review).length;
  }
  slider(counter);
});


// chose cake size

var cakes = document.getElementsByClassName("cake");

for (let i = 0; i < cakes.length; i++) {
  cakes[i].addEventListener("click", cooseCake)
}

let inputSize = document.getElementById("input-size");

function cooseCake(event) {
  unCooseCake();
  let cake = event.target.closest("div.cake > .plate");
  if (cake) {
    cake.classList.add("plate-shadow");
    let p = cake.querySelector("p");
    // let inputSize = document.getElementById("input-size");
    inputSize.value = p.innerHTML;
    inputValue[1].innerHTML = p.innerHTML;
    inputValue[1].classList.remove("error");
  }
}

function unCooseCake() {
  let cakes = document.querySelectorAll("div.cake > .plate");
  for (let i = 0; i < cakes.length; i++) {
    cakes[i].classList.remove("plate-shadow");
  }
}

let fillingCounter = 1;

let fillingContent = document.getElementById("filling-slider");

let fillingImg = document.getElementById("filling-img");
let fillingTitle = document.getElementById("filling-title");
let fillingDescription = document.getElementById("filling-description");
let fillingPrice = document.getElementById("filling-price");
let fillingQuantity = document.getElementById("filling-quantity");

let fillingBtn = document.getElementById("filling-btn");
let fillingPrievBtn = document.getElementById("filling-priew-btn");
let fillingNextBtn = document.getElementById("filling-next-btn");

let inputFilling = document.getElementById("input-filling");

fillingBtn.addEventListener("click", function () {
  inputFilling.value = fillingTitle.innerHTML;
  inputValue[0].innerHTML = fillingTitle.innerHTML;
  inputValue[0].classList.remove("error");
})

let totalFillingOption = Object.keys(filling).length;

document.addEventListener("DOMContentLoaded", fillFillingSlider);

function fillFillingSlider() {
  fillingImg.src = filling[fillingCounter].src;
  fillingTitle.innerHTML = filling[fillingCounter].title;
  fillingDescription.innerHTML = filling[fillingCounter].description;
  fillingPrice.innerHTML = filling[fillingCounter].price;
  fillingQuantity.innerHTML = fillingCounter + "\/" + totalFillingOption;
}

function fillingSlider(fillingCounter) {
  fillFillingSlider(fillingCounter);
  fillingContent.classList.toggle("animation");
  setTimeout(function () {
    fillingContent.classList.remove('animation');
  }, 250);
}

fillingNextBtn.addEventListener('click', function () {
  fillingCounter++;

  if (fillingCounter > Object.keys(filling).length) {
    fillingCounter = 1;
  }
  fillingSlider(fillingCounter)
});

fillingPrievBtn.addEventListener('click', function () {
  fillingCounter--;

  if (fillingCounter <= 0) {
    fillingCounter = Object.keys(filling).length;
  }
  fillingSlider(fillingCounter);
});

let appearanceCounterOne = 1;
let appearanceCounterTwo = 2;

let appearanceImgOne = document.getElementById("appearance-img-1");
let appearanceNameOne = document.getElementById("appearance-name-1");
let appearancePriceOne = document.getElementById("appearance-price-1");

let appearanceImgTwo = document.getElementById("appearance-img-2");
let appearanceNameTwo = document.getElementById("appearance-name-2");
let appearancePriceTwo = document.getElementById("appearance-price-2");

let appearanceQuantity = document.getElementById("appearance-quantity");

let appearancePrievBtn = document.getElementById("appearance-priew-btn");
let appearanceNextBtn = document.getElementById("appearance-next-btn");

let totalAppearanceOption = Object.keys(appearance).length;

document.addEventListener("DOMContentLoaded", fillAppearanceSlider);

function fillAppearanceSlider() {
  appearanceImgOne.src = appearance[appearanceCounterOne].src;
  appearanceNameOne.innerHTML = appearance[appearanceCounterOne].name;
  appearancePriceOne.innerHTML = appearance[appearanceCounterOne].price;

  appearanceImgTwo.src = appearance[appearanceCounterTwo].src;
  appearanceNameTwo.innerHTML = appearance[appearanceCounterTwo].name;
  appearancePriceTwo.innerHTML = appearance[appearanceCounterTwo].price;

  appearanceQuantity.innerHTML = appearanceCounterOne + "\/" + totalAppearanceOption;
}

appearanceNextBtn.addEventListener('click', function () {
  appearanceCounterOne++;
  appearanceCounterTwo++;

  if (appearanceCounterOne > Object.keys(appearance).length) {
    appearanceCounterOne = 1;
  }
  if (appearanceCounterTwo > Object.keys(appearance).length) {
    appearanceCounterTwo = 1;
  }
  fillAppearanceSlider(appearanceCounterOne);
  fillAppearanceSlider(appearanceCounterTwo);
});

appearancePrievBtn.addEventListener('click', function () {
  appearanceCounterOne--;
  appearanceCounterTwo--;

  if (appearanceCounterOne <= 0) {
    appearanceCounterOne = Object.keys(appearance).length;
  }
  if (appearanceCounterTwo <= 0) {
    appearanceCounterTwo = Object.keys(appearance).length;
  }
  fillAppearanceSlider(appearanceCounterOne);
  fillAppearanceSlider(appearanceCounterTwo);
});

let appearanceCard = document.getElementsByClassName("appearance-card");
let inputAppearance = document.getElementById("input-appearance");

for (let i = 0; i < appearanceCard.length; i++) {
  appearanceCard[i].addEventListener("click", function () {
    let appearanceName = this.querySelector(".appearance-name");
    this.classList.toggle("animation");
    let card = this;
    setTimeout(function () {
      card.classList.remove('animation');
    }, 250);
    inputAppearance.value = appearanceName.innerHTML;
    inputValue[2].innerHTML = appearanceName.innerHTML;
    inputValue[2].classList.remove("error");
  })
}

let individualForm = document.getElementById("individual-form");
let antispam = document.getElementById("antispam");
individualForm.addEventListener("submit", function (evt) {
  // if ( !inputFilling.value || !inputSize.value || !inputAppearance.value) {
  //   evt.preventDefault();

  // }
  if (!inputFilling.value) {
    evt.preventDefault();
    inputValue[0].classList.add("error")
  }
  if (!inputSize.value) {
    evt.preventDefault();
    inputValue[1].classList.add("error")
  }

  if (!inputAppearance.value) {
    evt.preventDefault();
    inputValue[2].classList.add("error")
  }

  if(!!antispam.value){
    alert("spam");
    evt.preventDefault();
  }
});
