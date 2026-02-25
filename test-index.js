'use strict';



document.querySelector('.arrow-1').addEventListener('click', function () {
  document.querySelector('.click-question-1').addEventListener('click', function () {

  document.querySelector('.arrow-1').classList.toggle('rotate-arrow-1')
  document.querySelector('.answer-1').classList.toggle('hidden-answer-1')
  });
});



document.querySelector('.arrow-2').addEventListener('click', function () {
  document.querySelector('.click-question-2').addEventListener('click', function () {

    document.querySelector('.arrow-2').classList.toggle('rotate-arrow-2')
    document.querySelector('.answer-2').classList.toggle('hidden-answer-2')
  });
});



document.querySelector('.arrow-3').addEventListener('click', function () {
  document.querySelector('.click-question-3').addEventListener('click', function () {

    document.querySelector('.arrow-3').classList.toggle('rotate-arrow-3')
    document.querySelector('.answer-3').classList.toggle('hidden-answer-3')
  });
});



document.querySelector('.arrow-4').addEventListener('click', function() {
  document.querySelector('.click-question-4').addEventListener('click', function () {

    document.querySelector('.arrow-4').classList.toggle('rotate-arrow-4')
    document.querySelector('.answer-4').classList.toggle('hidden-answer-4')
  });
});






document.querySelectorAll('.arrows-all').addEventListener('click', function () {
  document.querySelectorAll('.questions-all').addEventListener('click', function() {
  });
});
