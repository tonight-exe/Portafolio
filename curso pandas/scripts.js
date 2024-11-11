const toggletheme = document.getElementById("toggle-theme");
const toggleicon = document.getElementById("toggle-icon");
const toggletext = document.getElementById("toggle-text");

toggletheme.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    if(toggleicon.src.includes("moon.svg")){
        toggleicon.src = "assets/icons/sun.svg";
        toggletext.textContent = "light mode";
    }else{
        toggleicon.src = "assets/icons/moon.svg";
        toggletext.textContent = "dark mode";
    }
})

document.addEventListener("DOMContentLoaded", () => {
    const profileCard = document.querySelector(".card--profile");
    const parent = profileCard.parentElement;
    parent.insertBefore(profileCard, parent.firstChild);
});