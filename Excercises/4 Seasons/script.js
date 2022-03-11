

const buttonElement = document.querySelector('.js-button');

buttonElement.addEventListener('click', function(){
const birthdayTime = document.querySelector('.js-birthday-time');
const userBirthday = document.querySelector('.js-birthday-input');
const birthdaySeason = document.querySelector('.js-season');

birthdayTime.innerHTML = (userBirthday.value);

var dateObj = new Date(userBirthday.value);
let month = dateObj.getUTCMonth() + 1; 
let day = dateObj.getUTCDate();


    if ((month == 12 && day >= 21) || (month==1) || (month==2)||(month==3 && day<=20)) {
        birthdaySeason.innerHTML = `Winter`;}
    else if ((month == 3 && day >= 20) || (month==4) || (month==5)||(month==6 && day<=21))   {
        birthdaySeason.innerHTML = `Spring`;
    } else if ((month == 6 && day >= 22) || (month==7) || (month==8)||(month==9 && day<=22)) {
        birthdaySeason.innerHTML = `Summer`;
    }else {
        birthdaySeason.innerHTML = `Fall`;
    }
    // birthdayTime.innerHTML = userBirthday;

});