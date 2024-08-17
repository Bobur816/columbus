$(window).on("load", () => {
  let rootFont = parseInt($(":root").css("font-size"));
  let scroll = $(window).scrollTop();
  scroll > rootFont * 2
    ? $(".header").addClass("header-scrolled")
    : $(".header").removeClass("header-scrolled");

  $(document).on("scroll", function () {
    let rootFont = parseInt($(":root").css("font-size"));
    let scroll = $(window).scrollTop();
    scroll > rootFont * 2
      ? $(".header").addClass("header-scrolled")
      : $(".header").removeClass("header-scrolled");
  });

  // ______________________________tour-selecter_________________________________

  $(".tour-selecter__item").on("click", function (e) {
    const clicked = e.target.closest("li");
    $(".tour-selecter__item").removeClass("active");
    clicked.classList.add("active");
  });

  // ______________________________selection_________________________________

  $(".selection__open").on("click", function () {
    $(".selection-tour").fadeIn(300);
  });
  $(".selection__close").on("click", function () {
    $(".selection-tour").fadeOut(300);
  });

  // ______________________________mobile nav_________________________________

  $(".mobile-nav__open").on("click", function () {
    $(".mobile-nav").slideDown(400);
  });
  $(".mobile-nav__close").on("click", function () {
    $(".mobile-nav").slideUp(400);
  });

  // ______________________________mobile filter_________________________________

  $(".filter-mobile__open").on("click", function () {
    $(".filter-mobile").slideDown(400);
  });
  $(".filter-mobile__close").on("click", function () {
    $(".filter-mobile").slideUp(400);
  });

  // ______________________________mobile filter_________________________________

  $(".map-mobile__open").on("click", function () {
    $(".map-mobile").slideDown(400);
  });
  $(".map-mobile__close").on("click", function () {
    $(".map-mobile").slideUp(400);
  });

  // ______________________________dropdown_________________________________

  $(".dropdown__toggler").on("click", function (e) {
    $(this).parent().toggleClass("active");
    $(this).parent().find(".dropdown__content").slideToggle(400);
  });

  // ______________________________filter-dropdown_________________________________

  $(".filter-dropdown button").on("click", function (e) {
    $(this).parent().find(".filter-dropdown__body").slideToggle(300);
    $(this).parent().toggleClass("active");
  });

  // ______________________________language_________________________________

  $(".language__open").on("click", function (e) {
    $(this).parent().find(".language__body").slideToggle(400);
  });

  $(".language__body").on("click", function (e) {
    if (e.target.classList.contains("lang-el")) {
      $(".language__open").text(e.target.textContent);
    }
    $(this).slideToggle(400);
  });

  // _________________________________amenities______________________________

  $(".amenities-head-item").on("click", function (e) {
    let indexCicked = Array.from($(".amenities-head-item")).indexOf(e.target);
    let indexwWillOpen = $(".amenities-body-item")[indexCicked];

    $(".amenities-head-item").removeClass("active");
    $(e.target).addClass("active");

    $(".amenities-body-item").hide();
    $(indexwWillOpen).show();
  });

  // ______________________________successfull_________________________________

  $(".successful__close").on("click", function () {
    $(".successful-window").fadeOut(400);
  });

  // ______________________________call-form_________________________________

  $(".call-form").on("submit", function (e) {
    e.preventDefault();
    e.target.reset();
    $(".successful-window").fadeIn(400);
  });

  // ______________________________steps_________________________________

  function gotoStep(toEl, toStep) {
    $(".selection-tour__step").slideUp(300);
    $(toEl).fadeIn(300);

    $(".counter__item").removeClass("active");
    $(toStep).addClass("active");
  }

  $(".selection-tour__step__form").on("submit", function (e) {
    e.preventDefault();

    let number = Array.from($(".next-step")).indexOf(
      e.target.querySelector(".next-step")
    );
    let nextEl = Array.from($(".selection-tour__step"))[number + 1];
    let nextStep = Array.from($(".counter__item"))[number + 1];
    let firstEl = Array.from($(".selection-tour__step"))[0];
    let firstStep = Array.from($(".counter__item"))[0];

    if (nextEl) {
      gotoStep(nextEl, nextStep);
    } else {
      $(".selection-tour").fadeOut(300);
      $(".successful-window").fadeIn(400);
      setTimeout(() => {
        gotoStep(firstEl, firstStep);
        $(".inputs input").val("");
      }, 1000);
    }
  });
});
