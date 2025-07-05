/* 来源: Gemini 2.5 Pro, 提示词: "修改 login.js，实现固定账号密码（admin/123456）验证。", 范围: "website/js/login.js, all lines" */
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // 检查账号和密码是否为 admin/123456
    if (username === 'admin' && password === '123456') {
        // 登录成功，存储一个简单的登录状态
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);

        // 跳转到主页
        window.location.href = 'index.html';
    } else {
        alert('账号或密码错误！');
    }
}); 