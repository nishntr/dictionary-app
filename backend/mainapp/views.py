from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import requests
import json

def index(request):
    return render(request, 'index.html')

class DictionaryView(APIView):
    
    def post(self,request):
        app_id = '95801b12'
        app_key = '7173d20766a69440a4f6cef34a422aed'
        language = 'en-gb'
        word = request.data['data']
        print(request.data)
        url = 'https://od-api.oxforddictionaries.com/api/v2/entries/'  + language + '/'  + word.lower()
        r = requests.get(url, headers = {'app_id' : app_id, 'app_key' : app_key})
        data = json.loads(r.text)
        if 'error' not in data:
            defs = data['results'][0]['lexicalEntries'][0]['entries'][0]['senses']
            # for i in range(len(defs)):
            #     print('examples' in defs[i])
            
            # meaning = []
            # examples = []
            output = []
            for i in range(len(defs)):
                m = defs[i]['definitions'][0]
                if 'examples' in defs[i]:
                    e = defs[i]['examples'][0]['text']
                    
                else:
                    e = ''
                output.append([m,e])
            context = {
                'output':output
                
            }
            
        else:
            context = {'error': 'Word is not found in the dictionary'}
        return Response(context,status=200)