$(
    function () {
        console.log(window.screen.width);
        console.log(document.body.clientWidth);
        console.log(document.body.offsetWidth);
        console.log(window.screen.availWidth);

        // $(".nav_container").css("margin-left", (document.body.clientWidth - 1200) / 2 + "px");

        $(".logo_box").css("margin-top", (80 - $(".nav_container").offsetHeight) / 2 + "px");

        console.log($(".content_phrase").length);
        var boxWidth = $(".content_phrase_box").get(0).offsetWidth;
        // console.log(boxWidth);
        var itemWidth = $(".content_phrase").get(0).offsetWidth;
        // console.log(itemWidth);
        var mr = (boxWidth - itemWidth * 9) / 8;
        // console.log(mr);
        for (var i = 0; i < $(".content_phrase").length - 1; i++) {
            // console.log(i);
            $(".content_phrase:nth-child(" + (i + 1) + ")").css("margin-right", mr + "px");
        }

        console.log($(".search_box").get(0).offsetWidth);
        console.log($(".search_btn_box").get(0).offsetWidth);
        console.log($(".search_btn").get(0).offsetWidth);
        $(".search_text").css("width",
            $(".search_box").get(0).offsetWidth - $(".search_btn_box").get(0).offsetWidth + "px");
        // $(".search_text").css("width", "40px");

        // var bullsHtml = "";
        // for (var i = 0; i < 6; i++) {
        //     // $(".bull").append("<span class=\"bull\"><span></span></span>");
        //     bullsHtml += "<span class=\"bull\"><span></span></span>";
        // }
        // $(".bull_box").html(bullsHtml);

        var bullNum = 6;
        var bullBoxWidth = $(".bull_box").get(0).offsetWidth;
        for (var i = 0; i < bullNum; i++) {
            $(".bull_box").append("<span class=\"bull\"><span></span></span>");
            $(".bull:nth-child(" + (i + 1) + ")").css("left", (bullBoxWidth - bullNum * 10) / 7 * (i + 1) + "%");
            $(".bull")[i].index = i;
            $(".bull").eq(i).click(i, function () {
                console.log(this.index);
                console.log(i);
            });
        }

        console.log(Math.random());

        for (var i = 0; i < 6; i++) {
            $(".left_sidebar_card_box").append(
                "<div class=\"left_sidebar_card\">" +
                "<span class=\"sidebar_imgbox\"><img src=\"./imgs/news" +
                (Math.floor(Math.random() * 14 + 1)) +
                ".jpg\" /></span>" +
                "<span class=\"sidebar_titlebox\">法国黄马甲运动愈演愈烈，愈演愈烈，愈演愈烈愈演愈烈愈演愈烈</span>" +
                "<span class=\"sidebar_timebox\">2019-03-23</span>" +
                "</div>"
            );
        }

        console.log($(".left_sidebar").text());
        console.log($(".left_sidebar").outerWidth());
        console.log($(".left_sidebar").outerHeight());


        $(".left_content").css("height", $(".left_sidebar").outerHeight() + "px");
        $(".right_content").css("height", $(".left_sidebar").outerHeight() + "px");

        console.log(($(".left_sidebar").outerHeight() - 40));
        $(".left_content_card_box").css("height", ($(".left_sidebar").outerHeight() - 40) + "px");
        console.log(($(".left_sidebar").outerHeight() - 40) / 4);
        $(".content_card").css("height", ($(".left_sidebar").outerHeight() - 40) / 4 + "px");
        // $(".right_content_card").css("height", ($(".left_sidebar").outerHeight() - 40) / 4 + "px");

        console.log($(".content_card").eq(0).innerWidth());
        console.log($(".content_card").eq(0).innerHeight());
        console.log($(".content_card").eq(0).height());

        for (var i = 0; i < 4; i++) {
            $(".left_content_card_box").eq(0).append(
                "<div class=\"content_card\">" +
                "<span class=\"imgbox\"><img src=\"./imgs/news" +
                (Math.floor(Math.random() * 14 + 1)) +
                ".jpg\" /></span>" +
                "<span class=\"label_box\"><span>权利游戏</span><span>欧洲政治</span></span>" +
                "<span class=\"titlebox\"><span>安倍与普京“博感情”，四岛问题能解决吗？</span></span>" +
                "<span class=\"timebox\">环球网&bull;03/23&emsp;21:03</span></div>"
            );
        }

        for (var i = 0; i < 4; i++) {
            $(".right_content_card_box").eq(0).append(
                "<div class=\"content_card\">" +
                "<span class=\"imgbox\"><img src=\"./imgs/news" +
                (Math.floor(Math.random() * 14 + 1)) +
                ".jpg\" /></span>" +
                "<span class=\"label_box\"><span>权利游戏</span><span>欧洲政治</span></span>" +
                "<span class=\"titlebox\"><span>安倍与普京“博感情”，四岛问题能解决吗？</span></span>" +
                "<span class=\"timebox\">环球网&bull;03/23&emsp;21:03</span></div>"
            );
        }

        for (var i = 0; i < 3; i++) {
            $(".breif_intro_box").eq(0).append(
                "<div class=\"breif_intro_card\">" +
                "<div class=\"bi_title\">智能新闻采编系统" + i + "</div>" +
                "<span class=\"bi_sentence\">床前明月光，疑是地上霜</span>" +
                "<span class=\"bi_sentence\">床前明月光，疑是地上霜</span>" +
                "<span class=\"bi_sentence\">床前明月光，疑是地上霜</span>" +
                "<span class=\"bi_sentence\">床前明月光，疑是地上霜</span>" +
                "<span class=\"bi_sentence\">床前明月光，疑是地上霜</span>" +
                "</div>"
            );
        }

        $(".min_solution_card").eq(0).css("height", $(".breif_intro_box").eq(0).outerHeight() + "px");
        $(".min_solution_card").eq(0).css("width",
            $(".tech_pro_app_box").eq(0).width() - $(".bi_sentence").eq(0).outerWidth() + "px");

        console.log($(".tech_pro_app_box").eq(0).outerHeight());
        console.log($(".intelligent_media_box").eq(0).outerHeight());

        $(".ma_imgs_box").eq(0).css("margin",
            "0 0 " + ($(".tech_pro_app_box").eq(0).outerHeight() - $(".intelligent_media_box").eq(0).outerHeight()) / 2 + "px 0");


        $(".msc_intro_para_box").eq(0).text(
            "上个月，建筑师程泰宁和学生们欢聚一堂，共同度过了自己的83周岁生日。他说，和学生们在一起，是他最开心、最放松的时光。“学生们都成家立业了，分散在各地。"
        );

        for (var i = 0; i < 4; i++) {
            $(".msc_bi_box").eq(0).append(
                "<span class=\"msc_bi_line\">" +
                "<span class=\"msc_rarr\"><img src=\"./imgs/rarr1.png\" /></span>" +
                "<span class=\"msc_bi\">床前明月光，疑是地上霜霜霜" + i + "</span>" +
                "</span>"
            );
        }

        for (var i = 0; i < 4; i++) {
            $(".nsc_bi_box").eq(0).append(
                "<span class=\"nsc_bi_line\">" +
                "<span class=\"nsc_rarr\"><img src=\"./imgs/rarr1.png\" /></span>" +
                "<span class=\"nsc_bi\">床前明月光，疑是地上霜霜霜" + i + "</span>" +
                "</span>"
            );
        }

        for (var i = 0; i < 4; i++) {
            $(".nsc_bi_box").eq(1).append(
                "<span class=\"nsc_bi_line\">" +
                "<span class=\"nsc_rarr\"><img src=\"./imgs/rarr1.png\" /></span>" +
                "<span class=\"nsc_bi\">床前明月光，疑是地上霜霜霜" + i + "</span>" +
                "</span>"
            );
        }

        $(".content2").eq(0).css("height",
            $(".n_scholars_box").eq(0).outerHeight() + "px");

        console.log($(".n_scholars_box").eq(0).outerHeight());
        $(".scholars_box").eq(0).css("height",
            $(".content2").eq(0).outerHeight() + "px");

        $(".sp_box").eq(0).css("height",
            $(".content2").eq(0).outerHeight() - 40 + "px");

        for (var i = 0; i < 27; i++) {
            $(".sp_box").eq(0).append(
                "<div class=\"sp_card\">" +
                "<div class=\"sp_img_box\"><img src=\"./imgs/scholar.jpg\" /></div>" +
                "<span class=\"sp_title\">程泰宁</span></div>"
            );
        }

        for (var i = 3; i < 27; i++) {
            $(".sp_card").eq(i).css("margin-top",
                ($(".sp_box").eq(0).outerHeight() - ($(".sp_card").eq(0).outerHeight() * 9)) / 8 + "px");
        }

        $(".contact_box").eq(0).css("height",
            $(".partner_branch_box").eq(0).outerHeight() + "px");

        for (var i = 0; i < $(".partner_card").length; i++) {
            $(".partner_card").eq(i).css("margin",
                "0 " + ($(".prow1").outerWidth() - 7 * ($(".partner_card").outerWidth())) / 8 + "px");

            console.log(($(".prow1").eq(0).outerHeight() - $(".partner_card").eq(i).children("a").children("img").outerHeight()) / 2);
            // $(".partner_card").eq(i).children("img.1").css("background-color", "red");
            $(".partner_card").eq(i).children("a").children("img").css("margin-top",
                ($(".prow1").eq(0).outerHeight() - $(".partner_card").eq(i).children("a").children("img").outerHeight()) / 2 + "px");
        }

        for (var i = 0; i < 3; i++) {
            $(".fi_box").eq(i).children("img").css("margin",
                ($(".fi_box").eq(i).outerHeight() - $(".fi_box").eq(i).children("img").outerHeight()) / 2 + "px " +
                ($(".fi_box").eq(i).outerWidth() - $(".fi_box").eq(i).children("img").outerWidth()) / 2 + "px");
        }

    }


);