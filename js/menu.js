// JavaScript untuk memuat menu
document.addEventListener("DOMContentLoaded", function () {
  const menuContainer = document.getElementById("menu-container");
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <div class="menu" id="navbar">
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
  </div>
  `;
  menuContainer.appendChild(nav);
});
