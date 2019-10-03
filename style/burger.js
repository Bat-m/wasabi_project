if (window.addEventListener) {
  window.addEventListener('load', open, false);


} else {
  window.attachEvent('onload', open);

}

function open() {
  //on cache la div
  header = document.getElementById('test')
  node = document.getElementById("foo")
  linker = document.querySelectorAll(".linker")

}

function toggle() {
  if (node.style.visibility == 'hidden' || node.style.visibility == '') {
    //rend la div hidden visible
    node.style.visibility = "visible"
    header.classList.add('size')
    for (var i = 0; i < linker.length; i++) {
      linker[i].classList.add('move')
    }
    node.style.marginRight = "-111px"
  } else {
    //rend la div hidden invisible
    node.style.visibility = "hidden"
    header.classList.remove('size')
    for (var i = 0; i < linker.length; i++) {
      linker[i].classList.add('move')
    }
  }
}