$(function () {
    var bullNum = 6;
    var bullBoxWidth = $(".bull_box").get(0).offsetWidth;

    var curr = bullNum - 1;

    for (var i = 0; i < bullNum; i++) {
        $(".bull_box").append("<span class=\"bull\"><span></span></span>");
        $(".bull:nth-child(" + (i + 1) + ")").css("left", (bullBoxWidth - bullNum * 10) / 7 * (i + 1) + "%");
        $(".bull")[i].index = i;
        $('._c').eq(i).css("opacity", 0);
        $(".bull").eq(i).click(i, function () {
            console.log(this.index);
            // console.log(i);
            console.log($("._c").get(this.index).src);

            // var topsrc = $("._c").get(curr).src;
            // var clicksrc = $("._c").get(this.index).src;
            // var bgsrc = $("._c").get(curr - 1).src;

            // $("._c").eq(this.index).attr('src', bgsrc);
            // $("._c").eq(curr - 1).attr('src', topsrc);
            // $("._c").eq(curr).attr('src', clicksrc);

            // $("._c").eq(curr).hide();

            // tab(this.index, curr);
        });
    }

    // tab(0);

    // function clear(x) {
    //     for (var i = 0; i < bullNum; i++) {
    //         $('._c').eq(i).hide();
    //     }
    //     $('._c').eq(x).show();
    // }

    // function tab(x) {
    //     if (x == curr) return;

    //     // startMove(imgs[x], { 'opacity': 100 });
    //     $('._c').eq(x).show();
    //     // startMove(imgs[now], { 'opacity': 0 });
    //     $('._c').eq(curr).hide();

    //     curr = x;
    //     clear(curr, 6);
    // }

    var imgs = document.getElementsByClassName("_c");
    var bulls = document.getElementsByClassName("bull");
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

});

