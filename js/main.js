jQuery(document).ready(function($) {

    'use strict';

        $('#nav-toggle').on('click', function (event) {
            event.preventDefault();
            $('#main-nav').toggleClass("open");
            $('#bar1').toggleClass("bar1");
            $('#bar2').toggleClass("bar2");
            $('#bar3').toggleClass("bar3");
            $('#logom').toggleClass("logom logolm");
            $('#logoigm').toggleClass("logoigm logoiglm");
        });

        //Logo Animation        

        setTimeout(function(){

            setTimeout(function(){ 
                $('#logo').toggleClass('logocourt logo');
            },1000);

            $('#logo').toggleClass('logocourt logo');
        },2000);


        //Mouse Pointer

        "use strict";

        var body = document.getElementsByTagName("body");
        var mousepointer = document.querySelector('.mousepointer');
        var link = document.getElementsByTagName("a");
        var biglink = document.getElementsByTagName("h1");
        window.addEventListener('mousemove', mouseMoveHandler);
        window.addEventListener('mousedown', mouseDownHandler);
        window.addEventListener('mouseup', mouseUpHandler);

        mousepointer.style.transform = "scale(0.1)";

        var length = link.length;
        for (var i = 0; i < length; i++) {
            link[i].addEventListener('mouseenter', linkEnterHandler);
            link[i].addEventListener('mouseleave', linkLeaveHandler);
            link[i].addEventListener("click", (function(e) {
                body[0].style.opacity = 0;
                e.preventDefault();
                setTimeout(function(url) { window.location = url }, 150, this.href);
                }));
            }


        var length = biglink.length;
        for (var i = 0; i < length; i++) {
            biglink[i].addEventListener('mouseenter', linkEnterHandlerr);
            biglink[i].addEventListener('mouseleave', linkLeaveHandler);
        }

        function mouseMoveHandler(e) {
        mousepointer.style.left = e.clientX - mousepointer.offsetWidth / 2 + "px";
        mousepointer.style.top = e.clientY - mousepointer.offsetHeight / 2 + "px";
        mousepointer.style.opacity = 1;
        }

        function mouseUpHandler(e) {
        mousepointer.style.transform = "scale(0.1)";

        if (e.target.classList.contains('link')) {
            mousepointer.style.transform = 'scale(1)';
            mousepointer.style.opacity = 1;
        }
        }

        function mouseDownHandler() {
            mousepointer.style.transform = "scale(0.7)";
        }

        function linkEnterHandler() {
            mousepointer.style.transform = "scale(0.7)";
        }

        function linkEnterHandlerr() {
            mousepointer.style.transform = "scale(1)";
        }

        function linkLeaveHandler() {
            mousepointer.style.transform = "scale(0.1)";
        }


        $(function(){
            $("a").click(function(evt){
                var link = $(this).attr("href");
                setTimeout(function() {
                    window.location.href = link;
                }, 5500);
            });
        });


});