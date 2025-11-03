from flask import Blueprint,render_template,jsonify,request
from sklearn.datasets import load_iris

knn_bp = Blueprint(
    'knn',
    __name__,
    url_prefix='/knn',
    template_folder='../templates',
    static_folder='../static'
)

@knn_bp.route('/knn_index')
def knn_index():
    return render_template('knn.html')

@knn_bp.route('/api/data')
def knn_data():
    """knn 分類 API - 使用鳶尾花資料集"""
    # 載入鳶尾花資料集
    iris = load_iris()    
    X = iris.data
    y = iris.target

    # 特徵名稱翻譯為繁體中文
    feature_names_zh = ["花萼長度", "花萼寬度", "花瓣長度", "花瓣寬度"]
    target_names_zh = ["山鳶尾", "變色鳶尾", "維吉尼亞鳶尾"]

    # 取得特徵索引（預設使用花瓣長度和花瓣寬度）
    feature_x = int(request.args.get('feature_x',2))
    feature_y = int(request.args.get('feature_y', 3))
    k_neighbors = int(request.args.get('k',5))


    #驗證參數
    if feature_x < 0 or feature_x >= X.shape[1]:
        feature_x = 2
    
    if feature_y < 0 or feature_y >= X.shape[1]:
        feature_y = 3

    if k_neighbors < 1 or k_neighbors > 20:
        k_neighbors = 5

    
    
    

    return jsonify(
        {
            'success': True
        }
    )