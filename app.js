
const zodiacBio = document.querySelector('.js-zodiac-bio');
const zodiacCard = document.querySelector('.js-zodiac-card');
const soundPath = "./Sounds/";

let bio ="Find out what's hunting your Zodiac sign...";
let card = "./images/Zodiac Cards/Card-Cover.png";
let hoveredCard = ""
let sfxmp3 = "";

let card_month = -1;
let card_day= -1;

// find which card is being hovered and displays the info on the screen. Thanks to Alexis for assiting me with this one

const findClickedCard = () =>{

    if (hoveredCard == "Aquarius"){
        card_month = 2;
        card_day = 18;
    }
    else if (hoveredCard == "Aries"){
        card_month = 4;
        card_day = 19;
    }
    else if (hoveredCard == "Cancer"){
        card_month = 7;
        card_day = 22;
    }
    else if (hoveredCard == "Capricorn"){
        card_month = 1;
        card_day = 19;
    }
    else if (hoveredCard == "Gemini"){
        card_month = 6;
        card_day = 21;
    }
    else if (hoveredCard == "Leo"){
        card_month = 8;
        card_day = 19;
    }
    else if (hoveredCard == "Libra"){
        card_month = 10;
        card_day = 23;
    }
    else if (hoveredCard == "Pisces"){
        card_month = 3;
        card_day = 20;
    }
    else if (hoveredCard == "Sagittarius"){
        card_month = 12;
        card_day = 21;
    }
    else if (hoveredCard == "Scorpio"){
        card_month = 11;
        card_day = 21;
    }
    else if (hoveredCard == "Taurus"){
        card_month = 5;
        card_day = 20;
    }
    else if (hoveredCard == "Virgo"){
        card_month = 9;
        card_day = 22;
    }
    cardRes(card_month, card_day);
};

// This function makes sure all of the little cards are clickable
function cardRes(m,d){
    if ((m == 1 && d <=19) || (m == 12 && d>21)) {
        card= "./images/Zodiac Cards/Capricorn.png";
        bio= `You, Capricorn, have been hunted for quite some time by the Yeti. This fearsome creature will chase you down till you smell the raw fish on his breath, which alongside being torn apart, is quite undesireable. Avoid Mountains.`;
        sfxmp3 = `${soundPath}/Yeti.mp3`;
        console.log ("you selected Capricorn!");
    }
    
    else if ((m == 1 && d >19) || (m == 2 && d<=18)) {
    
        card= "./images/Zodiac Cards/Aquarius.png";
        bio= `Aquarius, you are under the watchful eye of the Loch Ness Monster. This Mesozoic Beauty has stayed hidden under the waters of Loch Ness for quite sometime, why does it seem to have a particular interest in you? Just to be safe, Avoid Loch Ness.`;
        sfxmp3 = `${soundPath}/Loch Ness Monster.mp3`;
        console.log ("you selected Aquarius!");
    } 
    
    else if ((m == 2 && d >18) || (m == 3 && d<=20)) {
    
        card= "./images/Zodiac Cards/Pisces.png";
        bio= `Pisces, you are being hunted by the Jersey Devil. This rumored beast has stayed lurking in the shadows, watching and waiting for its moment to attack with such ferocity, it lives up to its name of Devil. Avoid the New Jersey Area.`;
        sfxmp3 = `${soundPath}/Jersey Devil.mp3`;
        console.log ("you selected Pisces!");
    }
    
    else if ((m == 3 && d >20) || (m == 4 && d<=19)) {
    
        card= "./images/Zodiac Cards/Aries.png";
        bio= `You, unfortunate Aries, are being hunted by the Gashadokuro. You may not see him now, but when a giant skeleton several stories tall comes out of the shadows, I'm afraid there's little you can do to hide. Avoid Graveyards and Sites of Tradgedy.`;
        sfxmp3 = `${soundPath}/Gashadokuro.mp3`;
        console.log ("you selected Aries!");
    }
    
    else if ((m == 4 && d >20) || (m == 5 && d<=20)) {
    
        card= "./images/Zodiac Cards/Taurus.png";
        bio= `Taurus, you are being hunted by the wild Jackalope. While it may look like a cute, cuddly bunny at first, do not be fooled. This vicious creature will not hold back once it gets a hold of you. Avoid tall grassy areas.`;
        sfxmp3 = `${soundPath}/Jackalope.mp3`;
        console.log ("you selected Taurus!");
    }
    
    else if ((m == 5 && d >20) || (m == 6 && d<=21)) {
    
        card= "./images/Zodiac Cards/Gemini.png";
        bio= ` Listen close, Gemini, you are being hunted by the vicious Ahool. A massive beast, known to swoop from the skies and snatch up its victims. Avoid Jungles, and keep your eyes on the skies.`;
        sfxmp3 = `${soundPath}/Ahool.mp3`;
        console.log ("you selected Gemini!");
    }
    
    else if ((m == 6 && d >21) || (m == 7 && d<=22)) {
    
        card= "./images/Zodiac Cards/Cancer.png";
        bio= `Cancer, you are being hunted by none other than Mothman. You may be one of the lucky ones, given that you've committed no wrongdoings, this massive moth human amalgamation may leave you alone. Although, he must be watching you for a reason...Avoid West Virginia.`;
        sfxmp3 = `${soundPath}/Mothman.mp3`;
        console.log ("you selected Cancer!");
    }
    
    else if ((m == 7 && d >22) || (m == 8 && d<=22)) {
    
        card= "./images/Zodiac Cards/Leo.png";
        bio= `Mighty Leo, you are being stalked by a Mermaid. Don't let the pretty face fool you. Her true intentions lie just beneath the surface, if you're unlucky enough to discover them, you won't come back up for air. Avoid all bodies of water.`;
        sfxmp3 = `${soundPath}/Mermaid.mp3`;
        console.log ("you selected Leo!");
    }
    
    else if ((m == 8 && d >22) || (m == 9 && d<=22)) {
    
        card= "./images/Zodiac Cards/Virgo.png";
        bio= `Virgo, you are being stalked by the Elusive Bigfoot. Though many have tried to hunt him down, don't be fooled. <i>You</i> are the prey here. Avoid Wooded Areas.`;
        sfxmp3 = `${soundPath}/Bigfoot.mp3`;
        console.log ("you selected Virgo!");
    }
    
    else if ((m == 9 && d >22) || (m == 10 && d<=23)) {
    
        card= "./images/Zodiac Cards/Libra.png";
        bio= `Wise Libra, you are being hunted by the Wendigo. A being known for its insatiable hunger, I fear to think of your fate if you were found. Avoid Woods and Praries.`;
        sfxmp3 = `${soundPath}/Wendigo.mp3`;
        console.log ("you selected Libra!");
    }
    
    else if ((m == 10 && d >23) || (m == 11 && d<=21)) {
    
        card= "./images/Zodiac Cards/Scorpio.png";
        bio= `Dear Scorpio, you have captured the attention of the Kraken. The might beast of the deep, known for dragging massive ships to their watery grave, has got its Eye on you. Avoid Ships and Cruises`;
        sfxmp3 = `${soundPath}/Kraken.mp3`;
        console.log ("you selected Scorpio!");
    }
    
    else if ((m == 11 && d >21) || (m == 12 && d<=21)) {
    
        card= "./images/Zodiac Cards/Sagittarius.png";
        bio= `Sagittarius, you're being hunted by the wild Chupacabra. This wily beast usually goes after goats, but it seems this one has set it sights on you... Avoid Fields at Night.`;
        sfxmp3 = `${soundPath}/Chupacabra.mp3`;
        console.log ("you selected Sagittarius!");
    }
    else {
        console.log('Error, Invalid Input');
    } 

    playSFX();
    zodiacCard.src= card;
    zodiacBio.innerHTML= bio;
}

