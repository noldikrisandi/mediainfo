// Daftar ID yang ingin Anda atur innerHTML-nya
const ids = [
  "sub-wisata1",
  "sub-wisata2",
  "sub-wisata3",
  "sub-wisata4",
  "sub-wisata5",
];

// Contoh teks yang ingin Anda sisipkan
const textToInsert = `
<a href="#" type="button" class="btn btn-outline">
Hubungi Pemandu Wisata <i class="fab fa-whatsapp"></i>
</a>
<div class="kumpulan-gambar">
<img
  src="img/airtejunpiala.jpg"
  alt="pantai bambahano / pantai bambaranu"
  class="btn img-thumbnail"
  onclick="openImage('img/bambahano.jpg')"
/>
<img
  src="img/airtejunpiala.jpg"
  alt="pantai bambahano / pantai bambaranu"
  class="btn img-thumbnail"
  onclick="openImage('img/reconnect.jpg')"
/>
<img
  src="img/airtejunpiala.jpg"
  alt="pantai bambahano / pantai bambaranu"
  class="btn img-thumbnail"
  onclick="openImage('img/reconnect.jpg')"
/>
<img
  src="img/airtejunpiala.jpg"
  alt="pantai bambahano / pantai bambaranu"
  class="btn img-thumbnail"
  onclick="openImage('img/reconnect.jpg')"
/>
</div>
</div>
<!-- Overlay untuk Gambar B -->
<div id="overlay" class="overlay">
<span class="close-btn" onclick="closeImage()">&times;</span>
<!-- Gambar B -->
<img id="modalImage" class="modal-img" />
</div>
     `;

// Loop melalui setiap ID dan atur innerHTML
ids.forEach(function (id) {
  const element = document.getElementById(id);
  if (element) {
    element.innerHTML = textToInsert;
  }
});

// Membuat gambar membesar memenuhi layar
// Fungsi untuk membuka gambar pada overlay
function openImage(imageUrl) {
  document.getElementById("modalImage").src = imageUrl;
  document.getElementById("overlay").style.display = "flex";
}

// Fungsi untuk menutup overlay
function closeImage() {
  document.getElementById("overlay").style.display = "none";
}
