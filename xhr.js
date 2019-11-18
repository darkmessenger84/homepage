let xhr = new XMLHttpRequest();

xhr.onload = function() {
  
  if (xhr.status == 200)
  {
    document.getElementById("contentwrapper").innerHTML = xhr.responseText;
  }

}

function pull(res)
{

  xhr.open('GET', res);
  xhr.send();

}
