let currentState = 10;

const renderQuestion = () => {
    const paragraphNode = document.querySelector("#question-text");
    const buttonContainer = document.querySelector("#answers");
    buttonContainer.innerHTML = ""; 
    switch(currentState) {
        case 10: 
            paragraphNode.textContent = "You wake up in a dark forest.\
             Two paths lie ahead. Which one do you take?";
            renderButton("Take the left path", 10.1);
            renderButton("Take the right path", 10.2);
            break;
        case 10.1:
            paragraphNode.textContent = "You find a cave with \
            glowing lights inside. What do you do?";
            renderButton("Enter the cave", 11);
            renderButton("Turn back", 10);
            break;
        case 10.2:
            paragraphNode.textContent = "You see an abandoned cabin.\
             There's a strange sound inside. What do you do?";
            renderButton("Open the door"); 
            renderButton("Run away", 10);
            break; 
            default:
            renderButton("You Won");
    }
};
// create a button
const renderButton = (addAnswerButton, transitionButton) => {
    const newButtonNode = document.createElement("button");
    newButtonNode.textContent = addAnswerButton;
    newButtonNode.addEventListener("click", () => {
        currentState = transitionButton;
        console.log(currentState);
        renderQuestion();
    });
    // document.getElementBy
    document.querySelector("#answers").appendChild(newButtonNode);
}
renderQuestion();