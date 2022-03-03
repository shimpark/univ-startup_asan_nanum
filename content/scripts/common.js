function wrapWindowByMask() {
    var maskHeight = $(document).height();
    $(".mask").css({
        "height": maskHeight
    });
    $(".mask").fadeTo("fast", 1);
}

function mobileMenuClose() {
    $(".gnb").hide();
    $("header").css("z-index", "1");
    $("body").removeClass("mobile-menu-opened");
    $(".mask").hide();
}

function numberCounter(target_frame, target_number) {
    this.count = 0; this.diff = 0;
    this.target_count = parseInt(target_number);
    this.target_frame = document.getElementById(target_frame);
    this.timer = null;
    this.counter();
};

numberCounter.prototype.counter = function () {
    var self = this;
    this.diff = this.target_count - this.count;

    if (this.diff > 0) {
        self.count += Math.ceil(this.diff / 5);
    }

    this.target_frame.innerHTML = this.count.toString();

    if (this.count < this.target_count) {
        this.timer = setTimeout(function () { self.counter(); }, 10);
    } else {
        clearTimeout(this.timer);
    }
};

function numberCountCheck() {
    var doc_height = $(window).innerHeight() - 300;

    if (!count1 || !count2) {
        // 지표 카운트
        $(".count-area").each(function (idx) {
            var windowST = $(window).scrollTop();
            var contST = $(this).offset().top;
            if (windowST > (contST - doc_height)) {
                console.log(idx);
                if (count1 == null && idx === 0) {
                    count1 = new numberCounter("count-no1", 5077);
                }
                if (count2 == null && idx === 1) {
                    count2 = new numberCounter("count-no2", 110);
                    new numberCounter("count-no3", 100);
                    new numberCounter("count-no4", 42);
                }
            }
        });
    }
}

var count1 = null;
var count2 = null;

function GetTopPos(o) {
    var obj_height = 0;
    if ($(o).outerHeight() == undefined) {
        obj_height = 0;
    }
    else {
        obj_height = ($(o).outerHeight() / 2);
    }

    var pos_y = ($(window).height() / 2 + $(window).scrollTop()) - obj_height;
    if (pos_y < 0 || pos_y < $(window).scrollTop()) {
        pos_y = $(window).scrollTop();
    }
    return pos_y;
}

$(document).ready(function () {
    // 기본 메뉴
    $(".gnb > li.g1").mouseenter(function () {
        $(".bg-snb").animate({ "height": "98" }, 100, function () {
            $(".snb.s1").css("display", "flex");
            $(".snb:not(.s1)").css("display", "none");
        });
    });

    $(".gnb > li.g2").mouseenter(function () {
        $(".bg-snb").animate({ "height": "0" }, 100);
        $(".snb").css("display", "none");
    });

    $(".gnb > li.g3").mouseenter(function () {
        $(".bg-snb").animate({ "height": "98" }, 100, function () {
            $(".snb.s3").css("display", "flex");
            $(".snb:not(.s3").css("display", "none");
        });
    });

    $(".gnb > li.g4").mouseenter(function () {
        $(".bg-snb").animate({ "height": "98" }, 100, function () {
            $(".snb.s4").css("display", "flex");
            $(".snb:not(.s4)").css("display", "none");
        });
    });

    $(".bg-snb").mouseleave(function () {
        $(".bg-snb").animate({ "height": "0" }, 100);
        $(".snb").css("display", "none");
    });

    // 모바일 메뉴(1419px 분기)
    $(".mobile-menu").click(function () {
        wrapWindowByMask();
        $("header").css("z-index", "2");
        $("body").addClass("mobile-menu-opened");
        $(".gnb").css("display", "block");
    });

    // 모바일 메뉴 닫기
    $(".menu-close").click(function () {
        mobileMenuClose();
    });

    // 모바일 메뉴 닫기 전 브라우저 리사이징 대응
    $(window).resize(function () {
        if ($("body").hasClass("mobile-menu-opened")) {
            if ($(window).width() >= 1420) {
                mobileMenuClose();
            }
        }
    });

    // 마스크 닫기
    $(".mask").click(function () {
        if ($("body").hasClass("mobile-menu-opened")) {
            mobileMenuClose();
        }
        $(".mask").hide();
        $(".lay").hide();
    });

    // 상단으로 가기
    $("#top").click(function () {
        $("body, html").animate({ "scrollTop": "0" }, 600);
    });

    // 스크롤 액션
    $(window).scroll(function () {
        // 메뉴 고정
        if ($(window).scrollTop() > 0) {
            $("header").addClass("fixed");
        } else {
            $("header").removeClass("fixed");
        }

        // 스크롤 반응 애니메이션
        $(".ani-area").each(function () {
            var windowST2 = $(window).scrollTop();
            var contST2 = $(this).offset().top;
            if (windowST2 > contST2 - 720) {
                $(this).find(".aniEl").addClass("on");
                $(this).find(".aniEl-sq").each(function (i, el) {
                    var $this = $(this);
                    setTimeout(function () {
                        $this.addClass("on");
                    }, i * 300); // milliseconds
                });
            }
        });
    });

    // 정주영 창업지원경진대회 사업실행단계 지원 프로그램
    if ($(window).width() > 1140) {
        if (!$(".prg-list li").hasClass("active")) {
            $("#prg1").addClass("active");
        }

        $("#prg1").mouseover(function () {
            $(this).addClass("active");
            $("#prg2, #prg3, #prg4, #prg5").removeClass("active");
        });

        $("#prg2").mouseover(function () {
            $(this).addClass("active");
            $("#prg1, #prg3, #prg4, #prg5").removeClass("active");
        });

        $("#prg3").mouseover(function () {
            $(this).addClass("active");
            $("#prg1, #prg2, #prg4, #prg5").removeClass("active");
        });

        $("#prg4").mouseover(function () {
            $(this).addClass("active");
            $("#prg1, #prg2, #prg3, #prg5").removeClass("active");
        });

        $("#prg5").mouseover(function () {
            $(this).addClass("active");
            $("#prg1, #prg2, #prg3, #prg4").removeClass("active");
        });
    }

    // 홍보 영상
    $(".open-pr-video").click(function () {
        $(".mask").addClass("darkgreen");
        wrapWindowByMask();
        $(".pr-video").show();
        $(".pr-video").css({
            "top": GetTopPos(".pr-video") + "px"
        });
    });

    // 히스토리
    //$(window).scroll(numberCountCheck);
    //numberCountCheck();

    // 아이디 찾기
    $(".open-find-id").click(function () {
        $(".mask").addClass("darkgreen");
        wrapWindowByMask();
        $(".find-id").show();
        $(".find-id").css({
            "top": GetTopPos(".find-id") + "px"
        });
    });

    // 비밀번호 찾기
    $(".open-find-pw").click(function () {
        $(".mask").addClass("darkgreen");
        wrapWindowByMask();
        $(".find-pw").show();
        $(".find-pw").css({
            "top": GetTopPos(".find-pw") + "px"
        });
    });

    // 레이어 닫기
    $(".lay-close").click(function () {
        $(".mask").hide();
        $(".mask").removeClass("darkgreen");
        $(".lay").hide();
    });
});