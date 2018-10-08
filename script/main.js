var review = {
  1: {
    "src": "./img/rew-anna.jpg",
    "name": "Аня",
    "age": "Шлюха, 33 года",
    "comment": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ad dolore repellat iure molestias veritatis velit non obcaecati officiis dolorum"
  },
  2: {
    "src": "./img/rew-anton.jpg",
    "name": "Антон",
    "age": "Отсасывает на заправках, 34 года",
    "comment": "the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release o"
  },
  3: {
    "src": "./img/rew-maria.jpg",
    "name": "Марина",
    "age": "Транс, 19 лет",
    "comment": " as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in th"
  },
  4: {
    "src": "./img/rew-tim.jpg",
    "name": "Толик",
    "age": "Пиздализ, 20 лет",
    "comment": "ble. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on"
  }
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
  slider(counter)
});

priewBtn.addEventListener('click', function () {
  counter--;

  if (counter <= 0) {
    counter = Object.keys(review).length;
  }
  slider(counter);
});