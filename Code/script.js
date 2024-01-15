var images = ["round_sunglasses_product_photography_black.jpg", "black_sunglasses_theme_image_close_ups (1).jpg", "Rahmenmaterial_Slide1.jpg"];
var currentImageIndex = 0;

function changeImage() {
  // Das Bild-Element auswählen
  var imageElement = document.getElementById("slide");
  var imageElement2 = document.getElementById("slide1");

  // Index des nächsten Bildes
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // Die Quelle des Bildes aktualisieren
  imageElement.src = images[currentImageIndex];
  imageElement.alt = "Bild " + (currentImageIndex + 1);
}

// Das onclick-Event mit der Funktion verbinden

/*document.getElementById('Daten_anzeigen').addEventListener('click', function() {
  // Füge die Klasse zu dem Element hinzu, auf das du verweisen möchtest
  document.querySelector('.Weitere_Technische_Daten').classList.add('aktiv');
});*/

