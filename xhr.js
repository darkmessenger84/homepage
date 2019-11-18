let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  
  if (this.readyState == 4 
  &&  this.status == 200)
  {
    document.getElementById("contentwrapper").innerHTML = this.responseText;
  }

}

function pull(res)
{

  xhr.open('GET', res);
  console.log(res)
  xhr.send();

}
