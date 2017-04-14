

/**

 * Created by Austin
on 4/12/2017.

 */

 

 

 

/*Solar System orbit animation true time scaled

 

 Revolution of planets
in earth days (from Wikipedia)

 Mercury  : ~87.5 days

 Venus    : ~224.7 days

 Earth    : ~365.2563 days

 + Moon : ~27.3216
days (around earth)

 Mars     : ~687,days (~1,8 year)

 Jupiter  : ~4,331 days (~12 years)

 Saturn   : ~10,747 days (~30 years)

 Uranus   : ~30,589 days (~84 years)

 Neptune  : ~59,802 days (~165 years)

 Pluto    : ~90,580 days (~248 years)

 */

 

 

 

 

 

//effect on hover

$(function () {

   
$('#pluto').mouseenter(function () {

 

           
$('.pluto').ready(function () {

               
console.log('I work');

               
$('.pluto').css('opacity', '1');

 

 

               
console.log('shoot');

            });

    });

 

});

$(function () {

   
$('#pluto').mouseleave(function () {

 

       
$('.pluto').ready(function () {

           
console.log('I work');

           
$('.pluto').css('opacity', '.5');

 

 

           
console.log('shoot');

        });

    });

 

});

 

$(function () {

   
$('#neptune').mouseenter(function () {

 

       
$('.neptune').ready(function () {

           
console.log('I work');

           
$('.neptune').css('opacity', '1');

 

 

            console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#neptune').mouseleave(function () {

 

       
$('.neptune').ready(function () {

           
console.log('I work');

           
$('.neptune').css('opacity', '.5');

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#uranus').mouseenter(function () {

 

       
$('.uranus').ready(function () {

           
console.log('I work');

           
$('.uranus').css('opacity', '1');

 

 

            console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#uranus').mouseleave(function () {

 

       
$('.uranus').ready(function () {

           
console.log('I work');

           
$('.uranus').css('opacity', '.5');

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#saturn').mouseenter(function () {

 

       
$('.saturn').ready(function () {

           
console.log('I work');

           
$('.saturn').css('opacity', '1');

 

 

            console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#saturn').mouseleave(function () {

 

       
$('.saturn').ready(function () {

           
console.log('I work');

           
$('.saturn').css('opacity', '.5');

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#jupiter').mouseenter(function () {

 

       
$('.jupiter').ready(function () {

           
console.log('I work');

           
$('.jupiter').css('opacity', '1');

 

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#jupiter').mouseleave(function () {

 

       
$('.jupiter').ready(function () {

           
console.log('I work');

           
$('.jupiter').css('opacity', '.5');

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#belt').mouseenter(function () {

 

       
$('.asteroids_meteorids').ready(function () {

           
console.log('I work');

           
$('.asteroids_meteorids').css('opacity', '1');

 

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#belt').mouseleave(function () {

 

       
$('.asteroids_meteorids').ready(function () {

           
console.log('I work');

           
$('.asteroids_meteorids').css('opacity', '.5');

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#mars').mouseenter(function () {

 

       
$('.mars').ready(function () {

           
console.log('I work');

           
$('.mars').css('opacity', '1');

 

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#mars').mouseleave(function () {

 

       
$('.mars').ready(function () {

           
console.log('I work');

           
$('.mars').css('opacity', '.5');

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#earth').mouseenter(function () {

 

       
$('.earth').ready(function () {

           
console.log('I work');

           
$('.earth').css('opacity', '1');

 

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#earth').mouseleave(function () {

 

       
$('.earth').ready(function () {

           
console.log('I work');

           
$('.earth').css('opacity', '.5');

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

    $('#venus').mouseenter(function () {

 

       
$('.venus').ready(function () {

           
console.log('I work');

           
$('.venus').css('opacity', '1');

 

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

    $('#venus').mouseleave(function
() {

 

       
$('.venus').ready(function () {

           
console.log('I work');

           
$('.venus').css('opacity', '.5');

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

   
$('#mercury').mouseenter(function () {

 

       
$('.mercury').ready(function () {

           
console.log('I work');

           
$('.mercury').css('opacity', '1');

 

 

           
console.log('shoot');

        });

    });

});

 

$(function () {

    $('#mercury').mouseleave(function
() {

 

       
$('.mercury').ready(function () {

           
console.log('I work');

           
$('.mercury').css('opacity', '.5');

 

           
console.log('shoot');

        });

    });

});

 

//End planet hovers

 

//Start update on speed

/*

$(document).ready(function() {

 

    var spd = 0, r =
0;

 

   
$('#points').on('change', function () {

        spd =
+(this.value);

    });

 

    function start() {

        r += spd;

 

       
$('.solarsystem').css('-webkit-animation-duration', '12s + r');

       
requestAnimationFrame(start);

    }

 

    start();

 

})

*/

 

$(document).ready(function() {

 

    var slide =
document.getElementById('slide'),

        points =
document.getElementById("points");

 

    slide.onchange =
function () {

       
points.innerHTML = this.value;

       
console.log('UPDATE');

    }

 

},{passive:true});

 

 

 

$(document).ready(function() {

 

   
$('#pause').on('click',function(){

        var
self=$(this);

 

       
if(self.text()=="Pause")    
{

           
$(this).text('Play');

           
console.log("I Work play");

 

           
$(document).ready(function() {

               
$('orbit').stop(true, true);

               
console.log("I  pause
planets");

 

            })

 

        }

        else {

           
$(this).text('Pause');

           
console.log("I Work pause");

 

 

 

 

        }

    })

 

});

