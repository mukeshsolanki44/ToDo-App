// var mainDiv = document.getElementById("div1");
// var div = document.createElement("div");
// mainDiv.appendChild(div);
// var h1 = document.createElement("h1")
// div.appendChild(h1);
// var text = document.createTextNode("To do App");
// h1.appendChild(text);
// var creaTxt = document.createElement("input");
// creaTxt.setAttribute("type","text");
// creaTxt.setAttribute("placeholder","Enter your name");
// creaTxt.setAttribute("id","texxt");
// creaTxt.setAttribute("required","required")
// div.appendChild(creaTxt);

// var creaButton = document.createElement("input");
// creaButton.setAttribute("type","button");
// creaButton.setAttribute("value","add me");
// creaButton.setAttribute("onClick","myFuc()");
// div.appendChild(creaButton);
 

// function myFuc(){ 
//   var funDiv = document.createElement("div");
//     var creaList = document.createElement("ul");
//     var creaLi = document.createElement("li")
//     creaLi.setAttribute("id","creatId");
//     creaList.appendChild(creaLi);
//     funDiv.appendChild(creaList);
//     mainDiv.appendChild(funDiv);
//     var creatTxt = document.getElementById("texxt").value;
//     document.getElementById("creatId").innerHTML = creatTxt;
//     var btn = document.createElement("input");
//     btn.setAttribute("type","button");
//     btn.setAttribute("value",)
    
// }

// btn.addEventListener("click", function () {
//   btn.parentNode.remove()
//   })
//   //edit function
//   btnEdit.addEventListener('click', function () {
//   var li = this.parentNode;
//   console.log("li",li);
//   var text = prompt("enter value",li.id)
//   console.log("text",text);
//   li.innerText = text
//   li.appendChild(btn)
//   li.appendChild(btnEdit)
  
//   })
//   // console.log(listData)
//   funDiv.appendChild(ul)
//   div1.appendChild(listDiv)
//   document.getElementById('creaList').value = ""






















// main part
var div1 = document.getElementById("div1");
var div2 =document.createElement("div");
div2.setAttribute("id","mydiv");
div1.appendChild(div2);
// creat h1
var head1 = document.createElement("h1")
head1.setAttribute("id","h1");
var text1 = document.createTextNode("ToDo App");
head1.appendChild(text1);
div2.appendChild(head1);
// creat text
var input1 = document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("placeholder","Enter work");
input1.setAttribute("id","text1");
div2.appendChild(input1)
// create Button
var button1 = document.createElement("input");
button1.setAttribute("type","button");
button1.setAttribute("value","Add Work");
button1.setAttribute("id","button1");
button1.setAttribute("onClick","buttonFun()");
div2.appendChild(button1)
// creat list
function buttonFun() {
var value1= document.getElementById("text1").value;
if(value1 === ""){
    alert("Fill Fist!")
}
else{
var div3 = document.createElement("div")
var ol1 = document.createElement("ul");
ol1.setAttribute("id","h1");
var li1 = document.createElement("li");
li1.setAttribute("id",value1);
var text2 = document.createTextNode(value1);
li1.appendChild(text2)
ol1.appendChild(li1);
div3.appendChild(ol1);
div1.appendChild(div3)
// create editing and remove button
var edit1 = document.createElement("input");
edit1.setAttribute("type","button");
edit1.setAttribute("value","Edit")
edit1.setAttribute("id","edit1")
edit1.setAttribute("onclick","Edit1Fun()")
document.getElementById("text1").value=""

edit1.addEventListener('click', function () {
    var li = this.parentNode;
    console.log("li",li);
    var text = prompt("enter value",li.id)
    console.log("text",text);
    li.innerText = text
    li.appendChild(edit1)
    li.appendChild(delet1);


})

// red 
var red1 = Math.random() * 255 + 1;
red1 = Math.floor(red1);
// alert(red1)

// green
var green1 = Math.random() * 255 + 1;
green1 = Math.floor(green1);
// alert(green1)

// blue
var blue1 = Math.random() * 255 + 1;
blue1 = Math.floor(blue1);
// alert(blue1)

var rgb1 ="rgb("+red1+","+green1+","+blue1+")"
// var all = (red1,green1,blue1);

document.getElementById("h1").style.backgroundColor = rgb1;


console.log(h1.style)


var delet1 = document.createElement("input");
delet1.setAttribute("type","button");
delet1.setAttribute("value","Delete")
delet1.setAttribute("id","delet1")
delet1.setAttribute("onclick","deletFun()")

li1.appendChild(edit1);
li1.appendChild(delet1)
delet1.addEventListener("click", function () {
    delet1.parentNode.remove()
})

}
}