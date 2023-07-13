let displayMessage = document.getElementById("message");

const movies = [
    {title: 'Harry Potter', explanation: 'This movie is about a dude with a stick...', hint: 'It\'s Magic'},
    {title: 'Just Go With It', explanation: 'This movie is about people who go on holiday...', hint: 'Adam, Drew and Jennifer'},
    {title: 'Never Back Down', explanation: 'This movie is about two guys with daddy issues who beat each other up...', hint: 'Kanye West - Stronger'},
    {title: 'Spongebob Squarepants', explanation: 'This movie is about a rectangle...', hint: 'It\'s a cartoon'},
    {title: '50 First Dates', explanation: 'This movie is about a chick, she has the worst memory...', hint: '50 times...'},
    {title: 'Cars', explanation: 'In this movie, car go fast...', hint: 'Kachow'},
    {title: 'Spiderman', explanation: 'In this movie this guy just does not pay his rent, no matter how many times the landlord asks...', hint: 'Peta-Paka'},
    {title: 'The Wolf Of Wall Street', explanation: 'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...', hint: 'HAWOOooooooooooo'},
    {title: 'Inception', explanation: 'In this movie everyone is like sleeping all the time...', hint: 'Dreams...'},
    {title: 'Peter Pan', explanation: 'In this movie some kids die and an angel escorts them to heaven...', hint: 'Always flying, cuz he neverlands'},
    {title: 'The Lord Of The Rings', explanation: 'In this movie some small guys go for a walk...', hint: 'You will not vacate past this exact position'},
    {title: 'Jurassic Park', explanation: 'This movie is about a theme park with really old attractions...', hint: 'Dinosaurs'},
    {title: 'The Shawshank Redemption', explanation: 'This movie is about a man who redecorates his prison cell...', hint: 'Hope and friendship'},
    {title: 'Titanic', explanation: 'This movie is about a really bad cruise...', hint: 'Jack and Rose'},
    {title: 'Avatar', explanation: 'This movie is about blue aliens fighting against humans...', hint: 'Pandora'},
    {title: 'The Matrix', explanation: 'In this movie, people wear cool sunglasses and do gymnastics...', hint: 'Red pill or blue pill'},
    {title: 'Finding Nemo', explanation: 'This movie is about a dad searching for his son who has a lucky fin...', hint: 'Underwater adventure'},
    {title: 'The Lion King', explanation: 'This movie is about a young lion who becomes king with the help of some singing animals...', hint: 'Hakuna Matata'},
    {title: 'Pirates of the Caribbean', explanation: 'This movie is about a bunch of pirates and their adventures on the high seas...', hint: 'Captain Jack Sparrow'},
    {title: 'The Hangover', explanation: 'This movie is about a group of friends who have a wild night in Las Vegas and wake up with no memory of what happened...', hint: 'What happens in Vegas stays in Vegas'},
];

function random()
{
    let random = Math.floor(Math.random() * movies.length);
    displayMessage.innerHTML = movies[random].explanation;
}
random();


   
   
   