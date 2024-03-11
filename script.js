function changeColor() {
    var heading = document.getElementById("heading");
    var randomColor = getRandomColor();
    heading.style.color = randomColor;
    var body = document.body;
    var randomBgColor = getRandomColor();
    body.style.backgroundColor = randomBgColor;
  }
  
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }