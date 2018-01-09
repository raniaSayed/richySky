function deleteDiv(name){//delete div of specific view
  let div=document.getElementById(name);
  document.body.removeChild(div);
}

function viewNextButton(){
    let nextBtn = document.getElementById('nextButton');
    nextBtn.style.visibility="visible";

    nextBtn.addEventListener('click',clkFn);
    function clkFn(){
    deleteDiv("start");
    document.getElementById("menuePage").style.visibility="visible";
    document.getElementById('menuePage').style.display = "block";//to avoid scroll bar
    }
}

function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var timeOut=setTimeout(function () {

      var id = setInterval(frame, 7);
      function frame() {
          if (width >= 100) {
              clearInterval(id);
              viewNextButton();

          } else {
              width++;
              elem.style.width = width + '%';
          }
      }
    }, 1000);
}

move()
