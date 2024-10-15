const nav = document.querySelector(".menu-block");

function Open() {
    document.querySelector(".open").style.display = "none";
    document.querySelector(".close").style.display = "block";

    nav.classList.add("show");
}
function Close() {
    document.querySelector(".open").style.display = "block";
    document.querySelector(".close").style.display = "none";

    nav.classList.remove("show");

}