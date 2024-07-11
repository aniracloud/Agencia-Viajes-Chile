$(document).ready(function() {
   
  
  
    /*
    ################
    suma fondo al navbar
    */
    $(window).scroll(function() {
      if ($(window).scrollTop() > 56) {
        $(".navbar").addClass("bg-dark");
      } else {
        $(".navbar").removeClass("bg-dark");
      }
    });
    // Si es móvil, agregue color de fondo cuando se haga clic en la Hmbuurgueza
    $(".navbar-toggler").click(function() {
      if (!$(".navbar-collapse").hasClass("show")) {
        $(".navbar").addClass("bg-dark");
      } else {
        if ($(window).scrollTop() < 56) {
          $(".navbar").removeClass("bg-dark");
        } else {
        }
      }
    });
    // ############
  });



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
