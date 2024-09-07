const waitingForSoup = () => console.log('soup');

console.log("You start the convo with your friend");

setTimeout(waitingForSoup, 2000);

console.log("still speaking");



const promise1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        isReady = false;
        isReady ? resolve('soup is ready resolved') : reject('reject no soup today');
    },2000)
});



console.log(
    promise1
        .then(value => console.log(value))
        .catch(value => console.log(value))
);


const getSoup = async () => {
    try{
        const soup = await promise1;

        console.log('async soup funtion');
        consol.log(soup);
    }catch(error){
        console.log(error);
    }
}

getSoup();

fetch('https://dog.ceo/api/breeds/image/random')
.then(response => response.json())
.then(data => console.log(data));

const getDog =async () => {
    const url = 'https://dog.ceo/api/breeds/image/random';
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}

getDog();