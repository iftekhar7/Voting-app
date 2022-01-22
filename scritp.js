var i=0;
function app(){
 i++;
}
var j=0;
function app1(){
  j++;
}
var k=0;
function app2(){
 k++;
}
 function ResultShow(){
  document.getElementById("id").innerHTML=`APP =${i}`;
  document.getElementById("id1").innerHTML=`BJP =${j}`;
  document.getElementById("id2").innerHTML=`Congress =${k}`;
 }
 function Reset(){
  document.getElementById("id").innerHTML= " ";
  document.getElementById("id1").innerHTML= " ";
  document.getElementById("id2").innerHTML= " ";
  i=0;
  j=0;
  k=0;
 }