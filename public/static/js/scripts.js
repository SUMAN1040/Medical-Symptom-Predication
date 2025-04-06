document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("tableSearch");
    const toggleModeBtn = document.getElementById("toggleMode");
    const exportBtn = document.getElementById("exportCSV");
    const toggleTableBtn = document.getElementById("toggleTable");
    const table = document.querySelector("table.data");
    const rows = document.querySelectorAll("table.data tr");
    const tableInfo = document.getElementById("rowCount");

    const updateRowCount = () => {
        let count = 0;
        rows.forEach((row, index) => {
        if (index === 0) return;
        if (row.style.display !== "none") count++;
        });
    tableInfo.innerText = count;
    };

    // Search filter
    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLowerCase();
        rows.forEach((row, index) => {
        if (index === 0) return;
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? "" : "none";
    });
        updateRowCount();
    });

    // Dark mode toggle
    toggleModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        toggleModeBtn.innerText = document.body.classList.contains("dark-mode")
        ? "☀️ Light Mode"
        : "🌙 Dark Mode";
    });

    // Export to CSV
    exportBtn.addEventListener("click", () => {
    let csv = [];
    for (let row of table.rows) {
        if (row.style.display === "none") continue;
        const cols = Array.from(row.cells).map(col => `"${col.innerText}"`);
        csv.push(cols.join(","));
    }
    const blob = new Blob([csv.join("\n")], { type: "text/csv" });
    const link = document.createElement("a");
    link.download = "medical_data_export.csv";
    link.href = URL.createObjectURL(blob);
    link.click();
    });

    // Toggle table visibility
    toggleTableBtn.addEventListener("click", () => {
    const container = document.querySelector(".table-container");
    container.style.display = container.style.display === "none" ? "block" : "none";
    });

    updateRowCount();
});