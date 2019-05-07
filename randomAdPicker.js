var randomAdArray = ["ad1.jpg", "ad2.jpg", "ad3.jpg"];

function getRandomImg(){
  var num = Math.floor(Math.random() * randomAdArray.length);
  var img = randomAdArray[num];
  var imgStr = '<img src="' + img + '" alt="" class="ad" >';
  document.write(imgStr);
  document.close();
}
