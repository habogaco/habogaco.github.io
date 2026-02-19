// 等待整个网页的DOM内容加载完毕后再执行代码
document.addEventListener('DOMContentLoaded', function() {

    // 1. 获取页面上的元素
    const changeTextBtn = document.getElementById('changeTextBtn');
    const alertBtn = document.getElementById('alertBtn');
    const demoText = document.getElementById('demoText');
    const mainTitle = document.querySelector('h1');

    // 2. 为“改变标题”按钮添加点击事件
    changeTextBtn.addEventListener('click', function() {
        // 改变标题文字和颜色
        mainTitle.textContent = '标题已被改变！';
        mainTitle.style.color = '#e74c3c';

        // 改变下方演示文本
        demoText.textContent = '你刚刚点击了按钮！';
        demoText.style.fontWeight = 'bold';
        demoText.style.color = '#27ae60';

        // 3秒后恢复原状
        setTimeout(function() {
            mainTitle.textContent = '欢迎来到我的小站！';
            mainTitle.style.color = '';
            demoText.textContent = '这是一个会变化的文本。';
            demoText.style.fontWeight = '';
            demoText.style.color = '';
        }, 3000);
    });

    // 3. 为“打招呼”按钮添加点击事件
    alertBtn.addEventListener('click', function() {
        alert('你好！欢迎你，未来的开发者！');
    });

    // 4. 额外的效果：当鼠标移到技能列表项上时，背景色变化
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e3f2fd';
        });
        item.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f8f9fa';
        });
    });

    console.log('网页脚本加载完毕！');
});