let questions = document.querySelectorAll('.faqbox');

questions.forEach(
    function (item) {

        let button = item.querySelector('.faqbox__button');

        let answer = item.querySelector('.faqbox__answer');

        button.addEventListener('click', function () {
            answer.classList.toggle('show-answer');

            if (!(answer.classList.contains('show-answer'))) {
                button.innerHTML = '<span class="material-icons faqbox__button">add_circle_outline</span>';
            } else {
                button.innerHTML = '<span class="material-icons faqbox__button">remove_circle_outline</span>'; 
            }  
        })
    }
);

