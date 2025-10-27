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
    const trainData = data.data.train.x.map((xvalue,index) => 
        ({
            x:xvalue,
            y:data.data.train.y[index]
        })
    )
    
    //準備測試資料集
    const testData = data.data.test.x.map((xvalue, index) =>
        ({
            x:xvalue,
            y:data.data.test.y[index]
        })
    )

    //準備迴歸線資料集
    const regressionLine = data.data.regression_line.x.map((xvalue, index) => 
        (
            {
                x:xvalue,
                y:data.data.regression_line.y[index]
            }
        )
    )
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