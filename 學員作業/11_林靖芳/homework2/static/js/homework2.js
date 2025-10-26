document.addEventListener('DOMContentLoaded', function () {
    // 選取元素
    const toggleButton = document.querySelector('.toggle-button');
    const answerContent = document.querySelector('.answer-content');

    // 檢查元素是否存在
    if (!toggleButton || !answerContent) {
        console.warn('無法找到必要的 DOM 元素。');
        return;
    }

    // 綁定事件
    toggleButton.addEventListener('click', function () {
        const isVisible = answerContent.classList.toggle('visible');

    });
});