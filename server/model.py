import joblib
import numpy as np

test=np.zeros((1,10))

def gender_data(g):
    if g=="male":
        test[0][0]=1
    elif g=="female":
        test[0][0]=0
    else:
        test[0][0]=0
        
def marital_data(m):
    if m=="Yes":
        test[0][1]=1
    else:
        test[0][1]=0
    
def education_data(e):
    if e=="Graduate":
        test[0][2]=0
    else:
        test[0][2]=1

def employment(em):
    if em=="Yes":
        test[0][3]=1
    else:
        test[0][3]=0
        
def property_area(p):
    if p=="Urban":
        test[0][9]=2
    if p=="Rural":
        test[0][9]=0
    else:
        test[0][9]=1
    

def convert_data(details):
    
    gender_data(details["gender"])
    marital_data(details["married"])
    education_data(details["education"])
    employment(details["employed"])
    property_area(details["property"])
    print(details["income"])
    test[0][4]=details["income"]
    test[0][5]=details["coIncome"]
    test[0][6]=details["amount"]
    test[0][7]=details["term"]
    test[0][8]=details["credHist"]
    
    return test
    
    
    
    
    #
    


