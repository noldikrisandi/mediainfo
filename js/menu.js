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
          <li>Menu 1</li>
          <li>
            Menu 2
            <ul>
              <li>Submenu 1</li>
              <li>Submenu 2</li>
            </ul>
          </li>
          <li>Menu 3</li>
          <li>Menu 4</li>
        </ul>
      </nav>
    </div>
  </div>
  `;
  menuContainer.appendChild(nav);
});
