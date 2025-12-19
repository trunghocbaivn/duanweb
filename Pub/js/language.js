$(document).ready(function () {
    //DOM is ready
    //DOM is ready
    function get_cookie(cookieName) {
        var results = document.cookie.match('(^|;) ?' + cookieName + '=([^;]*)(;|$)');

        if (results)
            return (unescape(results[2]));
        else
            return null;
    }
    //Show hide iconbtnLang
    $(".btnLang").hide();
    if (get_cookie('lang') == "en") {
        $(".btnLangvi").show();
    } else {
        $(".btnLangen").show();
    }

    $(function () {

        function CheckLanguage() {
            if (get_cookie('CurrentLanguage') == "en-US")
                alert('Language : US-English');
            else
                alert('Language : French-Francais');
        }
        $(".langen").click(function (event) {
            //debugger
            event.preventDefault();
            if (get_cookie('lang') == "en") {
                return;
            }
            $.ajax({
                type: "POST",
                url: "/changelanguage",
                data: { lang: "en", url: "" }
            })
            .done(function (data) {
                window.location.href = data;
            });
        });
        $(".langru").click(function (event) {
            //debugger
            event.preventDefault();
            if (get_cookie('lang') == "ru") {
                return;
            }
            $.ajax({
                type: "POST",
                url: "/changelanguage",
                data: { lang: "ru", url: "" }
            })
            .done(function (data) {
                window.location.href = data;
            });
        });
        $(".langvi").click(function (event) {
            //debugger
            event.preventDefault();
            if (get_cookie('lang') == "vi") {
                return;
            }
            $.ajax({
                type: "POST",
                url: "/changelanguage",
                data: { lang: "vi", url: "" }
            })
            .done(function (data) {
                window.location.href = data;
            });
        });
        $(".langko").click(function (event) {
            //debugger
            event.preventDefault();
            if (get_cookie('lang') == "ko") {
                return;
            }
            $.ajax({
                type: "POST",
                url: "/changelanguage",
                data: { lang: "ko", url: "" }
            })
            .done(function (data) {
                window.location.href = data;
            });
        });
    });

    $(".m-btnLang").click(function () {
        var lang = $(this).attr("data-lang");
        $("#lang" + lang).trigger("click");
    });

});