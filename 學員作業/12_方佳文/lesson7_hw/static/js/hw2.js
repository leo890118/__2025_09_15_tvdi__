/* 作業2：
    1.選取元素：
        - 選取 class 為 toggle-button 的按鈕元素。
        - 選取 class 為 answer-content 的答案區塊元素。
    2. 綁定事件：
        - 為「顯示答案」按鈕添加一個 click (點擊) 事件的監聽器。
    3. 執行功能：
        - 當使用者點擊該按鈕時，請在 answer-content 這個 div 元素上切換 (toggle) 一個名為 visible 的 CSS class。
        - 提示：使用 classList.toggle() 方法。
*/

document.addEventListener('DOMContentLoaded', function () {
    // 取得DOM- 顯示答案按鈕
    const toggleButton = document.querySelector('.toggle-button');
    // 取得DOM- 顯示答案區塊
    const answerContent = document.querySelector('.answer-content');

    // 新增click事件
    if (toggleButton && answerContent) {
        toggleButton.addEventListener('click', function () {
            // 點擊時，「顯示答案區塊」切換加入class「visible」
            answerContent.classList.toggle('visible');
        });
    }
});