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
        if(response.ok){
            console.log("已經下載完成");
            response.json().then(data=>{
                console.log(data)
            }).catch(error=>{
                console.log(error)
            })
        }
    }).catch(error => {
        console.log(error)
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