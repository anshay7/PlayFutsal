var hide = document.querySelector(".hide");
var navigation = document.querySelector(".navigation");
var navlist = document.querySelector(".navigation ul");
var opened = true;


hide.addEventListener('click',function() {
  if(opened == true) {
    navigation.style.width = "60px";
    navlist.style.display = "none";
    hide.innerHTML = "show";
    opened = false;
  } else {
    navigation.style.width = "calc(100% - 20px)";
    navlist.style.display = "block";
    hide.innerHTML = "hide";
    opened = true;
  }

});
