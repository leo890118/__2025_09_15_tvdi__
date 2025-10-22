## $R^2$ (R-squared / 決定係數)
**說明：**
$R^2$（R-squared），也稱為決定係數（Coefficient of Determination）。它衡量的是模型預測的 $y$ 值（$\hat{y}$）能夠「解釋」實際 $y$ 值變異的百分比。

- $R^2$ 的值通常在 0 到 1 之間（但在某些情況下可能為負值，表示模型比單純預測平均值還要差）。
- $R^2 = 1$：表示模型完美預測，所有 $y$ 值的變異都能被 $\hat{y}$ 解釋。
- $R^2 = 0$：表示模型等同於只預測 $y$ 值的平均數（基準模型）。
- $R^2$ 越接近 1，表示模型的解釋能力越強。

**計算輸入（參數）：**
| 輸入 | 中文說明 | 資料類型 |
| :--: | :--: | :--: |
| $y\_true$  | 實際的真實目標值 | 陣列 |
| $y\_pred$  | 模型預測的目標值 | 陣列 |

**傳出值（Return Value）：**
| 輸入 | 中文說明 | 資料類型 |
| :--: | :--: | :--: |
| $R^2$ 分數  | 決定係數的值 | 浮點數 |

**教學範例：**
```python=
import numpy as np
from sklearn.metrics import r2_score

# 假設這是真實的 Y 值
y_true = np.array([3, -0.5, 2, 7])

# 假設這是模型預測的 Y 值
y_pred = np.array([2.5, 0.0, 2, 8])

# 計算 R2 分數
r2 = r2_score(y_true, y_pred)

print(f"真實 Y 值: {y_true}")
print(f"預測 Y 值: {y_pred}")
print(f"R-squared (R2) 分數: {r2:.4f}")

# 範例 2: 預測很差
y_pred_bad = np.array([5, 1, 0, 5])
r2_bad = r2_score(y_true, y_pred_bad)
print(f"\n較差的 R2 分數: {r2_bad:.4f}")
```

  
## MSE (Mean Squared Error / 均方誤差)
**說明：**
MSE (Mean Squared Error) 是迴歸模型中最常用的損失函數（Loss Function）和評估指標之一。它計算的是「預測值與真實值之間誤差的平方」的平均值。

- 公式為：$MSE = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$
- MSE 的值 $\ge 0$。
- 值越小，表示模型的預測越接近真實值，模型效能越好。
- 由於它使用了「平方」，因此 MSE 對於「離群值」（Outliers）或較大的誤差非常敏感，會給予較大的權重（懲罰）。

**計算輸入（參數）：**
| 輸入 | 中文說明 | 資料類型 |
| :--: | :--: | :--: |
| $y\_true$  | 實際的真實目標值 | 陣列 |
| $y\_pred$  | 模型預測的目標值 | 陣列 |

**傳出值（Return Value）：**
| 輸入 | 中文說明 | 資料類型 |
| :--: | :--: | :--: |
| MSE 分數  | 均方誤差的值 | 浮點數 |

**教學範例：**
```python=
import numpy as np
from sklearn.metrics import mean_squared_error

# 假設這是真實的 Y 值
y_true = np.array([3, -0.5, 2, 7])

# 假設這是模型預測的 Y 值
y_pred = np.array([2.5, 0.0, 2, 8])

# 計算 MSE
# 誤差: (3-2.5)=0.5, (-0.5-0.0)=-0.5, (2-2)=0, (7-8)=-1
# 平方誤差: 0.25, 0.25, 0, 1
# 平均: (0.25 + 0.25 + 0 + 1) / 4 = 1.5 / 4 = 0.375
mse = mean_squared_error(y_true, y_pred)

print(f"真實 Y 值: {y_true}")
print(f"預測 Y 值: {y_pred}")
print(f"均方誤差 (MSE): {mse:.4f}")
```


## RMSE (Root Mean Squared Error / 均方根誤差)
**說明：**
RMSE (Root Mean Squared Error) 其實就是 MSE 的「平方根」。
- 公式為：$RMSE = \sqrt{MSE} = \sqrt{\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2}$
- RMSE 的值 $\ge 0$。
- 值越小，模型效能越好。
- RMSE 最大的優點是：它的單位與 $y$ 值（目標變數）的單位相同。例如，如果 $y$ 是房價（單位：萬元），那麼 RMSE 算出來的單位也是「萬元」。這使得 RMSE 比 MSE 更容易直觀地解釋模型的誤差有多大。
- 與 MSE 一樣，RMSE 同樣對離群值很敏感。

**計算輸入（參數）：**
| 輸入 | 中文說明 | 資料類型 |
| :--: | :--: | :--: |
| $y\_true$  | 實際的真實目標值 | 陣列 |
| $y\_pred$  | 模型預測的目標值 | 陣列 |

**傳出值（Return Value）：**
| 輸入 | 中文說明 | 資料類型 |
| :--: | :--: | :--: |
| RMSE 分數  | 均方根誤差的值 | 浮點數 |

**教學範例：**
```python=
import numpy as np
from sklearn.metrics import mean_squared_error

# 假設這是真實的 Y 值
y_true = np.array([3, -0.5, 2, 7])

# 假設這是模型預測的 Y 值
y_pred = np.array([2.5, 0.0, 2, 8])

# 計算 MSE
mse = mean_squared_error(y_true, y_pred) # 承上例，mse = 0.375

# 計算 RMSE (MSE 開根號)
rmse = np.sqrt(mse) 
# 或者在 scikit-learn 0.22+ 版本中，可以直接設置:
# rmse_v2 = mean_squared_error(y_true, y_pred, squared=False)

print(f"真實 Y 值: {y_true}")
print(f"預測 Y 值: {y_pred}")
print(f"均方誤差 (MSE): {mse:.4f}")
print(f"均方根誤差 (RMSE): {rmse:.4f}")
# print(f"RMSE (使用 squared=False): {rmse_v2:.4f}")
```

