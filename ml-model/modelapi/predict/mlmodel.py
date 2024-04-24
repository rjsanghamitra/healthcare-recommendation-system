import pandas as pd
import numpy as np
from sklearn import metrics
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from django.conf import settings
import os
import joblib as joblib

df = pd.read_csv("static/Specialist.csv")

temp = []

for i in df.columns:
    temp.append((np.count_nonzero(df[i]), i))
temp.pop(0)
temp.pop(-1)
temp.sort(reverse=True)

symptom_list = []
for i in temp:
    symptom_list.append(i[1])