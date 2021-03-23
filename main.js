function menuDropdownShow() {
  let url = document.getElementById("menuIcon").src;
  document.getElementById("menuDropdown").classList.toggle("show");
  if(url.substring(url.lastIndexOf("/") + 1, url.length) == "icon-hamburger.svg") {
    document.getElementById("menuIcon").src = "./images/icon-close.svg";
    document.getElementById("menuIcon").style.width = "26px";
    document.getElementById("menuIcon").style.height = "26px";
  }else {
    document.getElementById("menuIcon").src = "./images/icon-hamburger.svg";
    document.getElementById("menuIcon").style.width = "32px";
    document.getElementById("menuIcon").style.height = "18px";
  }
};
