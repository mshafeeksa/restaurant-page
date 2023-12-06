import Logo from "./restaurant-logo.png";
import generateSubContentHome from "./home";
import generateMenu from "./menu";
import './style.css';
import generateContact from "./contact";
function clearSubContent(){
    let prevContent = document.querySelector(".sub-content-container");
    prevContent.remove();
}

function setActiveTab(tabName){
    let allTabs = document.querySelectorAll(".tab>li");
    allTabs.forEach(tab => tab.classList.remove("selected"));
    let activeTab = document.querySelector(`#${tabName}`);
    activeTab.classList.add("selected");
}

export {clearSubContent,setActiveTab};

const generateTemplate = (function(){
    let finalContent = document.querySelector("#content");
    finalContent.appendChild(generateHeader());
    finalContent.appendChild(generateNav());
    let subContentDiv = document.createElement("div");
    subContentDiv.classList.add("sub-content");
    let subContentContainer = document.createElement("div");
    subContentContainer.classList.add("sub-content-container");
    subContentDiv.appendChild(subContentContainer);
    finalContent.appendChild(subContentDiv);
    generateSubContentHome();
    finalContent.appendChild(generateFooter());
    let homeTab = document.querySelector("#home");
    homeTab.classList.add("selected");
    homeTab.addEventListener("click",()=>{
        generateSubContentHome();
    })
    let menuTab = document.querySelector("#menu");
    menuTab.addEventListener("click",()=>{
        generateMenu();
    })
    let contactTab = document.querySelector("#contact");
    contactTab.addEventListener("click",()=>{
        generateContact();
    })


})();

function generateHeader(){
    let content = document.createElement("div");
    content.classList.add("header");
    let image = document.createElement("img");
    image.src = Logo;
    image.alt = "Logo of Row Your Boat";
    image.classList.add("logo");
    content.appendChild(image);
    return content;
}

function generateNav(){
    let content = document.createElement("div");
    content.classList.add("navigation");
    let uList = document.createElement("ul");
    uList.classList.add("tab");
    let listItem1 = document.createElement("li");
    listItem1.id = "home";
    listItem1.textContent = "Home";
    uList.appendChild(listItem1);
    let listItem2 = document.createElement("li");
    listItem2.id = "menu";
    listItem2.textContent = "Menu";
    uList.appendChild(listItem2);
    let listItem3 = document.createElement("li");
    listItem3.id = "contact";
    listItem3.textContent = "Contact Us";
    uList.appendChild(listItem3);
    content.appendChild(uList);
    return content;
}



function generateFooter(){
    let content = document.createElement("div");
    content.classList.add("footer");
    content.textContent = "Created by Mohammed Shafeek, 2023";
    return content;
}

