let navbar = document.getElementById("navbar");
navbar.setAttribute("class", "bordered");
let links = {
    "about": "about.html",
    "portfolio": "portfolio.html",
    "blog": "blog.html",
    "contact": "contact.html"
}


for (let link in links) {
  let navbaritem = document.createElement("li");
  let a = document.createElement("a");
  a.href = links[link];
  a.textContent = link;
  navbaritem.appendChild(a);
  navbar.appendChild(navbaritem);
}