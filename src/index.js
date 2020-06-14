import axios from "axios";

import "./index.css";
import "./favicon.ico";

const txtName = document.getElementById("name");
const txtEmail = document.getElementById("email");
const selectIntrested = document.getElementById("response");
const txtUseCase = document.getElementById("use_case");

const submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", function () {
  const name = txtName.value;
  const email = txtEmail.value;
  const response = selectIntrested.value;
  const useCase = txtUseCase.value;

  axios.post(
    "https://hermes.useparagon.com/triggers/dcb7b8dd-cd6d-4886-bba8-770d80008c6d",
    {
      name,
      email,
      response,
      useCase,
    }
  );

  alert("Thank you for this effort.");
});
