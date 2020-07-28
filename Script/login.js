localStorage.setItem("user1","john@mail.com");
localStorage.setItem("user1pass", "johnpassword1");

let user1name = "john@mail.com";
let user1pass = "johnpassword1";

localStorage.setItem("user1","ellena@mail.com");
localStorage.setItem("user1pass", "ellenapassword1");

let user2name = "ellena@mail.com";
let user2pass = "ellenapassword1";

function checkLogin() {
    if(checkValidate()){

        let name = document.getElementById("input-name").value;
        let pass = document.getElementById("input-pass").value;
        let rem = 0;


        if(name == user1name) {
            if(pass == user1pass) {
                localStorage.setItem("currUser", user1name);
                rem = document.getElementById("remember").checked;
                localStorage.setItem("alwaysLoggedIn", rem);
                
                window.location.href="fullcatalog.html";
            }else{
                document.getElementById("incorrect").innerHTML = "Incorrect Credentials";
            }

        }else if(name == user2name){
            if(pass == user2pass) {
                localStorage.setItem("currUser", user2name);
                rem = document.getElementById("remember").checked;
                localStorage.setItem("alwaysLoggedIn", rem);
                
                window.location.href="fullcatalog.html";
            }else{
                document.getElementById("incorrect").innerHTML = "Incorrect Credentials";
            }
        }else {
            document.getElementById("incorrect").innerHTML = "Incorrect Credentials";
        }


    }    
}

function setData() {
    localStorage.setItem("001name", "Round Chair");
    localStorage.setItem("001price", "4600");
    localStorage.setItem("001desc", "<ul><li>Material: High-grade synthetic resins which ensure its longevity</li><li>Style: Contemporary style designed for both indoor and outdoor applications</li><li>Warranty: 6 Months on manufacturing defects.</li><li>Product Dimensions: 62.5m x 58.5 cm x 86 cm</li><li>Design: Wide and broad design that provides comfortable long hours of sitting</li><li>Sturdy Legs: The plastic chair comes with strong legs which ensure its durability</li><li>Comfortable: Curved seat edge, extra-large backrest and seat panel makes it extra comfortable</li></ul>");
    localStorage.setItem("001seller", "CloudTail");

    localStorage.setItem("002name", "Dust pan and Brush");
    localStorage.setItem("002price", "520");
    localStorage.setItem("002desc","<ul><li>Handheld Brush Broom and Dustpan Set for easy and comfortable cleaning. Large capacity dustpan and multi layer bristles broom brush.</li><li>High quality cleaning brush with bristle construction that will not absorb water, or dust, Longer life, environmentally friendly, fiber made from recycled material. The broom has flagged bristles resulting in a larger surface area and a soft, feathered texture that effectively grabs dust and dirt.</li><li>Large size dust pan with enough depth to hold dust and dirt. Wide mouth of the duct pan is designed to gather maximum garbage in a single sweeping. Easy to empty.</li><li>Ergonomically designed handle helps in holding the cleaning brush and dust pan set very conveniently. Both pieces comes with a hanging hole so that they can be hanged easily after use.</li><li>Dimensions - Broom Brush : Handle Length - 15 CM , Broom Width - 15 CM :: Dust Pan Handle Length - 13 CM , Dust Pan Width - 19 CM</li></ul>");
    localStorage.setItem("002seller", "BlackTiger");

    localStorage.setItem("003name", "Wooden Chair");
    localStorage.setItem("003price", "2300");
    localStorage.setItem("003desc", "<ul><li>Rated amongst the best premium chair for over two decades</li><li>Glossy lacquer finish with rich matching velvet upholstery</li><li>Sturdy, stylish premium wooden looks & ergonomic design</li><li>Solid, heavy weight and yet stylish chair with wooden looks</li><li>Versatile nature that blends in any environment</li><li>It is easy to clean and maintain, Care Instructions: Handle with care</li></ul>");
    localStorage.setItem("003seller", "CloudTail");

    localStorage.setItem("004name", "Desk Chair");
    localStorage.setItem("004price", "1200");
    localStorage.setItem("004desc", "<ul><li>Product Dimensions: Length (50 cm), Width (49 cm), Height (80 cm)</li><li>Primary Material: Polypropylene</li><li>Assembly Required: The product requires carpenter assembly and will be provided by the seller</li><li>Stacking chair</li></ul>");
    localStorage.setItem("004seller", "BlackTiger");

    localStorage.setItem("CloudTail", "We Ensure High Quality Product Delivery");
    localStorage.setItem("BlackTiger", "We Strive to improve with Each and Every Order");
}

function checkRemember() {
    setData();
    if(localStorage.getItem("alwaysLoggedIn")){
        window.location.href="fullcatalog.html";
    }
}

function checkMailFormat() {
    let mail = document.getElementById("input-name").value;

}

function checkValidate() {
    let mail = document.getElementById("input-name").value;
    if(mail==""){
        document.getElementById("incorrect").innerHTML = "Email Cannot be Blank";
        return false;
    }

    let pass = document.getElementById("input-pass").value;
    if(pass=""){

        document.getElementById("incorrect").innerHTML = "Password Cannot be Blank";
        return false;
    }

    return true;
}