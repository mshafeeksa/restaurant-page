import {clearSubContent,setActiveTab} from "./index.js";


function generateSubContent(){
    clearSubContent();
    setActiveTab("home");
    let parent = document.querySelector(".sub-content");
    let content = document.createElement("div");
    content.classList.add("sub-content-container","hero-text");
    content.textContent = "Dive into a world of exquisite flavors at ";
    let logoSpan = document.createElement("span");
    logoSpan.textContent = "Row Your Boat";
    logoSpan.classList.add("logo-text")
    content.append(logoSpan);
    let remainingText = document.createElement("span");
    remainingText.textContent = ", where the ocean meets your plate in a symphony of culinary delight. Our seafood sanctuary is a celebration of the finest catches from the deep blue, meticulously prepared to elevate your dining experience.";
    content.append(remainingText);
    parent.appendChild(content);
}

export default generateSubContent;