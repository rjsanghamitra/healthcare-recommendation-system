from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import pandas as pd
import numpy as np
import joblib as joblib
from sklearn.model_selection import train_test_split
from .mlmodel import symptom_list
from .dummy import docs

df = pd.read_csv('static/Specialist.csv')
model = joblib.load('static/model')

def get_symptom_list(request):
    return JsonResponse({'symptoms': symptom_list})

get_result = None

def find_doctors(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        selected_symptoms = data.get('symptoms')

        n = len(df.columns)
        temp = np.array(np.zeros(n))
        for i in range(n):
            if df.columns[i].strip() in selected_symptoms:
                temp[i] = 1
        temp = temp.reshape(1, n-1)
        
        x = model.predict(temp)
        result = df['Disease'][x]

        result = docs[result]
        get_result = result

        return JsonResponse({'result': result})
    else:
        return JsonResponse({'error': 'not valid'}, status=405)

def result(request):
    return JsonResponse({'result': result})