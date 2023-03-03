"use strict";

let sidebar = document.querySelector(".sidebar");
let menubar = document.querySelector(".sidebarBtn");

menubar.onclick = function () {
  sidebar.classList.toggle("active");
};
