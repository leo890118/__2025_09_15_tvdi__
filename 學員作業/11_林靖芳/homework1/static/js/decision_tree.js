document.addEventListener('DOMContentLoaded', function () {
    // 取得 canvas 元素
    const canvas = document.getElementById('treeCanvas');
    const ctx = canvas.getContext('2d');

    // 設定基本樣式
    ctx.font = '8px Arial';
    ctx.textAlign = 'center';

    // 繪製決策樹節點
    function drawNode(x, y, text, isFeature = true) {
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fillStyle = isFeature ? '#4CAF50' : '#2196F3';
        ctx.fill();
        ctx.fillStyle = 'white';
        ctx.fillText(text, x, y + 5);
    }

    // 繪製連接線
    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = '#666';
        ctx.stroke();
    }

    // 繪製決策樹結構
    function drawTree() {
        // 根節點
        drawNode(300, 50, '年齡 > 30?');

        // 左側分支
        drawLine(275, 75, 200, 125);
        drawNode(200, 150, '收入 > 5萬?');
        drawLine(175, 175, 100, 225);
        drawNode(100, 250, '通過', false);
        drawLine(225, 175, 300, 225);
        drawNode(300, 250, '拒絕', false);

        // 右側分支
        drawLine(325, 75, 400, 125);
        drawNode(400, 150, '職業經驗 > 5年?');
        drawLine(375, 175, 400, 225);
        drawNode(400, 250, '通過', false);
        drawLine(425, 175, 500, 225);
        drawNode(500, 250, '拒絕', false);

        // 加入判斷條件文字
        ctx.fillStyle = '#333';
        ctx.fillText('是', 250, 100);
        ctx.fillText('否', 350, 100);
        ctx.fillText('是', 150, 200);
        ctx.fillText('否', 250, 200);
        ctx.fillText('是', 375, 200);
        ctx.fillText('否', 475, 200);
    }

    // 執行繪製
    drawTree();
});