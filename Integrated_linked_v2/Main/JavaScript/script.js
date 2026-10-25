// Mobile menu toggle (shared by Index pages and the User Dashboard)
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.getElementById("navLinks");
    const mobileMenu = document.getElementById("mobileMenu");
    if (!menuBtn) return;
    menuBtn.addEventListener("click", () => {
        if (navLinks) navLinks.classList.toggle("show");
        if (mobileMenu) mobileMenu.classList.toggle("show");
    });
});
