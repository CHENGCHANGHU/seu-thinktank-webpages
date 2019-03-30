window.onload = function () {

    var logoBox = document.getElementsByClassName("logo_box")[0];
    var logo = document.getElementsByClassName("logo")[0];

    console.log(window.getComputedStyle(logoBox).height);
    console.log(window.getComputedStyle(logo).height);
    console.log(logo.clientHeight);
    console.log(logo.offsetHeight);
    // logo.setAttribute("margin-top", (window.getComputedStyle(logoBox).height - window.getComputedStyle(logo).height) / 2 + "px");
    logo.style.marginTop = (Dis2Num(window.getComputedStyle(logoBox).height) - logo.offsetHeight) / 2 + "px";
    // console.log((window.getComputedStyle(logoBox).height - logo.offsetHeight) / 2);

}

function Dis2Num(dis) {
    return dis.split("px")[0];
}