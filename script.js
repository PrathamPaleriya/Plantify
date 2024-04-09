// last upload: 10/04/2024

// product Image
let pdMainImg = document.getElementById("pd-main-img");

let pdOtherImg = document.querySelector(".pd-other-img");

pdOtherImg.addEventListener('click', (e) => {
    if(e.target.tagName === 'IMG'){
        let allImages = pdOtherImg.querySelectorAll('img');
        allImages.forEach(img => img.classList.remove('selected'));
        
        e.target.classList.add('selected');
        
        pdMainImg.src = e.target.src;
    }

});

// quantity
let quantity = document.getElementById("quantity")
quantityValue = 1;

// planter yes or no
let planter = document.getElementById("planter");


// pincode
let pincodeData = [442001, 411035, 411044];
let check = document.getElementById("check");
check.addEventListener('click', () => {
    let pincode = document.getElementById("pin-code");
    if(pincode.value === ""){
        alert("Enter the Pincode")
    }
    else{
        if(pincodeData.includes(parseInt(pincode.value))){
           check.innerHTML = "Available &#10004;";
           check.style.color = "var(--green)"  
        }
        else{
            check.innerHTML = "Not Available &#10008;";
            check.style.color = "#ff3300";
        }
         
    }
})

const addCart = document.getElementById("add-to-cart");
addCart.addEventListener('click', ()=>{
    addCart.innerHTML = "Added to Cart"
    addCart.style.backgroundColor = "#FFFF";
    addCart.style.color = "var(--green)"
})