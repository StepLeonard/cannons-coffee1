let container = document.querySelector(".container");
let form = document.getElementById("form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const data = new FormData(form);
  const dataObject = Object.fromEntries(data.entries());

  console.log("our data:", dataObject);
  form.reset();

  let firstName = dataObject.firstName;
  let lastName = dataObject.lastName;
  let eMail = dataObject.eMail;
  let phone = dataObject.phone;
  let comments = dataObject.comments;
  let coffeeFlavor = dataObject.coffeeFlavor;
  let interested = dataObject.interested;

  //   let firstNameParagraph = document.createElement("p");
  //   firstNameParagraph.textContent = firstName;
  //   container.appendChild(firstNameParagraph);

  //   let lastNameParagraph = document.createElement("p");
  //   lastNameParagraph.textContent = lastName;
  //   container.appendChild(lastNameParagraph);

  //   let eMailParagraph = document.createElement("p");
  //   eMailParagraph.textContent = eMail;
  //   container.appendChild(eMailParagraph);

  //   let phoneParagraph = document.createElement("p");
  //   phoneParagraph.textContent = phone;
  //   container.appendChild(phoneParagraph);

  //   let commentsParagraph = document.createElement("p");
  //   commentsParagraph.textContent = comments;
  //   container.appendChild(commentsParagraph);

  //   let coffeeFlavorParagraph = document.createElement("p");
  //   coffeeFlavorParagraph.textContent = coffeeFlavor;
  //   container.appendChild(coffeeFlavorParagraph);

  //   let interestedParagraph = document.createElement("p");
  //   interestedParagraph.textContent = interested;
  //   container.appendChild(interestedParagraph);

  let message = `${firstName} ${lastName},Thank you for interest in Cannons Coffee! We will contact you soon at ${eMail} with available options!`;

  let messageParagraph = document.createElement("p");
  messageParagraph.textContent = message;
  container.appendChild(messageParagraph);
}
