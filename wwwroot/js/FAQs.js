function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    var plusMinus = element.querySelector('.plus-minus');
    
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      plusMinus.textContent = '+';
    } else {
      answer.style.display = 'block';
      plusMinus.textContent = '-';
    }
  }
  