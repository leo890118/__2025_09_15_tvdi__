let chart = null; //圖表實體
let modelData = null; //儲存模型資料

// 頁面戴入完成後才執行
document.addEventListener('DOMContentLoaded', function(){
    loadRegressionData();
});

async function loadRegressionData(){
    showLoading(true);
    try{
        const response = await fetch('/api/regression/data1')
        if(!response.ok){
            throw new Error(`網路出現問題:${response.statusText}`)
        }
        const data = await response.json()

        if(!data.success){
            throw new Error(`解析josn失敗`);
        }            
        
        console.log("下載成功")
        modelData = data
    }catch(error){
        console.log(error)
    }finally{
        showLoading(false);
    }
    
};

function showLoading(show){
  const loading = document.getElementById('loading');
  if(show){
    loading.classList.add('active');
  }else{
    loading.classList.remove('active');
  }
};