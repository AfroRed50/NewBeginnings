/* ==== More/Less Button Function ==== */

function buttonClick() {
    var x = document.getElementById("shrink");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}