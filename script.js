// ハンバーガーメニュー
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('NV');

hamburger.addEventListener('click',()=>{
    nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click',()=> {
        nav.classList.remove('open');
    });
});

// 外をタップで閉じる
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        nav.classList.remove('open');
    }
});

// アクティブナビ
const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('nav a').forEach(a => {
    if (a.getAttribute('href') === currentPage) {
        a.style.color = '#4A8C7A';
        a.style.fontWeight = '700';
    }
});

// ページトップボタン
const PageTop = document.getElementById('page-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        PageTop.classList.add('visible');
    } else {
        PageTop.classList.remove('visible');
    }
});

PageTop.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior:'smooth'});
});

// お問合わせフォーム
const contactForm = document.querySelector('#contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const msg = document.getElementById('form-message');
        const invalid = [...contactForm.querySelectorAll('[required]')]
        .find(el => el.type === 'checkbox' ? !el.checked : !el.value.trim());

        if (invalid) {
            msg.textContent = '未入力・未選択の項目があります。ご確認ください。';
            msg.className = 'form-message error';
        } else {
            msg.textContent = 'お問合わせを送信しました。ありがとうございます。';
            msg.className = 'form-message success';
            contactForm.reset();
        }
        msg.scrollIntoView({behavior : 'smooth' , block: 'center' });
    });
}