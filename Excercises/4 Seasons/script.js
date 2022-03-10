

const buttonElement = document.querySelector('.js-button')

buttonElement.addEventListener('click', function(){

const userBirthday = document.querySelector('.js-birthday-input')
const birthdaySeason = document.querySelector('.js-season')
// let birthdayTime= document.querySelector('js-birthday-time')
var dateObj = new Date(userBirthday.value);
let month = dateObj.getUTCMonth() + 1; 
let day = dateObj.getUTCDate();

    if ((month == 11 && day >= 21) || (month==0) || (month==1)||(month==2 && day<=20)) {
        birthdaySeason.innerHTML = `Winter`;}
    else if ((month == 2 && day >= 20) || (month==3) || (month==4)||(month==5 && day<=21))   {
        birthdaySeason.innerHTML = `Spring`;
    } else if ((month == 5 && day >= 22) || (month==6) || (month==7)||(month==8 && day<=22)) {
        birthdaySeason.innerHTML = `Summer`;
    }else {
        birthdaySeason.innerHTML = `Fall`;
    }
    // birthdayTime.innerHTML = userBirthday;

});