let currentState = 10;

const renderQuestion = () => {
    const paragraphNode = document.querySelector("#question-text");
    const buttonContainer = document.querySelector("#answers");
    buttonContainer.innerHTML = ""; 
    switch(currentState) {
        case 10: 
            paragraphNode.textContent = "You' re in a garden with two gates. \
            One has flowers, the other has butterflies. Which gate do you choose?";
            renderButton("Flower Gate", 10.1);
            renderButton("Butterfly Gate", 10.2);
            break;
        case 10.1:
            paragraphNode.textContent = "A fountain bubbles with rainbow water.\
             Do you drink it or walk away?";
            renderButton("Take a sip", 11);
            renderButton("Leave quietly", 10);
            break;
        case 10.2:
            paragraphNode.textContent = "You find an old shed with a creaky door.\
             A giggle comes from inside. What do you do?";
            renderButton("Open the door"); 
            renderButton("Run Back", 10);
            break; 
            default:
            renderButton("You Won",10);
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