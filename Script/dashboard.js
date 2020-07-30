function loadCurr() {
    setUser();
    let user = localStorage.getItem("currUser");
    document.getElementById("emailinfo").innerHTML = "Email Id : "+user;

    let count = 0;
    if(localStorage.getItem("userCartCount"+user)==null){
        localStorage.setItem("userCartCount"+user, 0);
    }else{
        count = localStorage.getItem("userCartCount"+user);
    }

    document.getElementById("totalitem").innerHTML = "Total Items : "+count;

    let totalcost = 0;

    if(count>0){
        for(let i=1;i<=count;i++){
            let temp_id = localStorage.getItem(user+"Item"+i);
            let temp_price = localStorage.getItem("00"+temp_id+"price");
            totalcost = totalcost + parseInt(temp_price);
        }
    }

    document.getElementById("totalcost").innerHTML = "Total cost : "+"₹"+totalcost;

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