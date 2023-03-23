import React from "react";
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  InputLabel,
  Typography,
  Container,
  Button,
  Alert,
  Snackbar
} from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { StatusContext } from "../hooks/contextAPI";
import StatusModal from "./StatusModal";

const Form = () => {
 
  const { state,dispatch } = useContext(StatusContext);
  console.log()
  const [data, setData] = useState({});
  const [open, setOpen] = useState();
  const handleClose = () => setOpen(false);
const [alert,setAlert]=useState()

const handleOpen = () => setOpen(true);
  const onChangeData = (e) => {
    setData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try{
    const res = await fetch("http://127.0.0.1:8000/check-loan_status", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((e) => console.log(e));
    
   dispatch({ type: res.c });
   handleOpen()
    
}catch(e){
    setAlert(true)
}

  };

  const alertClose=()=>setAlert(false)
  return (
    <>
      <form
        style={{ width: "100vw", marginTop: "10px" }}
        onSubmit={handleSubmit}
      >
        <Container
          display="flex"
          padding="10px"
          sx={{
            boxShadow: "1px 1px 3px #848482",
            borderRadius: "5px",
            "&:hover": {
              boxShadow: "2px 2px 5px #848482",
            },
          }}
        >
          <Typography
            style={{ textAlign: "center", padding: "15px" }}
            variant="h5"
            color="secondary"
          >
            Enter Details
          </Typography>

          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            columnSpacing={10}
            rowSpacing={2}
          >
            <Grid
              item
              md={5}
              xs={10}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <InputLabel htmlFor="gender">Gender</InputLabel>
              <RadioGroup
                row
                type="text"
                name="gender"
                value={data.gender}
                required
                onChange={onChangeData}
                id="gender"
              >
                <FormControlLabel
                  value="male"
                  label="Male"
                  control={<Radio required />}
                />
                <FormControlLabel
                  value="female"
                  label="Female"
                  control={<Radio required />}
                />
                <FormControlLabel
                  value="others"
                  label="Others"
                  control={<Radio required />}
                />
              </RadioGroup>
            </Grid>
            <Grid
              item
              md={5}
              xs={10}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <InputLabel htmlFor="education">Education</InputLabel>
              <RadioGroup
                row
                name="education"
                value={data.education}
                required
                onChange={onChangeData}
                id="education"
              >
                <FormControlLabel
                  value="Graduate"
                  label="Graduate"
                  control={<Radio required />}
                />
                <FormControlLabel
                  value="Non Graduate"
                  label="Non Graduate"
                  control={<Radio required />}
                />
              </RadioGroup>
            </Grid>
            <Grid
              item
              md={5}
              xs={10}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <InputLabel id="employed">Self Employed</InputLabel>
              <RadioGroup
                row
                name="employed"
                value={data.employed}
                required
                onChange={onChangeData}
                id="employed"
              >
                <FormControlLabel
                  value="Yes"
                  label="Yes"
                  control={<Radio required />}
                />
                <FormControlLabel
                  value="No"
                  label="No"
                  control={<Radio required />}
                />
              </RadioGroup>
            </Grid>
            <Grid
              item
              md={5}
              xs={10}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <InputLabel htmlFor="married">Marital Status</InputLabel>
              <RadioGroup
                row
                name="married"
                id="married"
                value={data.married}
                required
                onChange={onChangeData}
              >
                <FormControlLabel
                  value="Yes"
                  label="Married"
                  control={<Radio required />}
                />
                <FormControlLabel
                  value="No"
                  label="Unmarried"
                  control={<Radio required />}
                />
              </RadioGroup>
            </Grid>
            <Grid
              item
              md={5}
              xs={10}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <InputLabel htmlFor="income">Applicant Income</InputLabel>
              <TextField
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                name="income"
                value={data.income}
                required
                onChange={onChangeData}
                id="income"
              />
            </Grid>
            <Grid
              item
              md={5}
              xs={10}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <InputLabel htmlFor="coIncome">CoApplicant Income</InputLabel>
              <TextField
                type="number"
                name="coIncome"
                InputProps={{ inputProps: { min: 0 } }}
                value={data.coIncome}
                required
                onChange={onChangeData}
                id="coIncome"
                fullWidth
              />
            </Grid>
            <Grid
              item
              md={5}
              xs={10}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <InputLabel htmlFor="amount">Loan Amount</InputLabel>
              <TextField
                type="number"
                name="amount"
                id="amount"
                InputProps={{ inputProps: { min: 0 } }}
                value={data.amount}
                required
                onChange={onChangeData}
                fullWidth
              />
            </Grid>
            <Grid
              item
              md={5}
              xs={10}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <InputLabel htmlFor="term">Term</InputLabel>
              <TextField
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
                name="term"
                value={data.term}
                required
                onChange={onChangeData}
                id="term"
                fullWidth
              />
            </Grid>
            <Grid
              item
              md={5}
              xs={10}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <InputLabel>Credit History</InputLabel>
              <RadioGroup
                name="credHist"
                value={data.credHist}
                required
                onChange={onChangeData}
                row
              >
                <FormControlLabel
                  value={1}
                  label="Good"
                  control={<Radio required />}
                />
                <FormControlLabel
                  value={0}
                  label="Bad"
                  control={<Radio required />}
                />
              </RadioGroup>
            </Grid>

            <Grid
              item
              md={5}
              xs={10}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <InputLabel htmlFor="property">Property Type</InputLabel>
              <RadioGroup
                row
                name="property"
                value={data.property}
                required
                onChange={onChangeData}
              >
                <FormControlLabel
                  value={"Urban"}
                  label="Urban"
                  control={<Radio required />}
                />
                <FormControlLabel
                  value={"Rural"}
                  label="Rural"
                  control={<Radio required />}
                />
                <FormControlLabel
                  value={"Semi Urban"}
                  label="Semi Urban"
                  control={<Radio required />}
                />
              </RadioGroup>
            </Grid>
            <Grid item md={10} xs={10} marginBottom="20px">
              <Button fullWidth variant="contained" type="submit" color="secondary">
                Check Status
              </Button>
            </Grid>
          </Grid>
        </Container>
      </form>
      <StatusModal open={open} state={state} handleClose={handleClose}/>
     {alert &&  <Snackbar open={alert} autoHideDuration={6000} onClose={alertClose}  anchorOrigin={{ vertical:"top" ,horizontal:"right" }}>
  <Alert onClose={alertClose} severity="error" sx={{ width: '100%' }}>
    Something went wrong!!! <br/>
    Please try again .
  </Alert></Snackbar>}


    </>
  );
};

export default Form;
