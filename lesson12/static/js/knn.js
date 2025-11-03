
let currentK = 5;
let modelData = null;
let targetNames = null;
let featureNames = null;
let chart = null;

// 類別顏色配置
const classColors =[
    {bg: 'rgba(255, 99, 132, 0.6)', border: 'rgba(255, 99, 132, 1)'},
    {bg: 'rgba(54, 162, 235, 0.6)', border: 'rgba(54, 162, 235, 1)'},
    {bg: 'rgba(75, 192, 192, 0.6)', border: 'rgba(75, 192, 192, 1)'},
]

// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded',function(){
    // 固定使用花瓣長度(2)和花瓣寬度(3)
    loadKnnData()
})

async function loadKnnData(){
    showLoading(true);
    try{
        const url = `/knn/api/data?k=${currentK}&feature_x=2&feature_y=3`
        const response = await fetch(url)
        const data = await response.json()
        if(data.success){
            modelData = data
            targetNames = data.target_names
            featureNames = data.feature_names

            // 繪制圖表
            renderChart(data)
        }else{
            showError(data.error)
        }
    }catch(error){
        showError(error.message)
    }finally{
        showLoading(false)
    }
    
}

// 繪制圖表

function renderChart(data){
    //取得canvas的context
    const ctx = document.getElementById("knnChart").getContext('2d')


    //如果圖表已經存在,先銷毀
    if(chart){
        chart.destroy()
    }

    // 準備資料集 - 按類別分組
    const datasets = []
    const numClasses = data.target_names.length
    
    
    
    for(let classIdx=0; classIdx < numClasses; classIdx++){
        
        const trainDataForClass = data.data.train.x.map((x,i)=>({
            x: x,
            y: data.data.train.y[i],
            label: data.data.train.labels[i]
        })).filter(point => point.label == classIdx)
        
        
        if(trainDataForClass.length > 0){
            datasets.push({
                label:`${data.target_names[classIdx]}(訓練)`,
                data: trainDataForClass,
                backgroundColor: classColors[classIdx].bg,
                borderColor:classColors[classIdx].border,
                pointRadius: 6,
                pointHoverRadius: 9,
                pointStyle: 'circle',
                borderWidth:2
            })
        }
        
    }

    console.table(datasets)
}

// 顯示/隱藏載入狀態
function showLoading(show){
    const loading = document.getElementById('loading');
    if(show){
        loading.classList.add('active')
    }else{
        loading.classList.remove('active')
    }
}

// 顯示錯誤訊息
function showError(message){
    alert('錯誤:' + message)
    console.error(message)
}