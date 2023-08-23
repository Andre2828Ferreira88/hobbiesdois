var hobbies = ["Andar a cavalo", "Basquete", "display" , "vasco"]

hobbies.forEach(function(hobby) {
console.log("Olá, eu sou o hobby " + hobby + " oi");
});

const bookTitles = hobbies.map(function(hobby) {
    return "Compre os livris: " + hobby;
    });
    console.log(bookTitles);

const dHobbies = hobbies.filter(function(hobby) {
return hobby[0] === 'd';
} );


const runningPosition = hobbies.findIndex(function(hobby) {
    return hobby === 'vasco';
    });
    console.log("Vasco está na posição: " + runningPosition);



const allHobbies = hobbies.reduce(function(accumulator, hobby) {
return accumulator + " e " + hobby; }, "");

console.log("Meus hobbies são: " + allHobbies + " Mas gosto mais desse");


const hasVHobby = hobbies.some(function(hobby) {
    return hobby[0] === 'z'; });
    
    console.log("Eu tenho um hobby que começa com 'z'? " + hasVHobby);


const allShort = hobbies.every(function(hobby) { return hobby.length < 8; });
console.log("Todos os meus hobbies têm menos de 8 letras? " + allShort);


const fiveLetterHobby = hobbies.find(function(hobby) {
    return hobby.length === 5; });
    console.log("Meu primeiro hobby com 5 letras é: " + fiveLetterHobby);


const firstThreeHobbies = hobbies.slice(2, 4); console.log("Meu segundo ao quarto hobbie são: ",
firstThreeHobbies);



