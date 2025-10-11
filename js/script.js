// Responsive mobile menu toggle
document.addEventListener("DOMContentLoaded", function() {
  const menuIcon = document.createElement("div");
  menuIcon.classList.add("menu-icon");
  menuIcon.innerHTML = "☰";
  
  const nav = document.querySelector(".navbar");
  const navLinks = document.querySelector(".nav-links");
  
  nav.insertBefore(menuIcon, navLinks);

  menuIcon.addEventListener("click", function() {
    navLinks.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("downloadPDF");
  if (btn) {
    btn.addEventListener("click", function() {
      const element = document.getElementById("portfolio-content");
      const opt = {
        margin: 0.5,
        filename: 'CKC_Portfolio.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(element).save();
    });
  }
});

