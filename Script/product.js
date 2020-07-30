let permobjid = 0;

function togglePopup(){
  let selname = localStorage.getItem("00"+permobjid+"seller");
  let seldesc = localStorage.getItem(selname);

  document.getElementById("sellername").innerHTML = selname;
  document.getElementById("sellerinfo").innerHTML = seldesc;


  document.getElementById("popup-1").classList.toggle("active");
  
}

function showSidebar() {
  
  let sideButton = document.getElementById("sidebarBtn");
  //sideButton.style.display = "none";
  let sideBar = document.getElementsByClassName("sidebar")[0];

  sideBar.style.display = "block";
  let closeBtn = document.getElementById("closeSidebar");
  closeBtn.style.display = "block";
}

function hideSidebar() {
  let closeBtn = document.getElementById("closeSidebar");
  closeBtn.style.display = "none";
  let sideBar = document.getElementsByClassName("sidebar")[0];

  sideBar.style.display = "none";
}


function tellCurr() {

  setUser();

  let objid = localStorage.getItem("currItem");
  let name = localStorage.getItem("00"+objid+"name");
  let price = localStorage.getItem("00"+objid+"price");
  let desc = localStorage.getItem("00"+objid+"desc");
  let seller = localStorage.getItem("00"+objid+"seller");
  
  permobjid = objid;

  //let imgsrc = "assets/product-image/00"+objid.toString()".jpg";

  document.getElementById("product-name").innerHTML = name;
  document.getElementById("product-price").innerHTML = "₹"+price;
  document.getElementById("standard-info").innerHTML = desc;
  document.getElementById("soldby").innerHTML = "Sold by "+seller+"";
  document.getElementById("product-img").setAttribute("src", "assets/product-image/00"+objid+".jpg");
}

function goBack() {
  window.history.back();
}



function saveToCart() {
  let count = 0;
  let user = localStorage.getItem("currUser");
  if(localStorage.getItem("userCartCount"+user)==null){
    localStorage.setItem("userCartCount"+user, 0);
    count = 1;
  }else{
    count = localStorage.getItem("userCartCount"+user);
    count++;
    localStorage.setItem("userCartCount"+user, count);
  }

  localStorage.setItem(user+"Item"+count, permobjid);
  
}

function logOut() {
  localStorage.removeItem("alwaysLoggedIn");
  localStorage.removeItem("currUser");
  window.location.href = "login.html";
}

function setUser() {
  let user = localStorage.getItem("currUser");
  document.getElementById("userName").innerHTML = user;
}


