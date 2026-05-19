// js/hero-slider.js
class HeroSlider {
    constructor() {
        this.images = document.querySelectorAll('.hero__image');
        this.currentIndex = 0;
        this.interval = 5000; // 5秒
        this.isAnimating = false;
        this.init();
    }

    init() {
        if (this.images.length > 1) {
            setInterval(() => this.nextSlide(), this.interval);
        }
    }

    nextSlide() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        
        // 現在のイメージから active クラス削除
        this.images[this.currentIndex].classList.remove('hero__image--active');
        
        // 次のインデックスに移動（ループ）
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        
        // 新しいイメージに active クラス追加
        this.images[this.currentIndex].classList.add('hero__image--active');
        
        // アニメーション終了待ち
        setTimeout(() => {
            this.isAnimating = false;
        }, 1000); // CSSトランジション時間と合わせる
    }
}

// ページ読み込み時に初期化
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider();
});
