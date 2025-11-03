from flask import Blueprint,render_template,jsonify
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
    iris = load_iris()

    X = iris.data
    y = iris.target
    feature_names_zh = ["花萼長度", "花萼寬度", "花瓣長度", "花瓣寬度"]
    target_names_zh = ["山鳶尾", "變色鳶尾", "維吉尼亞鳶尾"]


    print(X.shape)
    print(y.shape)
    print(feature_names_zh)
    print(target_names_zh)
    

    return jsonify(
        {
            'success': True
        }
    )