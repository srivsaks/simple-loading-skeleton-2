import "./styles.css";

setTimeout(() => {
  const parent = document.querySelector(".skeleton");
  const img = document.createElement("img");

  img.src =
    "https://images.unsplash.com/photo-1674752271238-507b7de054b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60";

  img.classList.add("img");
  img.style.height = "150px";
  img.style.width = "150px";

  parent.appendChild(img);
}, 5000);
