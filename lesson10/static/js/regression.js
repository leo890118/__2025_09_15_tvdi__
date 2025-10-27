let chart = null; //圖表實體
let modelData = null; //儲存模型資料

// 頁面戴入完成後才執行
document.addEventListener('DOMContentLoaded', function(){
    loadRegressionData();
});

function loadRegressionData(){
    showLoading(true);
    fetch('/api/regression/data')
    .then(response => {
        if(!response.ok){         
            throw new Error("網路回應有錯誤:" + response.statusText);
        }

        return response.json()

    }).then(data=>{
        console.log("完整取得資料");
        console.log(data);
    }).catch(error => {
        console.log(error);
    });
};

function showLoading(show){
  const loading = document.getElementById('loading');
  if(show){
    loading.classList.add('active');
  }else{
    loading.classList.remove('active');
  }
};