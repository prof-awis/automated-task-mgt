"use strict";

let sidebar = document.querySelector(".sidebar");
let menubar = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("fa-bars", "fa-bars-alt-right");
  } else sidebarBtn.classList.replace("fa-bars-alt-right", "fa-bars");
};
