document.addEventListener('DOMContentLoaded', () => {
    const bgMusic = document.getElementById('bgMusic');
    const loveBtn = document.querySelector('.love-btn');
    const floatingHearts = document.querySelector('.floating-hearts');

    // 自动播放背景音乐
    document.addEventListener('click', () => {
        bgMusic.play().catch(error => {
            console.log('自动播放被阻止，请点击页面任意位置播放音乐');
        });
    }, { once: true });

    // 创建漂浮爱心
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 20 + 24 + 'px';
        heart.style.color = '#ff4b4b';
        heart.style.opacity = 0.85;
        heart.style.animation = `float ${Math.random() * 3 + 2}s linear`;
        heart.style.transform = `rotate(${Math.random()*30-15}deg)`;
        floatingHearts.appendChild(heart);

        // 动画结束后移除元素
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // 点击按钮发送爱心
    loveBtn.addEventListener('click', () => {
        for (let i = 0; i < 8; i++) {
            setTimeout(createFloatingHeart, i * 120);
        }
    });

    // 页面加载时自动创建一些漂浮爱心
    for (let i = 0; i < 12; i++) {
        setTimeout(createFloatingHeart, i * 250);
    }
}); 