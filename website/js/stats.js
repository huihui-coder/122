/* 来源: Gemini 2.5 Pro, 提示词: "创建 stats.js，从 localStorage 加载并显示健身记录，计算并展示统计摘要，并实现删除记录的功能。", 范围: "website/js/stats.js, all lines" */
document.addEventListener('DOMContentLoaded', () => {
    const recordList = document.getElementById('record-list');
    const totalCountEl = document.getElementById('total-count');
    const totalDurationEl = document.getElementById('total-duration');
    const totalCaloriesEl = document.getElementById('total-calories');

    function loadRecords() {
        // 清空现有列表和摘要
        recordList.innerHTML = '';
        totalCountEl.textContent = 0;
        totalDurationEl.textContent = 0;
        totalCaloriesEl.textContent = 0;

        const records = JSON.parse(localStorage.getItem('fitnessRecords')) || [];

        if (records.length === 0) {
            recordList.innerHTML = '<tr><td colspan="5" style="text-align:center;">暂无记录，快去添加吧！</td></tr>';
            return;
        }

        // 计算总计
        const totalDuration = records.reduce((sum, record) => sum + record.duration, 0);
        const totalCalories = records.reduce((sum, record) => sum + record.calories, 0);

        totalCountEl.textContent = records.length;
        totalDurationEl.textContent = totalDuration;
        totalCaloriesEl.textContent = totalCalories;

        // 对记录按日期进行排序（降序）
        records.sort((a, b) => new Date(b.date) - new Date(a.date));

        // 渲染每一条记录
        records.forEach(record => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${record.date}</td>
                <td>${record.activity}</td>
                <td>${record.duration}</td>
                <td>${record.calories}</td>
                <td><button class="delete-btn" data-id="${record.id}">删除</button></td>
            `;
            recordList.appendChild(row);
        });
    }

    function deleteRecord(id) {
        let records = JSON.parse(localStorage.getItem('fitnessRecords')) || [];
        records = records.filter(record => record.id !== id);
        localStorage.setItem('fitnessRecords', JSON.stringify(records));
        loadRecords(); // 重新加载列表
    }

    // 事件委托，处理删除按钮点击
    recordList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const recordId = parseInt(event.target.getAttribute('data-id'));
            if (confirm('确定要删除这条记录吗？')) {
                deleteRecord(recordId);
            }
        }
    });

    // 页面加载时执行
    loadRecords();
}); 