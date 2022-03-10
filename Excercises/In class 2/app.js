


const submitButton= document.querySelector(".js-submit-button");
submitButton.addEventListener('click', function (event) {

event.preventDefault();

const dateInput= document.querySelector(".js-date-input");
// const dateValue = dateInput.value;

let birthDate = new Date(dateInput.value);
let month = birthDate.getMonth() + 1;
let day = birthDate.getDate() + 1;
let year = birthDate.getFullYear();

const usersAge = getAge(year);



if (usersAge > 21) {
    divElement.innerHTML = `<p>You can get crunk, you were born in the sweet, sweet year of ${year} <p>`;
} else {
    divElement.innerHTML = `<p>You are literally going to jail if you drink right now. You were born in the horrible loser year of ${year}<p>`;
}
});

function getAge(inputYear) {

const currentYear = new Date().getFullYear()
const year = inputYear;

const age = currentYear - year;
return age;

}


