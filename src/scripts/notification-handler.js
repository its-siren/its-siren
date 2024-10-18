const notificationsHolder = document.getElementById("notifications");

function createNotification(title, content, severity="success", duration=5) {
    // Requisite logic
    if (!["low", "medium", "high"].includes(severity)) {
        if (!["success", "warning", "error"].includes(severity)) {
            console.error(`ValueError: severity value (${severity}) not in [\"low\", \"medium\", \"high\"]`);
            alert("An error has occured sending a notification. Please refer to the developer console for error information.");
        } else {
            referenceTable = {"success": "low", "warning": "medium", "error": "high"};
            console.warn(`DeprecationError: severity value will soon only accept [\"low\", \"medium\", \"high\"]. Using cross-referenced value ${referenceTable[severity]}.`);
            severity = referenceTable[severity];
        }
    }

    // Create all notification elements
    const notificationHolder = Div("notification")
    const notificationTitle = Div("notification-title");
    const notificationContent = Div("notification-content");
    const notificationTimer = Div("notification-tail");

    // Set class(es)
    addClass(notificationHolder, severity);
    addClass(notificationTimer, severity);

    // Set attribute(s)
    notificationHolder.setAttribute("duration", duration * 1000);
    if (severity === "high") {
        notificationHolder.setAttribute("disableEarlyClose", true);
    }

    // Set text content for elements
    notificationTitle.textContent = title;
    notificationContent.textContent = content;

    // Set styles
    notificationHolder.style.transition = "opacity 0.35s";
    notificationHolder.style.opacity = "100%";
    notificationTimer.style.transition = `width calc(${duration} * 0.1s) ease`;
    notificationTimer.style.width = "100%"

    // Internal logic
    if (notificationHolder.getAttribute("disableEarlyClose") !== true) {
        notificationHolder.style.pointerEvents = "all";
    } else {
        notificationHolder.style.pointerEvents = "none";
    }

    setTimeout(function() {
        notificationTimer.style.width = "0%";

        setTimeout(function() {
            notificationHolder.style.opacity = "0%";

            setTimeout(function() {
                notificationHolder.remove();
            }, 350);
        }, notificationHolder.getAttribute("duration"));
    }, 300);

    notificationHolder.addEventListener("click", function() {
        notificationTimer.style.transition = "width 0.1s";
        notificationTimer.style.width = "0%";

        setTimeout(function() {
            notificationHolder.style.opacity = "0%";

            setTimeout(function() {
                notificationHolder.remove();
            }, 350)
        }, 300);
    });

    // Set parents 
    setParent(notificationHolder, [notificationTitle, notificationContent, notificationTimer]);
    setParent(notificationsHolder, notificationHolder);
}

