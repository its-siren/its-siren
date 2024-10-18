const nav = document.getElementById("nav");
const content = document.getElementById("content");

const navItems = nav.querySelectorAll(".nav-item");

navItems.forEach(navItem => {
    if (navItem.getAttribute("internalReference")) {
        navItem.addEventListener("click", function() {
            const currentActiveTab = content.querySelector(".tab[activeTab]");
            currentActiveTab.removeAttribute("activeTab");

            const newActiveTab = content.querySelector(`.tab[reference="${navItem.getAttribute("internalReference")}"]`);
            newActiveTab.setAttribute("activeTab", "");
        })
    }
});