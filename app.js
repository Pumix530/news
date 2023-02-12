

// SideBar

const side1 = document.getElementById('side1')
const side2 = document.getElementById('side2')
const side3 = document.getElementById('side3')

const sideTitle1 = document.getElementById('sideh1')
const sideTitle2 = document.getElementById('sideh2')
const sideTitle3 = document.getElementById('sideh3')

side1.addEventListener('mouseover', function handleMouseOver() {
    sideTitle1.style.color = 'hsl(35, 77%, 62%)';
  });

  side1.addEventListener('mouseout', function handleMouseOver() {
    sideTitle1.style.color = 'white';
  });

  side2.addEventListener('mouseover', function handleMouseOver() {
    sideTitle2.style.color = 'hsl(35, 77%, 62%)';
  });

  side2.addEventListener('mouseout', function handleMouseOver() {
    sideTitle2.style.color = 'white';
  });

  side3.addEventListener('mouseover', function handleMouseOver() {
    sideTitle3.style.color = 'hsl(35, 77%, 62%)';
  });

  side3.addEventListener('mouseout', function handleMouseOver() {
    sideTitle3.style.color = 'white';
  });

  //Footer
const footerText1 = document.getElementById('footerText1');
const footerText2 = document.getElementById('footerText2');
const footerText3 = document.getElementById('footer3');

const footerTitle1 = document.getElementById('footerTitle1');
const footerTitle2 = document.getElementById('footerTitle2');
const footerTitle3 = document.getElementById('footerTitle3');

footerText1.addEventListener('mouseover', function handleMouseOver() {
    footerTitle1.style.color = 'hsl(5, 85%, 63%)';
  });

  footerText1.addEventListener('mouseout', function handleMouseOver() {
    footerTitle1.style.color = 'black';
  });

  footerText2.addEventListener('mouseover', function handleMouseOver() {
    footerTitle2.style.color = 'hsl(5, 85%, 63%)';
  });

  footerText2.addEventListener('mouseout', function handleMouseOver() {
    footerTitle2.style.color = 'black';
  });

  footerText3.addEventListener('mouseover', function handleMouseOver() {
    footerTitle3.style.color = 'hsl(5, 85%, 63%)';
  });

  footerText3.addEventListener('mouseout', function handleMouseOver() {
    footerTitle3.style.color = 'black';
  });


  const targetDiv = document.getElementById("navbar");
  const btn = document.getElementById("toggle");
  const btnClose = document.getElementById('closeBtn')
  btn.onclick = function () {
      targetDiv.style.display = "block";
  };

  btnClose.onclick = function () {
    targetDiv.style.display = "none";
  }
  

    
