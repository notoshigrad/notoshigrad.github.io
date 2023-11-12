$(window).on('load', function(){
    $('body').removeClass('fade');
});

$(function() {
    // ハッシュリンク(#)と別ウィンドウでページを開く場合はスルー
    $('a:not([href^="#"]):not([target])').on('click', function(e){
      e.preventDefault(); // ナビゲートをキャンセル
      url = $(this).attr('href'); // 遷移先のURLを取得
    if (url !== '') {
        $('body').addClass('fade');  // bodyに class="fade"を挿入
        setTimeout(function(){
          window.location = url;  // 2秒後に取得したURLに遷移
        }, 2000);
    }
    return false;
    });
});


function check(){
  const word = document.judge.keyword.value;
  const q1 = document.getElementById('q1')
  const q2 = document.getElementById('q2')
  const q3 = document.getElementById('q3')
  const frame = document.getElementById('images')
  const next = document.getElementById('door')
  if(word == "月" || word == "つき" || word == "ツキ"){ 
    alert("正解！次の問題")
    q1.style.display = "none"
    q2.style.display = "block"
  }
  else if(word == "新幹線" || word == "しんかんせん" || word == "シンカンセン"){
    alert("正解！次の問題")
    q2.style.display = "none"
    q3.style.display = "block"
  }
  else if(word == "あうと" || word == "アウト" || word == "out" || word == "OUT" || word == "Out"){
    alert("正解！扉があらわれた！")
    frame.style.border = "none"
    q3.style.display = "none"
    next.style.display = "block"
  }
  else alert('どうやら違うようだ・・・');
}

const modalBtns = document.querySelectorAll(".modal-toggle");
modalBtns.forEach(function (btn) {
btn.onclick = function () {
    var modal = btn.getAttribute('data-modal');
    document.getElementById(modal).style.display = "block";
};
});
const closeBtns = document.querySelectorAll(".modal-close");
closeBtns.forEach(function (btn) {
btn.onclick = function () {
    var modal = btn.closest('.modal');
    modal.style.display = "none";
};
});

window.onclick = function (event) {
if (event.target.className === "modal") {
    event.target.style.display = "none";
}
};

let score = 0;

function answerQuiz1() {
    const quiz_1 = document.getElementById('quiz-1');

    if (quiz_1.answer.value !== 'd') {
        alert('どうやら違うようだ・・・')
    // 正解はD
    } else if (quiz_1.answer.value == 'd') {
        score++;
        alert('正解！実に美しい花だ。')
        document.getElementById('q1').style.display = 'none';
    } else {
        alert('答えを入力してください');
    }
}

function answerQuiz2() {
  const quiz_2 = document.getElementById('quiz-2');

  if (quiz_2.answer.value !== 'c') {
      alert('どうやら違うようだ・・・')
  // 正解はC
  } else if (quiz_2.answer.value == 'c') {
      score++;
      alert('正解！神戸の牛はなんと美味いのか...！')
      document.getElementById('q2').style.display = 'none';
  } else {
      alert('答えを入力してください');
  }
}

function answerQuiz3() {
  const quiz_3 = document.getElementById('quiz-3');

  if (quiz_3.answer.value !== 'b') {
      alert('どうやら違うようだ・・・')
  // 正解はB
  } else if (quiz_3.answer.value == 'b') {
      score++;
      alert('正解！自慢の牙と手に入れた角で拙者に敵はない！')
      document.getElementById('q3').style.display = 'none';
  } else {
      alert('答えを入力してください');
  }
}

function answerQuiz4() {
  const quiz_4 = document.getElementById('quiz-4');

  if (quiz_4.answer.value !== 'b') {
      alert('どうやら違うようだ・・・')
  // 正解はB
  } else if (quiz_4.answer.value == 'b') {
      score++;
      alert('正解！流れるようなそなたの剣舞、龍の如し。')
      document.getElementById('q4').style.display = 'none';
  } else {
      alert('答えを入力してください');
  }
}

function answerQuiz5() {
  const quiz_5 = document.getElementById('quiz-5');

  if (quiz_5.answer.value !== 'd') {
      alert('どうやら違うようだ・・・')
  // 正解はD
  } else if (quiz_5.answer.value == 'd') {
      score++;
      alert('正解！一寸の虫にも五分の魂という。命を大切になさい。')
      document.getElementById('q5').style.display = 'none';
  } else {
      alert('答えを入力してください');
  }
}

function answerQuiz6() {
  const quiz_6 = document.getElementById('quiz-6');

  if (quiz_6.answer.value !== 'a') {
      alert('どうやら違うようだ・・・')
  // 正解はA
  } else if (quiz_6.answer.value == 'a') {
      score++;
      alert('正解！遺跡の宝を守りし我々神獣軍を全て倒すとは...君たちには脱帽だ。宝の在処を教えてやろう。')
      document.getElementById('q6').style.display = 'none';
  } else {
      alert('答えを入力してください');
  }
}

function allCorrect() {
  if(score == 6){
    alert('ゴゴゴゴ....地面から何かが現れた！')
    document.getElementById('hidden').style.display = 'block';
  }
}
