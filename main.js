prediction1 = ""
prediction2 = ""

Webcam.set({
    width:350,
    height:300,
    imageFormat : 'png',
    pngQuality:90
  });



  

camera = document.getElementById("camera");

Webcam.attach('#camera');
