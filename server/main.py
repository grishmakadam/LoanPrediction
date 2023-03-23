from fastapi import FastAPI
from fastapi.responses import JSONResponse
from typing import Dict
from model import convert_data
import sklearn
import joblib
from starlette.middleware.cors import CORSMiddleware
app=FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

clf=joblib.load("model.joblib")

@app.post("/check-loan_status")
def get_data(details: Dict):
    try:
        print(details)
        test_data=convert_data(details)
        
        test=clf.predict(test_data)
        print(test[0])
        return JSONResponse({"c":str(test[0])},200)
    except:
        raise Exception

        return JSONResponse("something went wrong",500)
    
    
    
@app.get("/test")
def print_hello():

    return JSONResponse({"name":"HEllo world"},200)

# {
#     "gender":"male",
#     "married":"Yes",
#     "education":"Graduate",
#     "employed":"Yes",
#     "income":4567,
#     "coIncome":4562,
#     "amount":240,
#     "term":360,
#     "credHist":1,
#     "property":"Urban"
    
    
# }
