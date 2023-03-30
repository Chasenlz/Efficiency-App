function removeLoadingScreen() {
  var loadingScreen = document.getElementById('loading-screen');
  loadingScreen.parentNode.removeChild(loadingScreen);
}

window.onload = function() {
  // Add any other initialization code here

  // Remove the loading screen
  removeLoadingScreen();
}
