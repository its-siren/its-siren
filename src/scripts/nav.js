const navButton = document.querySelector(".nav-button");
const nav = document.querySelector("#nav");
const backdrop = document.querySelector(".backdrop");
const openMenuButton = document.querySelector(".open-menu-button");

function isNavShowing() {
    if (nav.classList.contains("show")) {
        return true;
    } else {
        return false;
    }
}

document.body.addEventListener("click", (event) => {
    if (event.target.getAttribute("noMenuPropagation") === "true") { return; }
    backdrop.classList.remove("show");
    if (!isNavShowing()) { return; }
    
    nav.classList.remove("show");
    nav.style = "";
})

navButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!isNavShowing()) {
        backdrop.classList.add("show");
        nav.classList.add("show");
        nav.style = "width: 50%;"
    }
})

openMenuButton.addEventListener("click", (event) => {
    event.stopPropagation();
    if (!isNavShowing()) {
        backdrop.classList.add("show");
        nav.classList.add("show");
        nav.style = "width: 50%;"
    }
})


function clearTabs(tabList) {
    tabList.forEach(tab => {
        document.querySelector(`#content .tab.${tab}`).classList.remove("show");
    })
}

function showContent(tab) {
    const validTabs = ["home", "poems", "songs", "about"];
    if (!tab in validTabs) {
        alert("No such tab exists.");
        return
    }

    clearTabs(validTabs);

    const contentTab = document.querySelector(`#content .${tab}`);
    if (contentTab) {
        contentTab.classList.add("show");
    }
}