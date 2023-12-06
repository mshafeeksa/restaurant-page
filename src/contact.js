import {clearSubContent,setActiveTab} from "./index.js";
import Phone from "./phone.png";
import Email from "./email.png";

function generateContact(){
    clearSubContent();
    setActiveTab("contact");
    let content = document.createElement("div");
    content.classList.add("contact-container","sub-content-container");
    let contactTitle = document.createElement("div");
    contactTitle.textContent = "Contact Us";
    contactTitle.classList.add("contact-title");
    content.appendChild(contactTitle);
    let contactDetailsBox = document.createElement("div");
    contactDetailsBox.classList.add("contact-details-box");
    contactDetailsBox.appendChild(generateContactSets(Phone,"1234567890","phone"));
    contactDetailsBox.appendChild(generateContactSets(Email,"goodluckfindingus@notreal.com","email"));
    content.appendChild(contactDetailsBox);
    let target = document.querySelector(".sub-content");
    target.appendChild(content);
}

function generateContactSets(imgSrc,text,iconId){
    let content = document.createElement("div");
    content.classList.add("contact");
    let iconImage = document.createElement("img");
    iconImage.classList.add("icon");
    iconImage.src = imgSrc;
    iconImage.id=iconId;
    let iconText = document.createElement("div");
    iconText.classList.add("details")
    iconText.textContent = text;
    content.appendChild(iconImage);
    content.appendChild(iconText);
    return content;
}

export default generateContact;