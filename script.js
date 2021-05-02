const container = document.querySelector(".container");
const input = document.querySelector("input");

let usersArray = [];

const createCardList = (array) => {
  container.innerHTML = "";

  array.forEach((obj) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `<div class="name">Name</div><div class="name-content">${obj.username}</div><div class="email">Email</div><div class="email-content">${obj.email}</div>`;
    container.appendChild(card);
  });
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => {
    return data.text();
    // return data.json();
    // console.log ka example
  })
  .then((result) => {
    console.log(JSON.parse(result));
    usersArray = JSON.parse(result);
    createCardList(usersArray);
  });

input.addEventListener("input", (event) => {
  const searchStr = event.target.value.toLowerCase();

  const filteredArray = usersArray.filter((ele) => {
    return (
      ele.username.toLowerCase().includes(searchStr) ||
      ele.email.toLowerCase().includes(searchStr)
    );
  });

  createCardList(filteredArray);
});

// particle js configuration
particlesJS.load("particles-js", "particles.json");
