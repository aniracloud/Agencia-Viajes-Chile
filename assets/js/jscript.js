



  // despalazamiento suave
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('nav a[href^="#"]');

    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetID = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetID);

            targetElement.scrollIntoView({
                behavior: "smooth"
            });
        });
    }
});