function Gobbledigook(){
  var word	=	"";
}

function getRandomWord(str) {
    const words = str.split(' ');
    return words[Math.floor(Math.random() * words.length)];
}

function combineRandomWords(str1, str2) {
    const word1 = getRandomWord(str1);
    const word2 = getRandomWord(str2);
    return `${word1} ${word2}`;
}

function cambiaimmagine() {
    // Funzione per cambiare l'immagine
    let img = document.querySelector("img.center");
    let images = ["img/1.png", "img/2.png"];
    let index = 0;
    let interval = setInterval(function() {
        img.src = images[index];
        index = (index + 1) % images.length;
    }, 100);

    // Ferma il cambiamento dopo 1 secondo
    setTimeout(function() {
        clearInterval(interval);
        img.src = "img/1.png"; // Torna all'immagine originale
    }, 1500);
}

var output 	=	document.getElementById("output");

var seed	=	"Dio Madonna Padre Prete Gesù Spirito Santo Papa Vescovo Diacono Cardinale Monaco Suora Santo Beato Profeta Angelo Arcangelo Martire Abate Missionario Apostolo Diacono Catechista Confessore Eremita Esorcista Evangelista Frate Giudice Levita Missionario Nunzio Ordinato Parroco Patriarca Pellegrino Predicatore Professore Rabbino Sacerdote Sacrista Samaritano Scriba Servo di Dio Teologo Vicario Zelota Abate Abbadessa Acolito Anacoreta Arcidiacono Arcivescovo Canonico Cappellano Cardinale Chierico Diacono permanente Esorcista Fratello laico Guardiano Ieromonaco Liturgista Metropolita Monaca Novizio Oblato Ordinario Pastore Priore";
var next	=	" adirata adirati adirato adulare amazzone arrabbiati arrabbiato arrapante arrapare arrapato bagascia bagascione bastardi bastardo battona bazzotto bernarda bigolone bischero blowjob bocchinaro bocchino bombare bramosa bramose bramosi bramoso bucaiolo cacacazzo cacaiola cacare cacata cacca caccoso cacone cagare cagata cagna cappella cappero castagna cazzabubbolo cazzata cazzeggiare cazzeggio cazzi cazziatone cazzo cazzone cazzuto cesso merda checca chiappa chiavata coger cogliona coglionare coglionata coglionatura coglione coglioni controcazzi controcoglioni cornuto cortigiana cozza cretini cretino Cristo culattone culo culorotto cunnu deretano duro eiaculare escremento fancazzismo fancazzista farabutta farabutti farabutto lafica lafiga fava favata feci fellatio fellazione fesseria fesso fica fico figa figliodiputtana figo finocchio flatulenza fogna fogne fortuna fottere fottersi fottio fottitore fottuti fottuto fregare fregarsene fregna fregnaccia fregnacciaro fregnone fregola frociaggine frocio gay gigolo glutei gnocca granchio greppo gretto grilletto handicappato idiozia impalare incacare incazzare incazzarsi incazzato incazzoso inchiappettare inculare inebetito infinocchiare infoiare infoiato introiare jug lagnoso leccaculo maiala mammella marchettaro maroni marrone mazzo merda merdaio merdaiolo merdata merdina merdosamente mezzasega mignotta minchiata minchioni missionario mortaccio mulo nerchia nero orecchione pacco palla palle paracula paraculo pecchia pecorina peluria pene peripatetica peripatetiche piantagrane piccione piglianculo pipa pippa pippaiolo pisciare pisciata pisciatoio piscio pisello pompinaro pompino porca posteriore potta pucchiacchera pugnetta puttana puttanaio puttanata puttaneggiare puttanesimo puttaniere puttano quadrupede raspa ricchione rimminchionire rimminchionito rinculare rompicoglioni rompipalle rottinculo sborone sborra sborrare sburrare scacazzare scalognato scassacazzo scassare scazzato scazzo schizzare scopabile scopamico scopare scopata scopatina scopatore scoreggia scoreggiare sderetanarsi sditalinare seccatore sedere sega segaiolo selvaggio sfanculare sfiga sfigata sfortunata sfortunate sfortunato sgnacchera sgualdrina sgualdrinaccia shag smerdare smorzacandela sorca spagnola spompinare sputtanare strafottenza strafottere stronzata stronzo stupida stupidaggine stupido sveltina taint testa di minchia tetta tiramento titjob topa toro trapanare travestito troia troiaggine troiaio troieggiare trombamico trombare trombatore uccello vacca vaccata vaffanculo vagina vite water zanzara zizza zoccola";


var button	=	document.getElementById("button");
button.addEventListener("click", function(event){
	event.preventDefault();

	text   =  combineRandomWords(seed, next);
	speechSynthesis.cancel();
	var msg = new SpeechSynthesisUtterance(text);
	window.speechSynthesis.speak(msg);
	output.textContent	=	text;
	cambiaimmagine();
}, false);

output.addEventListener("click", function(event){
    if(text){
        speechSynthesis.cancel();
        var msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
    }

    cambiaimmagine();
});

var text   =  combineRandomWords(seed, next);
speechSynthesis.cancel();
var msg = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(msg);
output.textContent	=	text;