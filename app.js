
const zodiacBio = document.querySelector('.js-zodiac-bio');
const zodiacCard = document.querySelector('.js-zodiac-card');

let bio ="Find out what's hunting your sign...";
let card = "./images/Zodiac Cards/Card-Cover.png";



function zodiacResult() {
        const birthdayInput = document.querySelector('.js-birthday-input');
        let birthDate = new Date(birthdayInput.value);
        let month = birthDate.getMonth() + 1;
        let day = birthDate.getDate() + 1;
        console.log(day);
        console.log(month);

        if ((month == 1 && day <=19) || (month == 12 && day>21)) {
            card= "./images/Zodiac Cards/Capricorn.png";
            bio= `You, Capricorn, have been hunted for quite some time by the Yeti. This fearsome creature will chase you down till you smell the raw fish on his breath, which alongside being torn apart, is quite undesireable. Avoid Mountains.`;
        
        }
        
        else if ((month == 1 && day >19) || (month == 2 && day<=18)) {
        
            card= "./images/Zodiac Cards/Aquarius.png";
            bio= `Aquarius, you are under the watchful eye of the Loch Ness Monster. This Mesozoic Beauty has stayed hidden under the waters of Loch Ness for quite sometime, why does it seem to have a particular interest in you? Just to be safe, Avoid Loch Ness.`;
        
        } 
        
        else if ((month == 2 && day >18) || (month == 3 && day<=20)) {
        
            card= "./images/Zodiac Cards/Pisces.png";
            bio= `Pisces, you are being hunted by the Jersey Devil. This rumored beast has stayed lurking in the shadows, watching and waiting for its moment to attack with such ferocity, it lives up to its name of Devil. Avoid the New Jersey Area.`;
        
        }
        
        else if ((month == 3 && day >20) || (month == 4 && day<=19)) {
        
            card= "./images/Zodiac Cards/Aries.png";
            bio= `You, unfortunate Aries, are being hunted by the Gashadokuro. You may not see him now, but when a giant skeleton several stories tall comes out of the shadows, I'm afraid there's little you can do to hide. Avoid Graveyards and Sites of Tradgedy.`;
        
        }
        
        else if ((month == 4 && day >20) || (month == 5 && day<=20)) {
        
            card= "./images/Zodiac Cards/Taurus.png";
            bio= `Taurus, you are being hunted by the wild Jackalope. While it may look like a cute, cuddly bunny at first, do not be fooled. This vicious creature will not hold back once it gets a hold of you. Avoid tall grassy areas.`;
        
        }
        
        else if ((month == 5 && day >20) || (month == 6 && day<=21)) {
        
            card= "./images/Zodiac Cards/Gemini.png";
            bio= ` Listen close, Gemini, you are being hunted by the vicious Ahool. A massive beast, known to swoop from the skies and snatch up its victims. Avoid Jungles, and keep your eyes on the skies.`;
        
        }
        
        else if ((month == 6 && day >21) || (month == 7 && day<=22)) {
        
            card= "./images/Zodiac Cards/Cancer.png";
            bio= `Cancer, you are being hunted by none other than Mothman. You may be one of the lucky ones, given that you've committed no wrongdoings, this massive moth human amalgamation may leave you alone. Although, he must be watching you for a reason...Avoid West Virginia.`;
            
        }
        
        else if ((month == 7 && day >22) || (month == 8 && day<=22)) {
        
            card= "./images/Zodiac Cards/Leo.png";
            bio= `Mighty Leo, you are being stalked by a Mermaid. Don't let the pretty face fool you. Her true intentions lie just beneath the surface, if you're unlucky enough to discover them, you won't come back up for air. Avoid all bodies of water.`;

        }
        
        else if ((month == 8 && day >22) || (month == 9 && day<=22)) {
        
            card= "./images/Zodiac Cards/Virgo.png";
            zbio= `Virgo, you are being stalked by the Elusive Bigfoot. Though many have tried to hunt him down, don't be fooled. <i>You</i> are the prey here. Avoid Wooded Areas.`;
        
        }
        
        else if ((month == 9 && day >22) || (month == 10 && day<=23)) {
        
            card= "./images/Zodiac Cards/Libra.png";
            bio= `Wise Libra, you are being hunted by the Wendigo. A being known for its insatiable hunger, I fear to think of your fate if you were found. Avoid Woods and Praries.`;
        
        }
        
        else if ((month == 10 && day >23) || (month == 11 && day<=21)) {
        
            card= "./images/Zodiac Cards/Scorpio.png";
            bio= `Dear Scorpio, you have managed to capture the attention of the Kraken. The might beast of the deep, known for dragging massive ships to their watery grave, has got its Eye on you. Avoid Ships and Cruises`;
        
        }
        
        else if ((month == 11 && day >21) || (month == 12 && day<=21)) {
        
            card= "./images/Zodiac Cards/Sagittarius.png";
            bio= `Sagittarius, you're being hunted by the wild Chupacabra. This wily beast usually goes after goats, but it seems this one has set it sights on you... Avoid Fields at Night.`;
        
        }
        else {
            console.log('Error, Invalid Input');
        } 

        zodiacCard.src= card;
        zodiacBio.innerHTML= bio;
    }

    const buttonElement = document.querySelector('.js-button');

    buttonElement.addEventListener('click', zodiacResult);