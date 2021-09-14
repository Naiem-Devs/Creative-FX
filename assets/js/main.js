(function($) {
    "use strict";



    function Date1() {
        let div = document.querySelector("#firsttimer");
        if (div) {

            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            let fixedDate = "Sep 30, 2021 00:00:00",
                countDown = new Date(fixedDate).getTime(),
                x = setInterval(function() {
                    let now = new Date().getTime(),
                        distance = countDown - now;
                    div.querySelector("#days").innerText = Math.floor(distance / (day)),
                        div.querySelector("#hours").innerText = Math.floor((distance % (day)) / (hour)),
                        div.querySelector("#minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                        div.querySelector("#seconds").innerText = Math.floor((distance % (minute)) / second);

                    //do something later when date is reached
                    if (distance < 0) {
                        clearInterval(x);
                    }
                }, 0)


        }


    };
    Date1()

    function Date2() {
        let div = document.querySelector("#secondTimer");
        if (div) {

            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            let fixedDate = "Sep 30, 2021 00:00:00",
                countDown = new Date(fixedDate).getTime(),
                x = setInterval(function() {
                    let now = new Date().getTime(),
                        distance = countDown - now;
                    div.querySelector("#days").innerText = Math.floor(distance / (day)),
                        div.querySelector("#hours").innerText = Math.floor((distance % (day)) / (hour)),
                        div.querySelector("#minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                        div.querySelector("#seconds").innerText = Math.floor((distance % (minute)) / second);

                    //do something later when date is reached
                    if (distance < 0) {
                        clearInterval(x);
                    }
                }, 0)


        }
    };
    Date2()

    function Date3() {
        let div = document.querySelector("#thirdtimer");
        if (div) {

            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            let fixedDate = "Sep 30, 2021 00:00:00",
                countDown = new Date(fixedDate).getTime(),
                x = setInterval(function() {
                    let now = new Date().getTime(),
                        distance = countDown - now;
                    div.querySelector("#days").innerText = Math.floor(distance / (day)),
                        div.querySelector("#hours").innerText = Math.floor((distance % (day)) / (hour)),
                        div.querySelector("#minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                        div.querySelector("#seconds").innerText = Math.floor((distance % (minute)) / second);

                    //do something later when date is reached
                    if (distance < 0) {
                        clearInterval(x);
                    }
                }, 0)


        }
    };
    Date3()

    function Date4() {
        let div = document.querySelector("#fourthTimer");
        if (div) {

            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            let fixedDate = "Sep 30, 2021 00:00:00",
                countDown = new Date(fixedDate).getTime(),
                x = setInterval(function() {
                    let now = new Date().getTime(),
                        distance = countDown - now;
                    div.querySelector("#days").innerText = Math.floor(distance / (day)),
                        div.querySelector("#hours").innerText = Math.floor((distance % (day)) / (hour)),
                        div.querySelector("#minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                        div.querySelector("#seconds").innerText = Math.floor((distance % (minute)) / second);

                    //do something later when date is reached
                    if (distance < 0) {
                        clearInterval(x);
                    }
                }, 0)


        }
    };
    Date4()

    function Date5() {
        let div = document.querySelector("#fifthTimer");
        if (div) {

            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            let fixedDate = "Sep 30, 2021 00:00:00",
                countDown = new Date(fixedDate).getTime(),
                x = setInterval(function() {
                    let now = new Date().getTime(),
                        distance = countDown - now;
                    div.querySelector("#days").innerText = Math.floor(distance / (day)),
                        div.querySelector("#hours").innerText = Math.floor((distance % (day)) / (hour)),
                        div.querySelector("#minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                        div.querySelector("#seconds").innerText = Math.floor((distance % (minute)) / second);

                    //do something later when date is reached
                    if (distance < 0) {
                        clearInterval(x);
                    }
                }, 0)


        }
    };
    Date5()

    function Date6() {
        let div = document.querySelector("#sixthTimer");
        if (div) {

            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            let fixedDate = "Sep 30, 2021 00:00:00",
                countDown = new Date(fixedDate).getTime(),
                x = setInterval(function() {
                    let now = new Date().getTime(),
                        distance = countDown - now;
                    div.querySelector("#days").innerText = Math.floor(distance / (day)),
                        div.querySelector("#hours").innerText = Math.floor((distance % (day)) / (hour)),
                        div.querySelector("#minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                        div.querySelector("#seconds").innerText = Math.floor((distance % (minute)) / second);

                    //do something later when date is reached
                    if (distance < 0) {
                        clearInterval(x);
                    }
                }, 0)


        }
    };
    Date6()

    function lastTimer() {
        let div = document.querySelector("#lastTimer");
        if (div) {

            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            let fixedDate = "Sep 30, 2021 00:00:00",
                countDown = new Date(fixedDate).getTime(),
                x = setInterval(function() {
                    let now = new Date().getTime(),
                        distance = countDown - now;
                    div.querySelector("#days").innerText = Math.floor(distance / (day)),
                        div.querySelector("#hours").innerText = Math.floor((distance % (day)) / (hour)),
                        div.querySelector("#minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                        div.querySelector("#seconds").innerText = Math.floor((distance % (minute)) / second);

                    //do something later when date is reached
                    if (distance < 0) {
                        clearInterval(x);
                    }
                }, 0)


        }
    };
    lastTimer()




    // owlCarousel
    $(".t_slider").owlCarousel({
        loop: true,
        margin: 20,
        items: 2,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            992: {
                items: 2,
                margin: 30
            },
            1500: {
                items: 2
            }
        }
    });

    // owlCarousel
    $(".library_slider").owlCarousel({
        loop: true,
        items: 5,
        navText: [
            '<span><i class="far fa-long-arrow-left"></i></span>',
            '<span><i class="far fa-long-arrow-right"></i></span>'
        ],
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            767: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });


    /* magnificPopup video view */
    $(".playit").magnificPopup({
        type: "iframe"
    });


})(jQuery);