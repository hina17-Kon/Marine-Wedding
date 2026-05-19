// js/qa-accordion.js
class QAAccordion {
    constructor() {
        this.buttons = document.querySelectorAll('.qa__button');
        this.init();
    }

    init() {
        this.buttons.forEach(button => {
            button.addEventListener('click', (e) => this.toggle(e));
        });
    }

    toggle(event) {
        const button = event.currentTarget;
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        const answer = button.nextElementSibling;
        const icon = button.querySelector('.qa__icon');

        if (isExpanded) {
            this.close(button, answer, icon);
        } else {
            this.open(button, answer, icon);
        }
    }

    open(button, answer, icon) {
        button.setAttribute('aria-expanded', 'true');
        icon.textContent = '−'; // マイナスアイコン
        
        // スムーズなスライドダウン
        answer.style.maxHeight = '0px';
        answer.style.opacity = '0';
        answer.classList.add('qa__answer--open');
        
        // リフロー強制
        answer.offsetHeight;
        
        answer.style.transition = 'max-height 0.4s ease-out, opacity 0.4s ease-out';
        answer.style.maxHeight = answer.scrollHeight + 'px';
        answer.style.opacity = '1';
    }

    close(button, answer, icon) {
        button.setAttribute('aria-expanded', 'false');
        icon.textContent = '+'; // プラスアイコン
        
        // スムーズなスライドアップ
        answer.style.transition = 'max-height 0.3s ease-in, opacity 0.3s ease-in';
        answer.style.maxHeight = '0px';
        answer.style.opacity = '0';
        
        setTimeout(() => {
            answer.classList.remove('qa__answer--open');
        }, 300);
    }
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', () => {
    new QAAccordion();
});