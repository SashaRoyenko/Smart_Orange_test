window.onload = function () {
    let backgrounds = [
        'static/img/header/bg1.png',
        'static/img/header/bg2.png'
    ];
    let BACKGROUND_IMAGE_CHANGE_INTERVAL = 8 * 1000;
    let currentImage = 0;
    (function showNextImage() {
        document.getElementById("header-slide_bg").style.backgroundImage = 'url(' + backgrounds[currentImage] + ')';
        currentImage += 1;
        if (currentImage >= backgrounds.length) {
            currentImage = 0
        }
        setTimeout(showNextImage, BACKGROUND_IMAGE_CHANGE_INTERVAL);

    }());

    document.getElementById("close_btn").onclick = function(){
        document.getElementById("pop_up").style.opacity = 0;
        document.getElementById("pop_up").style.zIndex = -1;
    };
    document.getElementById("pop_up_open").onclick = function(){
        document.getElementById("pop_up").style.opacity = 1;
        document.getElementById("pop_up").style.zIndex = 999;
    };
};
