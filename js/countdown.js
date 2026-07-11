/* =========================================
   カウントダウン処理
   2026年7月18日の挙式までの残り時間を計算
========================================= */

// 挙式日（変更したい場合はここだけ編集）
const weddingDate = new Date("2026-07-18T00:00:00");

// カウントダウンを更新する関数
function updateCountdown() {
    const now = new Date(); // 現在時刻
    const diff = weddingDate - now; // 挙式日との差分（ミリ秒）

    // もし挙式日を過ぎていたらメッセージを表示
    if (diff <= 0) {
        document.getElementById("countdown").style.display = "none";
        document.getElementById("countdown-message").textContent =
            "Our story begins here!";
        return;
    }

    // ミリ秒 → 日・時・分・秒 に変換
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // HTMLに反映
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// 1秒ごとに更新
setInterval(updateCountdown, 1000);

// ページ読み込み時にも即時実行
updateCountdown();


