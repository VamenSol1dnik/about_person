const yearOfBirth = prompt('Введіть рік народження:');

if (yearOfBirth === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження.");
    }
const city = prompt('Введіть місто проживання:');
    if (city === null) {
    alert("Шкода, що Ви не захотіли ввести своє місто.")
    }
const sport = prompt('Введіть улюблений вид спорту:');
if (sport === null) {
    alert("Шкода, що Ви не захотіли ввести свій спорт.")
    }
const currentYear = new Date().getFullYear();
const age = currentYear - yearOfBirth;

let messageCity;
if (city.toLowerCase() === 'Київ') {
  messageCity = 'Ти живеш у столиці України.';
} else if (city.toLowerCase() === 'Відень') {
    messageCity = 'Ти живеш у столиці Австрії.';
} else if (city.toLowerCase() === 'Вашингтон') {
  messageCity = 'Ти живеш у столиці США.';
} else if (city.toLowerCase() === 'Кишинів') {
    messageCity = 'Ти живеш у столиці Молдови.';
} else if (city.toLowerCase() === 'Лондон') {
  messageCity = 'Ти живеш у столиці Великої Британії.';
} else {
  messageCity = `Ти живеш у місті ${city}.`;
}

const favoriteSports = {
  "футбол": "Мбаппе",
  "теніс": "Новак Джоковіч",
  "баскетбол": "Майкл Джордан",
  "бокс":"Майк Тайсон"
};

let messageSport;
if (sport.toLowerCase() in favoriteSports) {
  const champion = favoriteSports[sport.toLowerCase()];
  messageSport = `Круто! Хочеш стати як ${champion}?`;
} else {
  messageSport = `Твій улюблений вид спорту - ${sport}.`;}