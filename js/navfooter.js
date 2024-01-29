// Membuat elemen menu
var menuElement = document.createElement("div");
menuElement.innerHTML = `<div class="menu" id="navbar">
<div class="top"></div>
<div class="main-nav">
  <a href="#" id="home-button" class="active"><h1>Trend Masa Kini</h1></a>
</div>
<div class="sub-nav">
  <nav>
    <ul>
      <li>Berita</li>
      <li>
        Travelling
        <ul>
          <li>Pantai</li>
          <li>Gunung</li>
        </ul>
      </li>
      <li>Teknologi</li>
      <li>Edukasi</li>
    </ul>
  </nav>
</div>
</div>`;

// Memasukkan elemen menu ke dalam dokumen
document.getElementById("menu-container").appendChild(menuElement);

// Membuat elemen footer
var footerElement = document.createElement("footer");
footerElement.innerHTML = `    <footer class="site-footer">
  <div class="container-footer">
    <div class="footer-top">
      <div class="footer-logo">
        <!-- <img src="logo.png" alt="Your Logo" /> -->
        <h2>Trend Masa Kini</h2>
      </div>
      <div class="footer-social">
        <h4>Ikuti Kami</h4>
        <ul class="social-icons">
          <li>
            <a href="#" target="_blank"><i class="fab fa-facebook"></i></a>
          </li>
          <li>
            <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
          </li>
          <li>
            <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
          </li>
          <li>
            <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-middle">
      <div class="footer-section">
        <h4>Tentang Kami</h4>
        <p>Dapatkan informasi terkini dan terbaru di sini.</p>
      </div>
      <div class="footer-section">
        <h4>Link Penting</h4>
        <ul class="footer-links">
          <li><a href="#">Beranda</a></li>
          <li><a href="#">Layanan</a></li>
          <li><a href="#">Mitra</a></li>
          <li><a href="#">Kontak</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Kontak Kami</h4>
        <p>
          Donggala, Indonesia<br />
          Email: krisandinoldi@gmail.com<br />
          Telepon: +62 823 4648 4778
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Trend Masa Kini. Hak Cipta Dilindungi.</p>
    </div>
  </div>
</footer>
`;

// Memasukkan elemen footer ke dalam dokumen
document.getElementById("footerContainer").appendChild(footerElement);
