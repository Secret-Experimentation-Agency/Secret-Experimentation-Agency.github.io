document.addEventListener("DOMContentLoaded", function () {
            let mainLogoClicks = 0;
            document.getElementById("mainLogo").onclick = mainLogoOnClick;

            function mainLogoOnClick() {
                mainLogoClicks += 1;
                if(mainLogoClicks == 37)
                    window.location.href = "../html/arg.html"
                }
            }
        );