function zodiacResult() {
        const birthdayInput = document.querySelector('.js-birthday-input');
        let birthDate = new Date(birthdayInput.value);
        let month = birthDate.getMonth() + 1;
        let day = birthDate.getDate() + 1;
       

        if ((month == 1 && day <=19) || (month == 12 && day>21)) {
            card= "./images/Zodiac Cards/Capricorn.png";
            bio= `You, Capricorn, have been hunted for quite some time by the Yeti. This fearsome creature will chase you down till you smell the raw fish on his breath, which alongside being torn apart, is quite undesireable. Avoid Mountains.`;
            sfxmp3 = `${soundPath}/Yeti.mp3`;
        }
        
        else if ((month == 1 && day >19) || (month == 2 && day<=18)) {
        
            card= "./images/Zodiac Cards/Aquarius.png";
            bio= `Aquarius, you are under the watchful eye of the Loch Ness Monster. This Mesozoic Beauty has stayed hidden under the waters of Loch Ness for quite sometime, why does it seem to have a particular interest in you? Just to be safe, Avoid Loch Ness.`;
            sfxmp3 = `${soundPath}/Loch Ness Monster.mp3`;
        } 
        
        else if ((month == 2 && day >18) || (month == 3 && day<=20)) {
        
            card= "./images/Zodiac Cards/Pisces.png";
            bio= `Pisces, you are being hunted by the Jersey Devil. This rumored beast has stayed lurking in the shadows, watching and waiting for its moment to attack with such ferocity, it lives up to its name of Devil. Avoid the New Jersey Area.`;
            sfxmp3 = `${soundPath}/Jersey Devil.mp3`;
        }
        
        else if ((month == 3 && day >20) || (month == 4 && day<=19)) {
        
            card= "./images/Zodiac Cards/Aries.png";
            bio= `You, unfortunate Aries, are being hunted by the Gashadokuro. You may not see him now, but when a giant skeleton several stories tall comes out of the shadows, I'm afraid there's little you can do to hide. Avoid Graveyards and Sites of Tradgedy.`;
            sfxmp3 = `${soundPath}/Gashadokuro.mp3`;
        }
        
        else if ((month == 4 && day >20) || (month == 5 && day<=20)) {
        
            card= "./images/Zodiac Cards/Taurus.png";
            bio= `Taurus, you are being hunted by the wild Jackalope. While it may look like a cute, cuddly bunny at first, do not be fooled. This vicious creature will not hold back once it gets a hold of you. Avoid tall grassy areas.`;
            sfxmp3 = `${soundPath}/Jackalope.mp3`;
        }
        
        else if ((month == 5 && day >20) || (month == 6 && day<=21)) {
        
            card= "./images/Zodiac Cards/Gemini.png";
            bio= ` Listen close, Gemini, you are being hunted by the vicious Ahool. A massive beast, known to swoop from the skies and snatch up its victims. Avoid Jungles, and keep your eyes on the skies.`;
            sfxmp3 = `${soundPath}/Ahool.mp3`;
        }
        
        else if ((month == 6 && day >21) || (month == 7 && day<=22)) {
        
            card= "./images/Zodiac Cards/Cancer.png";
            bio= `Cancer, you are being hunted by none other than Mothman. You may be one of the lucky ones, given that you've committed no wrongdoings, this massive moth human amalgamation may leave you alone. Although, he must be watching you for a reason...Avoid West Virginia.`;
            sfxmp3 = `${soundPath}/Mothman.mp3`;
        }
        
        else if ((month == 7 && day >22) || (month == 8 && day<=22)) {
        
            card= "./images/Zodiac Cards/Leo.png";
            bio= `Mighty Leo, you are being stalked by a Mermaid. Don't let the pretty face fool you. Her true intentions lie just beneath the surface, if you're unlucky enough to discover them, you won't come back up for air. Avoid all bodies of water.`;
            sfxmp3 = `${soundPath}/Mermaid.mp3`;
        }
        
        else if ((month == 8 && day >22) || (month == 9 && day<=22)) {
        
            card= "./images/Zodiac Cards/Virgo.png";
            bio= `Virgo, you are being stalked by the Elusive Bigfoot. Though many have tried to hunt him down, don't be fooled. <i>You</i> are the prey here. Avoid Wooded Areas.`;
            sfxmp3 = `${soundPath}/Bigfoot.mp3`;
        }
        
        else if ((month == 9 && day >22) || (month == 10 && day<=23)) {
        
            card= "./images/Zodiac Cards/Libra.png";
            bio= `Wise Libra, you are being hunted by the Wendigo. A being known for its insatiable hunger, I fear to think of your fate if you were found. Avoid Woods and Praries.`;
            sfxmp3 = `${soundPath}/Wendigo.mp3`;
        }
        
        else if ((month == 10 && day >23) || (month == 11 && day<=21)) {
        
            card= "./images/Zodiac Cards/Scorpio.png";
            bio= `Dear Scorpio, you have captured the attention of the Kraken. The might beast of the deep, known for dragging massive ships to their watery grave, has got its Eye on you. Avoid Ships and Cruises`;
            sfxmp3 = `${soundPath}/Kraken.mp3`;
        }
        
        else if ((month == 11 && day >21) || (month == 12 && day<=21)) {
        
            card= "./images/Zodiac Cards/Sagittarius.png";
            bio= `Sagittarius, you're being hunted by the wild Chupacabra. This wily beast usually goes after goats, but it seems this one has set it sights on you... Avoid Fields at Night.`;
            sfxmp3 = `${soundPath}/Chupacabra.mp3`;
        }
        else {
            console.log('Error, Invalid Input');
        } 

        playSFX();
        zodiacCard.src= card;
        zodiacBio.innerHTML= bio;
    }

    // For view deck
    const showDeck = () => {

        const cardDeck = document.querySelector('.js-full-deck');

        if (cardDeck.style.display == "none") {
            cardDeck.style.display = "grid";
          } else {
            cardDeck.style.display = "none";
          }
    };
    const showHelp = () => {

        const helpBox = document.querySelector('.js-help-box');

        if (helpBox.style.display == "none") {
            helpBox.style.display = "block";
          } else {
            helpBox.style.display = "none";
          }
    };

    
    const smallCards = document.querySelectorAll('.js-cryptid-card');
    smallCards.forEach((element) =>{
        element.addEventListener('click', function(){
            const altValue = element.getAttribute("alt");
            hoveredCard = altValue;
            findClickedCard();
        })
    });

    const buttonElement = document.querySelector('.js-button');
    buttonElement.addEventListener('click', zodiacResult);

    const helpOpenButton = document.querySelector('.js-help-button');
    helpOpenButton.addEventListener('click', showHelp);

    const helpCloseButton = document.querySelector('.js-help-box-close');
    helpCloseButton.addEventListener('click', showHelp);

    const viewFullDeck = document.querySelector('.js-view-deck')
    viewFullDeck.addEventListener('click', showDeck)

    const playSFX = () =>{
        // get the audio element
        const sfxAudio = document.querySelector('.js-sfx');
        // get each source element for the audio
        const sfxSource_mp3 = document.querySelector('.js-mp3');
    
        // change the sources to the new sound
        sfxSource_mp3.src = sfxmp3;

        // load and play the sound
        sfxAudio.load();
        sfxAudio.play();
    };