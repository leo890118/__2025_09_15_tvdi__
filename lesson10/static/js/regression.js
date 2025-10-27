let chart = null; //圖表實體
let modelData = null; //儲存模型資料

// 頁面戴入完成後才執行
document.addEventListener('DOMContentLoaded', function(){
    loadRegressionData();
});

async function loadRegressionData(){
    showLoading(true);
    try{
        const response = await fetch('/api/regression/data')
        if(!response.ok){
            throw new Error(`網路出現問題:${response.statusText}`)
        }
        const data = await response.json()

        if(!data.success){
            throw new Error(`解析josn失敗`);
        }            
        modelData = data
        
        // 繪制圖表
        renderChart(data)

    }catch(error){
        showError(error.message);
    }finally{
        showLoading(false);
    }
    
};

function renderChart(data){
    const ctx = document.getElementById('regressionChart').getContext('2d')

    // 如果圖表已經存在,先銷毀
    if(chart){
        chart.destroy();
    }

    //準備訓練資料集
    console.log(data.data.train.x.map(function(xvalue){
        return {x:xvalue}
    })[0])
}

function showLoading(show){
  const loading = document.getElementById('loading');
  if(show){
    loading.classList.add('active');
  }else{
    loading.classList.remove('active');
  }
};

function showError(message){
    alert('錯誤:' + message);
    console.log(message)
}