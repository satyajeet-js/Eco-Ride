// Admin dashboard behaviour (stations.html, maintenance.html)
function searchStations() {
    const q = document.getElementById("searchStation").value.toLowerCase();
    document.querySelectorAll("#stationTable tbody tr").forEach(r => {
        r.style.display = r.textContent.toLowerCase().includes(q) ? "" : "none";
    });
}
function openStationModal() {
    let o = document.getElementById("stationModal");
    if (!o) {
        o = document.createElement("div");
        o.id = "stationModal"; o.className = "modal-overlay";
        o.innerHTML = `<div class="modal"><div class="modal-header"><h2>Add Station</h2>
            <button class="close-btn" onclick="closeStationModal()">&times;</button></div>
            <div class="form-group"><label>Station name</label><input type="text"></div>
            <div class="form-group"><label>Capacity</label><input type="number" min="1"></div>
            <div class="modal-buttons"><button class="cancel-btn" onclick="closeStationModal()">Cancel</button>
            <button class="save-btn" onclick="closeStationModal()">Save</button></div></div>`;
        o.addEventListener("click", e => { if (e.target === o) closeStationModal(); });
        document.body.appendChild(o);
    }
    o.classList.add("show");
}
function closeStationModal() { const o = document.getElementById("stationModal"); if (o) o.classList.remove("show"); }
function manageStation(name) { alert("Managing station: " + name); }
function markFixed(button, bikeId) {
    const s = button.closest(".maintenance-card").querySelector(".maintenance-status");
    if (s) s.textContent = "fixed";
    button.disabled = true; button.style.opacity = "0.5";
}
