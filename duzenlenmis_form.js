const form = document.getElementById("form");

const username = document.getElementById("username");

const email = document.getElementById("email");

const phone = document.getElementById("phone");

const password = document.getElementById("password");

const repassword = document.getElementById("repassword");


function error(input, message){
    input.className = "form-control is-invalid"   // is invalid degeri isaret cıkmasına yarıcak
    const div = input.nextElementSibling;
    div.innerHTML = message;
    div.className = "invalid-feedback"  // invalid-feedback red 10px string deger vermesini saglar
}



function success(input){
    input.className = "form-control is-valid"  // is valid correct isaret cıkmasına yarıcak
}


// inputlar burada password ve re-password degerlerini tutmakta
function checkPasswords(input1, input2) {
    if(input1.value !== input2.value) {   // eger degerler esit degil ise error calisir
        error(input2, `Sifreler Birbiri Ile Eslesmiyor`);
    }
}


// orn: username verilir uzunlugu min 5 max 10 alınır uyulmaz ise error uyulursa success verilir 
function checkLength(input, min, max) {
    if(input.value){
        if(input.value.length <= min) {
            error(input, `Girdiginiz Deger ${min} Buyuk Olmalidir!`)
        }
        else if(input.value.length > max) {
            error(input, `Girdiginiz Deger ${max} Kucuk Olmalidir!`)
        }
        else {
            success(input);
            console.log(input.id); //input.id bana username phone gibi degerleri dondurur.
        }
    }
    else {
        error(input, `${input.id[0].toUpperCase() + input.id.slice(1,10)} Bos Bırakmayiniz!`);
    }
}




form.addEventListener("submit", function(event){
    event.preventDefault();  
    
    checkLength(email, 5, 100);
    checkLength(username, 5, 10);
    checkLength(phone, 10,11);
    checkLength(password, 5, 10);
    checkLength(repassword, 5, 10);

    checkPasswords(password, repassword);
});