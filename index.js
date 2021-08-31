const quizData = [
  {
    question: "Cümleye 'peki kanka ....' ile başlayıp ardı arkası kesilmeyen sorular geliyorsa bu kimdir?",
    a: "Günay",
    b: "Murat",
    c: "Cemil",
    correct: "b",
  }, {
    question: "heyeyeyeyee",
    a: "Ömer",
    b: "Murat",
    c: "Selah",
    correct: "c",
  } , {
    question: "Kaslı, beyefendi, sek erkek...",
    a: "Emre",
    b: "Murat",
    c: "Erdi",
    correct: "a",
  } , {
    question: "'İbrahim Tatlıses senin babandır' diye çıkış yapan ünlü",
    a: "Osman",
    b: "Murat",
    c: "Günay",
    correct: "c",
  } , {
    question: "Devamsızlık olmayan dersten kalan ünlümüz?",
    a: "Murat",
    b: "Mehmet",
    c: "UAU",
    correct: "b",
  } , {
    question: "İki kişi birbirine anlamsız küfürler ediyorsa bunlar kim olabilir?",
    a: "Murat-Günay",
    b: "Osman-Ömer",
    c: "Cemil-Erdi",
    correct: "b",
  } , {
    question: "'Senin deden kim?'",
    a: "Alperen",
    b: "Murat",
    c: "Houman",
    correct: "b",
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

/* let - var - conts arasındaki fark?
1-let block scope özelliklidir kullanıldığı yer dışında kullanılamaz !!
2-var ise function scope özelliklidir yani erişilebilir.
3-conts ile oluşturulan bir değişkene daha sonrasında tekrar değer ataması yapılamaz.
4-let ile yapılabilir.  */
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  $("#question").text(currentQuizData.question);
  $("#a_text").text(currentQuizData.a);
  $("#b_text").text(currentQuizData.b);
  $("#c_text").text(currentQuizData.c);
}


function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}


function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

$("#submit").click(function() {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
                quiz.innerHTML = `
                <h2>${score}/${quizData.length} doğru cevap.</h2>

                <button onclick="location.reload()">Tekrar dene.</button>
            `;
        }
    }
});
