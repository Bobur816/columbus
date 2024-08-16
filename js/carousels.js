$(window).on("load", () => {
  const head = new Swiper(".carousel__head", {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: ".head_pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carousel__head_next",
      prevEl: ".carousel__head_prew",
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },
  });

  const stories = new Swiper(".carousel__stories", {
    spaceBetween: 20,
    // Optional parameters
    // loop: true,
    // If we need pagination
    // Navigation arrows
    // And if we need scrollbar
    // scrollbar: {
    //   el: ".swiper-scrollbar",
    // },

    breakpoints: {
      0: {
        slidesPerView: 4,
      },
      640: {
        slidesPerView: 9,
        // spaceBetween: 20,
      },
      // 768: {
      //   slidesPerView: 4,
      //   spaceBetween: 40,
      // },
      // 1024: {
      //   slidesPerView: 5,
      //   spaceBetween: 50,
      // },
    },
  });

  const hotTours = new Swiper(".carousel__hot-tours", {
    // Optional parameters
    loop: true,
    spaceBetween: 10,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carousel__hot-tours_next",
      prevEl: ".carousel__hot-tours_prew",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
    },
  });

  const hotTours2 = new Swiper(".carousel__hot-tours-2", {
    // Optional parameters
    loop: true,
    spaceBetween: 10,

    // If we need pagination
    pagination: {
      el: ".pagination_hot-tours-2",
      clickable: true,
    },

    // Navigation arrows

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
    },
  });

  const popular = new Swiper(".carousel__popular", {
    // Optional parameters
    loop: true,
    spaceBetween: 10,

    // If we need pagination
    pagination: {
      el: ".pagination_popular",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carousel__popular_next",
      prevEl: ".carousel__popular_prew",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
    },
  });

  const popularCountries = new Swiper(".carousel__popular-countries", {
    // Optional parameters
    loop: true,
    spaceBetween: 30,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carousel__popular-countries_next",
      prevEl: ".carousel__popular-countries_prew",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      420: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
    },
  });

  const domestic = new Swiper(".carousel__domestic", {
    // Optional parameters
    loop: true,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carousel__domestic_next",
      prevEl: ".carousel__domestic_prew",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      420: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
    },
  });

  const testimonials = new Swiper(".carousel__testimonials", {
    // Optional parameters
    loop: true,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carousel__testimonials_next",
      prevEl: ".carousel__testimonials_prew",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      420: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
    },
  });

  const news = new Swiper(".carousel__news", {
    // Optional parameters
    loop: true,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".carousel__news_next",
      prevEl: ".carousel__news_prew",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      420: {
        slidesPerView: 1.5,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
    },
  });
});
