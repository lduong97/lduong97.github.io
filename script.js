
// document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("openPopup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "flex";

        // var popup = document.getElementById("popup");
        // popup.style.display = "flex";
        // centerPopup(popup);
    });

    document.getElementById("closePopup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
    });
// });

function centerPopup(popup) {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    var popupWidth = popup.offsetWidth;
    var popupHeight = popup.offsetHeight;

    var left = (viewportWidth - popupWidth) / 2 + "px";
    var top = (viewportHeight - popupHeight) / 2 + "px";

    popup.style.left = left;
    popup.style.top = top;
}