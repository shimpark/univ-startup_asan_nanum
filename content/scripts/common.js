/*메뉴 ***************************/
$(function(){
    $(".gnb > li.g1").mouseenter(function(){
        $(".bg-snb").animate({ "height": "98" }, 100, function(){
            $(".snb.s1").css("display", "flex");
        });
        $(".snb.s3").css("display", "none");
        $(".snb.s4").css("display", "none");
    });
    $(".gnb > li.g2").mouseenter(function(){
        $(".bg-snb").animate({ "height": "0" }, 100);
        $(".snb").css("display", "none");
    });
    $(".gnb > li.g3").mouseenter(function(){
        $(".bg-snb").animate({ "height": "98" }, 100, function(){
            $(".snb.s3").css("display", "flex");
        });
        $(".snb.s1").css("display", "none");
        $(".snb.s4").css("display", "none");
    });
    $(".gnb > li.g4").mouseenter(function(){
        $(".bg-snb").animate({ "height": "98" }, 100, function(){
            $(".snb.s4").css("display", "flex");
        });
        $(".snb.s1").css("display", "none");
        $(".snb.s3").css("display", "none");
    });
    $(".bg-snb").mouseleave(function(){
        $(".bg-snb").animate({ "height": "0" }, 100);
        $(".snb.s1").css("display", "none");
        $(".snb.s3").css("display", "none");
        $(".snb.s4").css("display", "none");
    });

	//return false;
	$(".mobile-menu").click(function(){
		wrapWindowByMask();
		$(".snb, .bg-snb").removeAttr("style");
		$("header").css("z-index", "2");
		$("body").addClass("mobile-menu-opened");
		$(".gnb").show();
	});

	$(".menu-close").click(function(){
		$(".gnb").hide();
		$("header").css("z-index", "1");
		$("body").removeClass("mobile-menu-opened");
		$(".mask").hide();
	});

	/* close mask */
	$(".mask").click(function(){
	    var winWidth = $(window).width();
	    $(".mask").hide();
	    if ($(".m-show").css("display") == "block") {
	        $(".gnb").hide();
			$("header").css("z-index", "1");
	    }
	    $('#lay1').hide();
	    $('#lay2').hide();
	    $('#lay3').hide();
	});
});

function wrapWindowByMask(){
	var maskHeight = $(document).height();
	$(".mask").css({
		"height": maskHeight
	});
	$(".mask").fadeTo("fast", 1);
}

$(window).resize(function(){
	if($(".m-show").css("display")=="none"){
		if($(".gnb").css("display") == "none"){
			if($(window).width() >= 999){
			    $(".gnb").show();
			    $(".bg-snb").animate({ "height": "0" }, 0);
			    $(".snb.s1").css("display", "none");
			    $(".snb.s2").css("display", "none");
			}
		} else {
		    if ($("#lay1").css("display") == "none") {
		        $(".mask").hide();
		    }
		}
	} else {
	    if ($(".mask").css("display") == "none") {
	        $(".gnb").hide();
	    }
	}
});


/*��ũ��ž***************************/
$(function(){
	$("#top").click(function(){
		$("body, html").animate({"scrollTop":"0"},	600);
	});
});

$(function(){
	$("dd:not(:first)").css("display","none");
	$("dl dt").click(function(){
		if($("+dd",this).css("display")=="none"){
			$("dd").slideUp("slow");
			$("+dd",this).slideDown("slow");
		}
	});
});

function setHeight_qna(obj) {
    $("#faqContents").animate({ "height": "auto" }, 300);
}

function layTop(){
	var winHeight = $(window).height();
	var lay1Height = $("#lay1").height();

	$("#lay1").css({
		"top": 100
	});
}

var HideLayer = function(){
	$("#lay1").hide();
}

var HideMask = function(){
	$(".mask").hide();
}

function closeLayer() {
    $('.mask').hide();
    $('#lay1').hide();
    $('#lay2').hide();
    $('#lay3').hide();
}

$(document).ready(function(){
	$(".btn-view").click(function(){
	    wrapWindowByMask();
	    $("body, html").animate({ "scrollTop": "0" }, 600);
	    if ($(".m-show").css("display") == "block") {
	        $(".gnb").hide();
	    }
        layTop();
		$("#lay1").show();
	});

	$(".Fivebtn-view").click(function(){
	    wrapWindowByMask();
	    $("#lay2").css({ "top": $(window).scrollTop() + 150 });
	    $("#lay2").show();
	});

	$(".Filebtn-view").click(function(){
	    wrapWindowByMask();
	    $("#lay3").css({ "top": $(window).scrollTop() + 150 });
	    $("#lay3").show();
	});

	$('.btn-close').click(function (e) {
	    e.preventDefault();
	    $('.mask').hide();
	    $('#lay1').hide();
	    $('#lay2').hide();
	    $('#lay3').hide();
	});

	// GNB 고정
	$(window).scroll(function(){
		var windowST = $(this).scrollTop();

		if (windowST > 0) {
			$("header").addClass("fixed");
		} else {
			$("header").removeClass("fixed");
		}
	});

	// 공지사항 동영상 콘텐츠 리사이징
	$(".ntc-view .atc-cont iframe").parent("div").css("position", "relative");
	$(".ntc-view .atc-cont iframe").parent("div").css("padding-bottom", "56.25%");

	// FAQ
	$("#faq").tabs();
	$(".tab-cont").accordion({
		animate: 100,
		heightStyle: "content",
		collapsible: true,
		active: false
	});
});