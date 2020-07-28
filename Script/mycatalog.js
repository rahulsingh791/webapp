function listCart() {
    setUser();

    let user = localStorage.getItem("currUser");
    

    let itemCount = localStorage.getItem("userCartCount"+user);

    
    for(let i=1; i<=itemCount; i++){
        
        let temp_id = localStorage.getItem(user+"Item"+i);

        let carddiv = document.createElement("div");
        carddiv.className = "product-card";
        carddiv.id = temp_id;
        carddiv.onclick = function() { prodClick(this) };

        let imgdiv = document.createElement("div");
        imgdiv.className = "product-image";

        let realimg = document.createElement("img");    

        realimg.src = "assets/product-image/00"+temp_id+".jpg";

        imgdiv.appendChild(realimg);
        carddiv.appendChild(imgdiv);

        let infodiv = document.createElement("div");
        infodiv.className = "product-info";

        let nameinfo = document.createElement("h5");
        nameinfo.innerHTML = localStorage.getItem("00"+temp_id+"name");

        let priceinfo = document.createElement("h6");
        priceinfo.innerHTML = "₹"+localStorage.getItem("00"+temp_id+"price");

        infodiv.appendChild(nameinfo);
        infodiv.appendChild(priceinfo);

        carddiv.appendChild(infodiv);

        let produtsdiv = document.getElementsByClassName("products")[0];
        produtsdiv.appendChild(carddiv);
    }
}

function prodClick(obj) {
    let user = localStorage.getItem("currUser");

    localStorage.setItem("currItem", obj.id);
    window.location.href = "productpage.html";
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