var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  
  console.log("State change")
  if (this.readyState == 4 
  &&  this.status == 200)
  {
    console.log("Ready")
    document.getElementById("contentwrapper").innerHTML = this.responseText;
  }

}

function pull(res)
{
  console.log("Called func")
  xhr.open('GET', res);
  console.log(res)
  xhr.send();

}
