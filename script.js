// عداد الحب - حساب الأيام المتبقية حتى عيد الحب
function updateCountdown() {
    // تاريخ عيد الحب 2026
    const valentineDate = new Date('2026-02-14T00:00:00').getTime();
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const timeDiff = valentineDate - now;
        
        // حساب الأيام والساعات والدقائق والثواني
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
        
        // تحديث العناصر
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        // إذا انتهى العد
        if (timeDiff <= 0) {
            clearInterval(timer);
            document.getElementById('days').textContent = '0️⃣';
            document.getElementById('hours').textContent = '🎉';
            document.getElementById('minutes').textContent = '💕';
            document.getElementById('seconds').textContent = '🎊';
        }
    }, 1000);
}

// فتح الهدية
document.getElementById('giftBox').addEventListener('click', function() {
    this.style.animation = 'none';
    setTimeout(() => {
        this.style.animation = 'spin 0.6s ease-in-out';
    }, 10);
    
    setTimeout(() => {
        document.getElementById('giftMessage').style.display = 'block';
        createConfetti();
    }, 300);
});

// تأثير الألعاب النارية عند فتح الهدية
function createConfetti() {
    const colors = ['❤️', '💕', '💖', '🎀', '✨', '💝'];
    
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.textContent = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-20px';
        confetti.style.fontSize = '20px';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        
        document.body.appendChild(confetti);
        
        animateConfetti(confetti);
    }
}

function animateConfetti(confetti) {
    let top = -20;
    let left = parseFloat(confetti.style.left);
    let opacity = 1;
    let rotation = 0;
    
    const interval = setInterval(() => {
        top += Math.random() * 8 + 3;
        left += Math.random() * 4 - 2;
        opacity -= 0.01;
        rotation += Math.random() * 20;
        
        confetti.style.top = top + 'px';
        confetti.style.left = left + 'px';
        confetti.style.opacity = opacity;
        confetti.style.transform = `rotate(${rotation}deg)`;
        
        if (top > window.innerHeight || opacity <= 0) {
            clearInterval(interval);
            confetti.remove();
        }
    }, 30);
}

// إضافة تأثير الحب العائم
function createFloatingHearts() {
    const container = document.body;
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.zIndex = '1';
        heart.style.pointerEvents = 'none';
        heart.style.animation = `floatUp ${Math.random() * 5 + 5}s forwards`;
        
        container.appendChild(heart);
        
        setTimeout(() => heart.remove(), 10000);
    }, 500);
}

// إضافة CSS للرسوم المتحركة
const style = document.createElement('style');
style.textContent = `
    @keyframes spin {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(360deg); }
    }
    
    @keyframes floatUp {
        0% {
            transform: translateY(0) translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// تشغيل جميع الوظائف عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    createFloatingHearts();
    
    // إضافة صوت عند التفاعل (اختياري)
    document.body.addEventListener('click', () => {
        playClickSound();
    });
});

// تشغيل صوت خفيف عند الضغط (اختياري - قد تحتاج إلى ملف صوتي)
function playClickSound() {
    // يمكنك إضافة صوت إذا كان لديك ملف صوتي
    // const sound = new Audio('click.mp3');
    // sound.play();
}

// تزيين الصفحة مع القلوب المحركة
document.addEventListener('scroll', () => {
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        const scrollPosition = window.scrollY;
        heart.style.transform = `translateY(${scrollPosition * 0.1 * (index + 1)}px)`;
    });
});

// إضافة تفاعل إضافي عند تمرير الماوس على البطاقات
document.querySelectorAll('.symbol-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) translateY(-15px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// تحديث الرسالة الديناميكية
function updateMessage() {
    const messages = [
        ' فاكره اول يوم خت حسابك تيك توك 💕',
        '  فاكره لما كونت طاير من فرحه اول م شوفت صورتك  ❤️',
        ' انا كونت بطير بجد من فرحه ي جودي لما شوفت ف واقع  💖',
        ' كونت زعلان ان سبتك ي جودي  ومروح   💝',
        ' انا بحبك اوي ي جودي   ✨'
    ];
    
    // يمكن استخدام هذه الرسائل في تأثيرات إضافية
    return messages[Math.floor(Math.random() * messages.length)];
}

// شريط الأفلام الديناميكي
window.addEventListener('load', () => {
    const filmStrips = document.querySelectorAll('.film-strip-top, .film-strip-bottom');
    filmStrips.forEach(strip => {
        let position = 0;
        setInterval(() => {
            position += 2;
            if (position > 100) position = 0;
            strip.style.backgroundPosition = position + '% 0';
        }, 30);
    });
});
