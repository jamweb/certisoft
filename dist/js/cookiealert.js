
(function () {
    "use strict";

    var cookieAlert = document.querySelector(".cookiealert");
    var acceptCookies = document.querySelector(".aceptaCookies");

    if (!cookieAlert) {
       return;
    }

    cookieAlert.offsetHeight; 

    // Muestra el mensaje del aviso de cookies si la cookie no está en el navegador
    if (!getCookie("aceptaCookies")) {
        cookieAlert.classList.add("show");
    }

    // La cookie se almacena en el navegador un año, si no se elimina manualmente
    acceptCookies.addEventListener("click", function () {
        setCookie("aceptaCookies", true, 365);
        cookieAlert.classList.remove("show");
    });

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
})();
