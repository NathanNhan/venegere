var encrypt = document.getElementById("encrypt");
var decrypt = document.getElementById("decrypt");
encrypt.addEventListener("click",function(plaintext,key){
    var plaintext = document.getElementById("message").value;
    var key = document.getElementById("key").value
    var ketqua = ""
    for(var i=0, j = 0; i<plaintext.length; i++){
        var currentLetter = plaintext[i]
        if(currentLetter.toUpperCase()){
        var congthuc = ((currentLetter.charCodeAt() - 65) + (key[j%key.length].charCodeAt() - 65)) % 26
        ketqua += String.fromCharCode(congthuc + 65);
        j++
        }
    }
    return document.getElementById("ketqua").value = ketqua; 
})





