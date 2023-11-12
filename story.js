window.addEventListener('load', function() {
    const dispPopup = function() {
        localStorage.setItem('disp_popup', 'on');
        const body = document.querySelector('body');
        const bgPopup = document.querySelector('.bg_onetime_popup');
        const popup = document.querySelector('.onetime_popup');
        const popupTitleClose = document.querySelector('.onetime_popup_title_close');
        body.classList.add('open_popup');

        bgPopup.addEventListener('click', function() {
            closePopup();
        });
        popup.addEventListener('click', function(e) {
            e.stopPropagation();
        });
        popupTitleClose.addEventListener('click', function() {
            closePopup();
        });

        function closePopup() {
            body.classList.remove('open_popup');
        }
    };
    setTimeout(dispPopup, 2000);
}, false);

// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.TextTyping').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 150;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".TextTyping");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});

    window.setTimeout(TextTypingAnime, 2000);
    // ここまで画面が読み込まれたら5秒後に動かす
});