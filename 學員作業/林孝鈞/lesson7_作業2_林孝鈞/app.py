from flask import Flask,render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")
@app.route("/machine")
def machine():
    return render_template("machine.html")
@app.route("/regression")
def regression():
    return render_template("regression.html")

@app.route("/knn")
def knn():
    return render_template("knn.html")
@app.route("/test")
def test():
    return render_template("test.html")

@app.route("/lesson6_1")
def lesson6_1():
    page_tile = "我的首頁Robert"
    users = [
        {"name": "小明", "is_vip": True},
        {"name": "小華", "is_vip": False},
        {"name": "小英", "is_vip": True}
    ]
    return  render_template("lesson6_1.html",title=page_tile, user_list = users)
@app.route("/decision_tree", methods=["GET", "POST"])
def decision_tree():
    is_supervised = True
    # 建立字典變數
    tree_info = {
        "algorithm": "決策樹分類器",
        "applications": ["垃圾郵件分類", "客戶流失預測", "疾病診斷"],
        "pros": ["容易理解", "不需要特徵縮放", "可視化清晰"]
    }
    feature_count = None  # 預設值

    # 處理表單提交
    if request.method == "POST":
        feature_count = request.form.get("feature_count")  # 取得表單欄位資料
        if feature_count:  # 如果有輸入
            feature_count = int(feature_count)  # 轉成整數

    # 將字典傳到模板
    return render_template(
        "decision_tree.html",
        tree_info=tree_info,
        is_supervised=is_supervised,
        feature_count=feature_count
    )

def main():
    """啟動應用（教學用：啟用 debug 模式）"""
    # 在開發環境下使用 debug=True，部署時請關閉
    app.run(debug=True)

if __name__ == "__main__":
    main()