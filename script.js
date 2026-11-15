
document.addEventListener("DOMContentLoaded", () => {

    // Shrink the navigation when scrolling
    const header = document.querySelector("#header");

    function updateHeader() {
        if (!header) return;

        header.classList.toggle("scrolled", window.scrollY > 40);
    }

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    updateHeader();


    // Automatically update copyright year
    document.querySelectorAll("[data-year]").forEach((element) => {
        element.textContent = new Date().getFullYear();
    });


    // Smooth scrolling for links to sections on the same page
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

});
