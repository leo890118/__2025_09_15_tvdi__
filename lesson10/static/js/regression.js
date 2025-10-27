let chart = null; //圖表實體
let modelData = null; //儲存模型資料

// 頁面戴入完成後才執行
document.addEventListener('DOMContentLoaded', function(){
    loadRegressionData();
});

function loadRegressionData(){
    showLoading(true);
    fetch('/api/regression/data1')
    .then(response => {
        console.log(response)
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