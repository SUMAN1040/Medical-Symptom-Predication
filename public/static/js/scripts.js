document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("tableSearch");
    const rows = document.querySelectorAll("table.data tr");
  
    searchInput.addEventListener("keyup", () => {
      const filter = searchInput.value.toLowerCase();
  
      rows.forEach((row, index) => {
        if (index === 0) return; // Skip header
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? "" : "none";
      });
    });
  
    // Dark mode toggle
    const toggleBtn = document.getElementById("toggleMode");
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  });
  