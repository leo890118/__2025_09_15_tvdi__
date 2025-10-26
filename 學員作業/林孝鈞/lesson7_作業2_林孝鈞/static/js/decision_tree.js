document.querySelector('.container>div>.card-body>.nav-toggle-decision_tree').addEventListener('click', function () {
  // 選取要一起切換的元素（可以同時選多個 class）
  document.querySelectorAll('.container>div>.card-body>.show').forEach(function (el) {
    el.classList.toggle('none');
  });
});


document.getElementById("featureForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // ❌ 阻止整頁刷新

    const formData = new FormData(this);

    // 發送非同步請求給 Flask
    const response = await fetch("/decision_tree", {
        method: "POST",
        body: formData
    });

    // 從後端取得 JSON 回應
    const data = await response.json();

    // 更新結果區塊
    document.getElementById("result").innerHTML = `
        <div class="alert alert-success">
            您輸入的特徵數量為：${data.feature_count}
        </div>
    `;
});


// .container>div>.card-body>.nav-toggle{}