import styled from "@emotion/styled";
import { useState } from "react";
import SelectComponent from "./SelectComponent";
import { getConvertion } from "./ConvertFunctions";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

//Input text area component
const Text = styled.textarea`
  resize: none;
  width: 550px;
  padding: 30px 30px;
  padding-bottom: 45px;
  margin: 35px 0;
  height: 220px;
  border-radius: 50px;
  vertical-align: top;
  align-self: center;
  background-color: ${({ theme }) => theme.textArea};

  font-family: "Lato", sans-serif;
  font-size: 20px;
  overflow: scroll;
  word-wrap: break-word;

  //mobile device media query
  @media screen and (max-width: 740px) {
    width: 300px;
  }
`;
//Copy text area component
const Copy = styled.textarea`
  resize: none;
  width: 400px;
  padding: 30px 30px;
  padding-bottom: 45px;
  margin: 35px 0;
  height: 450px;
  border-radius: 50px;
  vertical-align: top;
  align-self: center;

  font-family: "Lato", sans-serif;
  font-size: 20px;
  overflow: scroll;
  word-wrap: break-word;

  @media screen and (max-width: 740px) {
    width: 300px;
  }
`;
//Contains the ganimedes star logo
const GanimedesContainer = styled.div`
  position: absolute;
  top: 316px;
  right: 135px;

  height: 250px;
  width: 250px;

  //Responsive Tablet media query
  @media screen and (max-width: 1277px) {
    position: initial;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(-447px);
  }
`;
//ganimedes star logo image
const GanimedesImg = styled.img`
  width: 222px;
`;

//Contains the combo box ant the input text area
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 60px;
  transform: translateY(-40px);

  //Responsive Tablet media query
  @media screen and (max-width: 1277px) {
    transform: translateY(0px);
    padding: 60px;
  }
  @media screen and (max-width: 740px) {
    transform: translateY(0px);
    padding: 60px 0;
  }
`;
//contains the whole home page
const AppContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .copyButton {
    transform: translateY(-130px);
  }

  //Responsive Tablet media query
  @media screen and (max-width: 1277px) {
    transform: translateY(0px);
    justify-content: center;
  }
`;
//contains the combo box
const SelectorContainer = styled.div`
  width: 370px;
`;

const TextArea = (props) => {
  const [value, setValue] = useState("");
  const [copyvalue, setCopyvalue] = useState("");
  const [selection, setSelection] = useState("");
  const [dialog, setDialog] = useState(false);

  const convertValue = (event) => {
    let convertion = getConvertion(selection, value);
    setCopyvalue(convertion);
  };

  return (
    <AppContainer>
      {
        //App container contains the whole app
      }
      <FormContainer>
        {
          //opens a dialog screen if there's an error
        }
        <Dialog open={dialog}>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Atención
          </DialogTitle>
          <DialogContent>
            <p>Selecciona una opcion e ingresa el valor antes de continuar</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialog(false)}>Cerrar</Button>
          </DialogActions>
        </Dialog>
        {
          // SelectorContainer Contains the combo box selector
        }
        <SelectorContainer>
          <SelectComponent setSelection={setSelection} variant="error" />
        </SelectorContainer>
        {
          // Text is the input area component
        }
        <Text
          className="textArea"
          required
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Ingresa el texto aquí"
        />
        {
          //This button allows the convertion feature using the onClick event
        }
        <Button
          variant="outlined"
          size="large"
          onClick={(e) => {
            selection.length === 0 || value === ""
              ? setDialog(true)
              : convertValue(e);
          }}
        >
          Convertir
        </Button>
      </FormContainer>
      <div className="container">
        {
          //The area where the result displays
        }
        <Copy disabled value={copyvalue} className="textArea"></Copy>
        {
          //if the copy area is empty, it is displayed an image instead the copy button
          copyvalue.length === 0 ? (
            <GanimedesContainer>
              <GanimedesImg src="/img/ganimedes-star.png" />
            </GanimedesContainer>
          ) : (
            //allows to copy the result text from the copy text area
            <Button
              size="large"
              variant="outlined"
              className="copyButton"
              onClick={(e) => {
                navigator.clipboard.writeText(copyvalue);
              }}
            >
              Copiar Texto
            </Button>
          )
        }
      </div>
    </AppContainer>
  );
};

export default TextArea;
