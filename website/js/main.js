/* 来源: Gemini 2.5 Pro, 提示词: "创建 main.js，检查登录状态，未登录则跳转回 login.html；已登录则显示欢迎信息，并实现退出登录功能。", 范围: "website/js/main.js, all lines" */
document.addEventListener('DOMContentLoaded', function() {
    // 检查登录状态
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        // 如果未登录，跳转到登录页面
        window.location.href = 'login.html';
        return; // 阻止后续代码执行
    }

    // 显示欢迎信息
    const username = localStorage.getItem('username');
    const welcomeMessage = document.getElementById('welcome-message');
    if (username) {
        welcomeMessage.textContent = `欢迎, ${username}`;
    }

    // 退出登录
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            // 清除登录状态
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            // 跳转回登录页
            window.location.href = 'login.html';
        });
    }
}); 