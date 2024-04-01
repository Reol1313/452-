function swapImages() {
  var imageOne = document.getElementById('imageOne');
  var imageTwo = document.getElementById('imageTwo');

  // 检查imageOne的显示状态，如果为none则显示，否则隐藏
  if (imageOne.style.display === "none") {
    imageOne.style.display = "block";
    imageTwo.style.display = "none";
  } else {
    // 如果imageOne是可见的，则隐藏它，并显示imageTwo
    imageOne.style.display = "none";
    imageTwo.style.display = "block";
  }
}