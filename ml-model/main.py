import pandas as pd
import numpy as np
from sklearn import metrics
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import joblib as joblib

df = pd.read_csv("Specialist.csv")

x = df.iloc[:, 0:-1]
y = df.iloc[:, -1]

le = LabelEncoder()
le.fit(y)
df.iloc[:, -1] = y = le.transform(y)

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state=42)

model = joblib.load('model')

temp = []

for i in df.columns:
    temp.append((np.count_nonzero(df[i]), i))
temp.pop(0)
temp.pop(-1)
temp.sort(reverse=True)