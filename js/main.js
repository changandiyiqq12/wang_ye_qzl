/* === 导航高亮 === */
(function() {
    var current = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.nav-links a');
    links.forEach(function(a) {
        if (a.getAttribute('href') === current) {
            a.classList.add('active');
        }
    });
})();

/* === 移动端汉堡菜单 === */
(function() {
    var btn = document.querySelector('.hamburger');
    var nav = document.querySelector('.nav-links');
    if (btn && nav) {
        btn.addEventListener('click', function() {
            nav.classList.toggle('open');
        });
        nav.querySelectorAll('a').forEach(function(a) {
            a.addEventListener('click', function() {
                nav.classList.remove('open');
            });
        });
    }
})();

/* === 首页平滑滚动（锚点链接） === */
(function() {
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
        a.addEventListener('click', function(e) {
            var target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})();