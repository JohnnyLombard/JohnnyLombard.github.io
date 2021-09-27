// NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop =
    window.pageTOffset || this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// TYPED
var typed = new Typed(".typed", {
  strings: [
    "Bonjour, après une carrière m'ayant fait découvrir plusieurs domaines professionnels, j'ai décidé de me lancer à fond dans l'apprentissage du code. Je me forme depuis quelques temps aux divers languages de programmation (<strong>HTML</strong>, <strong>CSS</strong>, <strong>JAVASCRIPT</strong>).",
    "Dans cette optique, je suis à la recherche d'une entreprise afin de parfaire ma formation (formation en 2 ans par alternance avec l'école <a href ='https://www.creative-formation.fr/'>Creative</a> d'Hérouville Saint Clair)",
  ],
  typeSpeed: 20,
});

// COMPTEUR
let compteur = 0;

$(window).scroll(function () {
  const top = $(".counter").offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $(".counter-value").each(function () {
      let $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 10000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    compteur = 1;
  }
});

//AOS
AOS.init();
