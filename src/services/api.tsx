import axios from "axios";

// converterURL : {MOEDAQUEDESEJACONVERTER}_{MOEDAQUERECEBERAACONVERSAO}?token=3094|hpk8UXJIjFw1Lu4ws1TDmgGnZGPHSt4d

const api = axios.create({
  baseURL: "https://api.invertexto.com/v1/currency/",
});

export default api;
