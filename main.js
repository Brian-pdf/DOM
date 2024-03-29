const main = document.querySelector('main');

const joke1 = "Why don't scientists trust atoms? Because they make up everything!";
const joke2 = "Parallel lines have so much in common. It's a shame they'll never meet.";
const joke3 = "I told my wife she was drawing her eyebrows too high. She looked surprised.";

const jokesTemplate = `
    <h1>My Jokes</h1>
    <ul>
        <li>${joke1}</li>
        <li>${joke2}</li>
        <li>${joke3}</li>
    </ul>
`;
main.innerHTML = jokesTemplate;
const paragraph = document.createElement('p');
paragraph.textContent = "That's all folks!";
document.body.appendChild(paragraph);