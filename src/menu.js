import {clearSubContent,setActiveTab} from "./index.js";
import Sushi from "./main-sushi.jpg"
import FishPot from "./main-fishpot.jpg";
import GrilledFish from "./main-grilled-fish.jpg";
import RoastedFish from "./main-roasted-fish.jpg";
import SushiPlatter from "./main-sushi-platter.jpg";

function generateMenu(){
    clearSubContent();
    setActiveTab("menu");
    let finalContent = document.createElement("div");
    finalContent.classList.add("menu-container","sub-content-container");
    let menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Menu";
    finalContent.appendChild(menuTitle);
    let subMenuContainer = document.createElement("div");
    subMenuContainer.classList.add("sub-menu-container");
    let subMenuTitle = document.createElement("div");
    subMenuTitle.classList.add("sub-menu-title");
    subMenuTitle.textContent = "Main Course";
    subMenuContainer.appendChild(subMenuTitle);
    let menuListContainer = setMenu();
    subMenuContainer.appendChild(menuListContainer);
    finalContent.appendChild(subMenuContainer);
    let subContent = document.querySelector(".sub-content");
    subContent.appendChild(finalContent);
}

function setMenu(){
    let content = document.createElement("div");
    content.classList.add("menu-list-container");
    const MainCourseMenu = [
        {
            title : "Sushi Alhaniya",
            image : Sushi,
            description : "Nothing special about it."
        },
        {
            title : "FishPot",
            image : FishPot,
            description : "Yes, you guessed it right. Pot with fish inside it."
        },
        {
            title : "Grilled Fish with Potato",
            image : GrilledFish,
            description : "Brilliant combination of grilled King fish and crispy potato wedges."
        },
        {
            title : "Roastiano Le Madeupe",
            image : RoastedFish,
            description : "Roasted fish with a made up name to sound French."
        },
        {
            title : "Royal Sushi platter",
            image : SushiPlatter,
            description : "A gigantic platter of sushi varieties."
        }
    ]

    for(let i = 0; i<MainCourseMenu.length; i++){
        content.appendChild(createItem(MainCourseMenu[i]));
    }

    return content;
}

function createItem(item){
    let content = document.createElement("div");
    content.classList.add("item");
    let itemName = document.createElement("div");
    itemName.classList.add("item-name");
    itemName.textContent = item.title;
    let itemImage = document.createElement("img");
    itemImage.classList.add("item-image")
    itemImage.src = item.image;
    itemImage.alt = `An image of ${item.title}`;
    let itemDescription = document.createElement("div");
    itemDescription.classList.add("item-description");
    itemDescription.textContent = item.description;
    content.appendChild(itemName);
    content.appendChild(itemImage);
    content.appendChild(itemDescription);
    return content;
}

export default generateMenu;