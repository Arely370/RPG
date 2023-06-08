var base=Document.getElementById("base");
var altura=Document.getElementById("altura");
var baseDato;
var alturaDato;
var area;
base.addEventListener("blur", ()=>{
    var baseDato=document.getElementById("base").Value;
});
altura.addEventListener("blur", ()=>{
    var baseDato=document.getElementById("altura").Value;
    var area=baseDato * alturaDato/ 2;
    document.getElementById("area").value=area;
    var areaTexto=document.getElementById("areaTexto");
    areaTexto.innerText=area;

});