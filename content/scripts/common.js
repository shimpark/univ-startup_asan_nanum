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

// 카운트
function numberCounter(target_frame, target_number) {
	this.count = 0; this.diff = 0;
	this.target_count = parseInt(target_number);
	this.target_frame = document.getElementById(target_frame);
	this.timer = null;
	this.counter();
};

numberCounter.prototype.counter = function() {
	var self = this;
	this.diff = this.target_count - this.count;

	if(this.diff > 0) {
		self.count += Math.ceil(this.diff / 5);
	}

	this.target_frame.innerHTML = this.count.toString();

	if(this.count < this.target_count) {
		this.timer = setTimeout(function() { self.counter(); }, 10);
	} else {
		clearTimeout(this.timer);
	}
};
var count1 = null;
var count2 = null;
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

	// 정주영 창업지원경진대회 사업실행단계 지원 프로그램
	var windowW = $(window).width();

	if (windowW > 1140) {
		if (!$(".prg-list li").hasClass("active")) {
			$("#prg1").addClass("active");
		}

		$("#prg1").mouseover(function(){
			$(this).addClass("active");
			$("#prg2, #prg3, #prg4, #prg5").removeClass("active");
		});

		$("#prg2").mouseover(function(){
			$(this).addClass("active");
			$("#prg1, #prg3, #prg4, #prg5").removeClass("active");
		});

		$("#prg3").mouseover(function(){
			$(this).addClass("active");
			$("#prg1, #prg2, #prg4, #prg5").removeClass("active");
		});

		$("#prg4").mouseover(function(){
			$(this).addClass("active");
			$("#prg1, #prg2, #prg3, #prg5").removeClass("active");
		});

		$("#prg5").mouseover(function(){
			$(this).addClass("active");
			$("#prg1, #prg2, #prg3, #prg4").removeClass("active");
		});
	}

	$(window).scroll(function () {
		var windowST = $(this).scrollTop();	

		// 스크롤 반응 애니메이션
		$(".ani-area").each(function(){
			var contST2 = $(this).offset().top;
			if (windowST > contST2 - 720) {
				$(this).find(".aniEl").addClass('on');
				$(this).find(".aniEl-sq").each(function (i, el) {
					var $this = $(this);
					setTimeout(function(){
						$this.addClass('on');
					}, i * 300); // milliseconds
				});
			}
		});	
	});


	// 스크롤 반응 액션
	$(window).scroll(numberCountCheck);

	numberCountCheck();

	// 히스토리 대회영상
	$("#video").tabs();

	// 정주영 창업경진대회
	$("#prog").tabs();

	// 공지사항 동영상 콘텐츠 리사이징
//	$(".ntc-view .atc-cont iframe").parent("div").css("position", "relative");
//	$(".ntc-view .atc-cont iframe").parent("div").css("padding-bottom", "56.25%");

	// FAQ
	$("#faq").tabs();
	$("#faq .tab-cont").accordion({
		animate: 100,
		heightStyle: "content",
		collapsible: true,
		active: false
	});
});

function numberCountCheck(){
	var windowST = $(window).scrollTop();
	var doc_height = $( window ).innerHeight() - 300;
	// console.log(doc_height);
	// GNB 고정
	if (windowST > 0) {
		$("header").addClass("fixed");
	} else {
		$("header").removeClass("fixed");
	}

	if(!count1 || !count2){
		// 지표 카운트
		$('.count-area').each(function(idx){
			var contST = $(this).offset().top;
			if (windowST > (contST - doc_height)) {
				console.log(idx);
				if( count1 == null && idx === 0 ){
					count1 = new numberCounter("count-no1", 5077);
				}
				if( count2 == null && idx === 1 ){
					count2 = new numberCounter("count-no2", 110);
					new numberCounter("count-no3", 100);
					new numberCounter("count-no4", 42);
				}
			}
		});
	}
}