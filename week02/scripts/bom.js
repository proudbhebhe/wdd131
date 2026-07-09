let favorite = document.querySelector("#favchap");
let button = document.querySelector("button");
let list = document.querySelector("#list");
const li = document.createAttribute("li");
const exit = document.createAttribute('button');


li.textContent = input.value(favorite);
exit.textContent = ("❌");
li.append(exit);
list.append(li);

button.addEventListener('click', function(){
    if (favorite =="")
      {
      alert("please Enter a valid BoM book and chapter!");
    }
    else{
        li.append(favorite);
    }

})