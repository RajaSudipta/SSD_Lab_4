
function addnewTask() 
{
  var inputValue = document.getElementById("input").value;
  var newListItem = document.createElement("li");
  modInputValue = "Task: " + inputValue + "\t\t" + " || Timestamp: " + Math.round(new Date().getTime()/1000);

  var t = document.createTextNode(modInputValue);
  newListItem.appendChild(t);

  if (inputValue != '')
  {
    document.getElementById("ULL").appendChild(newListItem);
  } 
  else 
  {
    alert("Text Box can't be left empty!!");
  }

  var textItem = document.createTextNode("Delete");
  var giveSpan = document.createElement("span");
  giveSpan.appendChild(textItem);
  giveSpan.className = "close";
  newListItem.appendChild(giveSpan);
  var deleteItem = document.getElementsByClassName("close");
  for (var i = 0; i < deleteItem.length; i++) 
  {
    deleteItem[i].onclick = function() 
    {
      var pElem = this.parentElement;
      pElem.style.display = "none";
    }
  }

  // Make the textbox empty after completion
  var emptyString = "" ;
  document.getElementById("input").value = emptyString;
}

function changeFont()
{
  var unListNode = document.getElementsByTagName("li");
  for (var i = 0; i < unListNode.length; i++) 
  {
    unListNode[i].style.fontSize = "2em";
    unListNode[i].style.fontFamily = "Times New Roman";
  }

}

var unListNode = document.getElementsByTagName("li");
for (var i = 0; i < unListNode.length; i++) 
{
  var span = document.createElement("div");
  unListNode[i].appendChild(span);
}

var deleteItem = document.getElementsByClassName("close");
for (var i = 0; i < deleteItem.length; i++) 
{
  deleteItem[i].onclick = function() 
  {
    var pElem = this.parentElement;
    pElem.style.display = "none";
  }
}
