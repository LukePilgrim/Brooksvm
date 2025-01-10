//Document Ready
$(function(){

    // Navbar Change While Scrolling
    $(this).scrollTop(0);
    
    $(window).scroll(function() {
        var height = $(window).height();
        var trigger = height*0.1;    
        var scroll = $(window).scrollTop();

        if (scroll >= trigger) {
            $(".navbar").addClass("navbar-shrunken");

            // Scroll Hint Fade Out
            $(".scroll-hint").css("opacity", 0);
        } else {
            $(".navbar").removeClass("navbar-shrunken");
            $('.navbar').removeClass("dropdown-background");
        }
        
    });

    // Mobile Navbar Change While Toggling
    $('.navbar-toggler').click(function(){
      if (! $(".navbar").hasClass("navbar-shrunken")) {
        $('.navbar').toggleClass("navbar-toggle");
        $('.navbar').removeClass("dropdown-background");
      }
      $('.navbar-toggler').toggleClass("active");
      $('.navbar').removeClass("dropdown-background");
    })

    // Navbar Change While Toggling Dropdown
    $('.dropdown-toggle').click(function(){
        $('.navbar').toggleClass("dropdown-background");
    })
    $(".dropdown-toggle").blur(function(){
      $('.navbar').toggleClass("dropdown-background");
    })

    // Title Animation 
    $('.lettering-title').each(function() {

        $(this).lettering();
        $(this).waypoint(function() {

            if ($(this.element).hasClass('lettering-fast')) {
            
                $(this.element).contents().each(function() {
                    
                    $(this).css('transition-delay', (Math.random()*0.5) + 's');
                    $(this).addClass('lettering-animate-fast');
                    $(this).parent().addClass('lettering-title-visible');

                });
            }
            else {
                $(this.element).contents().each(function() {
                    
                    $(this).css('transition-delay', Math.random() + 's');
                    $(this).addClass('lettering-animate');
                    $(this).parent().addClass('lettering-title-visible');

                });
            }
        },
        { offset: '80%'});
    });

    // Content Animation on Hero 
    $('.animation-content').each(function() {

        $(this).waypoint(function() {
        
                $(this.element).addClass('content-animate');

        },
        { offset: '80%'});
    });

    // Searchbar
    $('.btn-search').click(function(){
      $('.searchbar').toggleClass('clicked');
      $('.stage').toggleClass('faded');
    
      
      if($('.searchbar').hasClass('clicked')){
        $('.btn-extended').focus();
      }
      
    }); 

  /* ---- particles.js config ---- */

  particlesJS("particles-js-1a", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#DCCB9D"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#DCCB9D"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 1.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.1,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "top-left",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.14571241226898518
          }
        },
        "bubble": {
          "distance": 300,
          "size": 4,
          "duration": 0,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 50,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  particlesJS("particles-js-1b", {
    "particles": {
      "number": {
        "value": 10,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#DCCB9D"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#DCCB9D"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.05,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 25,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 0.1,
          "size_min": 10,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "bottom-right",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.14571241226898518
          }
        },
        "bubble": {
          "distance": 300,
          "size": 4,
          "duration": 0,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 50,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  particlesJS("particles-js-2", {
    "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#c9ffd1"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#c9ffd1"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.75,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1.25,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0.25,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.5,
        "direction": "top-right",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.14571241226898518
          }
        },
        "bubble": {
          "distance": 300,
          "size": 4,
          "duration": 0,
          "opacity": 0,
          "speed": 3
        },
        "repulse": {
          "distance": 50,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
});