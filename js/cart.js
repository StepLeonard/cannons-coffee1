let container = document.querySelector(".container");
let form = document.getElementById("form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const data = new FormData(form);
  const dataObject = Object.fromEntries(data.entries());

  console.log("our data:", dataObject);
  form.reset();

  let name = dataObject.name;
  let eMail = dataObject.eMail;
  let pw = dataObject.pw;

  let message = `Welcome ${name}! You are logged in!`;
  let messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;
  container.appendChild(messageParagraph);
}
