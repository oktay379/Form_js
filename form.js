const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");


// input username e mail gibi DOM islemlerini tutuyor eger deger girilmez ise if blok calısır
// is-invalid hata isareti belirir form control benim barımdır bootstrap aldıgım
// const div yaratıldı username sonrasındaki next satırım html icerisinde olusturdugum divdir
// nextElementSibling ile o parça alındı veya direkt id atayıp dom ile alınabilirdi.
//! id vermedim cunku verseydim islemler fonksiyon ile bu kadar pratik olmayacaktı
//! her seferinde next alınıyor cunku username email gibi gibi gibi
function error(input, message){
    input.className = "form-control is-invalid"
    const div = input.nextElementSibling;   
    div.innerHTML = message;  // gircegim mesaj inner ile yazilir
    div.className = "invalid-feedback"  // hata durumu verilen classdır
}                       // kırmızı yazi tipinde küçük string hata durumunda feedback icin kullanilir 


// inputum girdigim username oluyor username bilgim = document.getElementById("username"); DOM 
// Islemidir, classname ile eklemeler yaptım is-valid form control barım icerisinde tik 
// isaretini olusturur
function success(input){
    input.className = "form-control is-valid"
}


form.addEventListener("submit", function(event){
    event.preventDefault();     // bu islem ile formun yenilenmesinin onune gecilmis oldu

    // is-invalid bootstrap class aldım from kısmında boşluk ile submit yapılırsa if blok
    // calısır ve classname yeniden class ataması yapar addclasslist gibi degildir
    // form control olucak yine ve is invalid kullanılır.
    // username.valur benim girdigim degeri tutuyor. fonksiyon ile bu işlemler kolaylaştırıldı
    if(username.value === "") {            // === esit mi degil mi oparetoru == gibi
        error(username, "Gecersiz Giris");
    }
    else {
        success(username);
    }

    if(email.value === "") {
        error(email, "Gecersiz E-mail");
    }
    else {
        success(email);
    }
    
    if(password.value === "") {
        error(password, "Gecersiz Sifre");
    }
    else {
        success(password);
    }

    if(repassword.value === "") {
        error(repassword, "Gecersiz Sifre");
    }
    else {
        success(repassword);
    }
})