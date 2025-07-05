/* 来源: Gemini 2.5 Pro, 提示词: "创建 record.js，处理记录表单的提交事件，将数据保存到 localStorage，并给出成功提示。", 范围: "website/js/record.js, all lines" */
document.addEventListener('DOMContentLoaded', () => {
    // 设置日期输入框的默认值为今天
    const dateInput = document.getElementById('record-date');
    if(dateInput) {
        dateInput.valueAsDate = new Date();
    }

    const recordForm = document.getElementById('record-form');
    if (recordForm) {
        recordForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // 1. 获取表单数据
            const activityType = document.getElementById('activity-type').value;
            const duration = document.getElementById('duration').value;
            const calories = document.getElementById('calories').value;
            const recordDate = document.getElementById('record-date').value;

            if (!activityType || !duration || !calories || !recordDate) {
                alert('请填写所有字段！');
                return;
            }

            const newRecord = {
                id: Date.now(), // 使用时间戳作为唯一ID
                activity: activityType,
                duration: parseInt(duration),
                calories: parseInt(calories),
                date: recordDate,
            };

            // 2. 从localStorage获取现有记录
            // 如果没有记录，则初始化为空数组
            const records = JSON.parse(localStorage.getItem('fitnessRecords')) || [];

            // 3. 将新记录添加到数组
            records.push(newRecord);

            // 4. 将更新后的数组存回localStorage
            localStorage.setItem('fitnessRecords', JSON.stringify(records));

            // 5. 提示用户并清空表单
            alert('记录保存成功！');
            recordForm.reset();
            // 重置日期为今天
            dateInput.valueAsDate = new Date();
        });
    }
}); 