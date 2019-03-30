window.onload = function () {

    var imgs = document.getElementsByClassName("_c");
    var bulls = document.getElementsByClassName("bull_btn");
    console.log(bulls.length);

    var now = 0;

    for (var i = 0; i < bulls.length; i++) {
        bulls[i].index = i;
        imgs[i].style.opacity = 0;
        bulls[i].onclick = function () {
            console.log(this.index);

            tab(this.index);
            // now = this.index;
        }
        startMove(imgs[now], { 'opacity': 100 });

        bulls[i].onmouseover = function () {
            if (this.index == now) return;
            this.style.background = "#A91D20";
            this.style.opacity = 60;
        }

        bulls[i].onmouseout = function () {
            if (this.index == now) return;
            this.style.background = "#E3F3FB";
            this.style.opacity = 100;
        }
    }

    imgs[0].style.opacity = 100;
    bulls[0].style.background = "#A91D20";

    function clear(x) {
        for (var i = 0; i < bulls.length; i++) {
            bulls[i].style.background = "#E3F3FB";
        }
        bulls[x].style.background = "#A91D20";
    }

    function tab(x) {
        if (x == now) return;
        console.log(x);
        // imgs[now].style.zIndex = 0;
        // imgs[x].style.zIndex = 2;
        // imgs[x].style.opacity = 0;
        startMove(imgs[x], { 'opacity': 100 });
        startMove(imgs[now], { 'opacity': 0 });
        // imgs[now].style.zIndex = 0;
        imgs[now].style.opacity = 0;
        now = x;
        clear(now);
    }

    var btn_left = document.getElementsByClassName("btn_left_box")[0];
    var btn_right = document.getElementsByClassName("btn_right_box")[0];

    btn_left.onclick = function () {
        if (now == 0) {
            tab(imgs.length - 1);
        } else {
            tab(now - 1);
        }
    }

    btn_right.onclick = function () {
        if (now == imgs.length - 1) {
            tab(0);
        } else {
            tab(now + 1);
        }
    }

    var t = 6000;

    var cycle_img_box = document.getElementsByClassName("cycle_img_box")[0];
    cycle_img_box.timer = setInterval(function () {
        btn_right.click();
    }, t);

    cycle_img_box.onmouseover = function () {
        clearInterval(cycle_img_box.timer);
    }

    cycle_img_box.onmouseout = function () {
        cycle_img_box.timer = setInterval(function () {
            btn_right.click();
        }, t);
    }

    // var spCards = document.getElementsByClassName("sp_card");
    // console.log(spCards.length);
    // var _top = 38.5;

    // for (var i = 3; i < spCards.length; i += 3) {
    //     spCards[i].style.marginTop = _top + "px";
    //     spCards[i + 1].style.marginTop = _top + "px";
    //     spCards[i + 2].style.marginTop = _top + "px";
    // }
}