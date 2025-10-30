// 頁面載入完成後執行
document.addEventListener('DOMContentLoaded',function(){
    // 固定使用花瓣長度(2)和花瓣寬度(3)
    loadKnnData()
})

function loadKnnData(){
    showLoading(true);
}

function showLoading(show){
    const loading = document.getElementById('loading');
    if(show){
        loading.classList.add('active')
    }else{
        loading.classList.remove('active')
    }
}