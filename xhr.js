const START_PAGE = "site/index.xml";

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  
  if (this.readyState == 4 
  &&  this.status == 200)
  {
    document.getElementById("contentwrapper").innerHTML = this.responseText;
  }
  
}

function pull(res = START_PAGE)
{
  
  if (!res) { res = START_PAGE; }
  xhr.open('GET', res);
  xhr.send();
  
}

window.onload = function()
{
  
  pull();

}
