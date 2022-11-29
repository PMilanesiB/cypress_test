import {
  Given,
  When,
  And,
  Then,
} from "@badeball/cypress-cucumber-preprocessor"
import api_store from "./api_store.js"




//Me logueo y extraigo el token
Given('The user run an API {string} whit the email {string} and the password {string}', (api, email, password) => {
  api_store.api(api, email, password)
  
})

Given('I run an api {string} and i get the value of the field batchId', (api) => {
  api_store.markTrxs_FetchReservedTrxs(api)

})

Given('I run an api {string} and i fetch newest record by transaction ID', (api) => {
  api_store.fetchNewestRecordByTrxId(api)

})


Given('The user run an API {string} wich create a new transaction', (api) => {
  api_store.insertNewTransaction(api)
})
//
Given('The user run an API {string} wich reserves a transaction', (api) => {
  api_store.reservesTransaction(api)
})