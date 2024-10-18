function addClass(element, _class) {
    if (typeof _class === "string") {
        element.classList.add(_class);
    } else if (Array.isArray(_class)) {
        _class.forEach(className => {
            element.classList.add(className);
        });
    }
}

function Div(_class = "") {
    const div = document.createElement("div");
    if (_class) {
        addClass(div, _class);
    }
    return div;
}

function setParent(parent, children) {
    if (Array.isArray(children)) {
        children.forEach(child => {
            parent.appendChild(child);
        });
    } else {
        parent.appendChild(children);
    }
}