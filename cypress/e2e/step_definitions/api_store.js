
class api_store {


  insertNewTransaction(api,) {
    cy.api('POST', api, {
      "transactionId": 29865
    }).then((response) => {
      let trxStatus = response.body.transaction.transactionStatus
      cy.log('The transaction status is ' + trxStatus)
    })
  }

  reservesTransaction(api,) {
    cy.api('POST', api,
      {
        "transactionType": 1,
        "transactionStatus": 10,
        "reviewLevel": 1,
        "locationId": 33,
        "numToSelect": 10
      }).then((response) => {
        let batchId = response.body.batchId
        cy.log('The value of the batch ID is  ' + batchId)
      })
    }

  api(api, email, password) {

    cy.api({
      method: 'POST',
      url: api,
      failOnStatusCode: false,
      body: {
        "email": email,
        "password": password
      }

    }).then((response) => {
      let status = response.status
      let token = response.token
      cy.log('The status is ' + status)
      cy.log('The Token is ' + token)
    })
  }

   
    markTrxs_FetchReservedTrxs(api,) {
      cy.log('--------------------Runing the first API-----------------------')
      cy.api('POST', api, {
        body:{
        "transactionType": 1,
        "transactionStatus": 10,
        "reviewLevel": 1,
        "locationId": 33,
        "numToSelect": 10},

      }).then((response) => {

        let getBatchId = response.body.batchId
        let statusFirst = response.status
        cy.log('The value of the batchId is ' + getBatchId)
        cy.log('The status is ' + statusFirst)
        cy.log('The next step will be use this number to fetch reserved transactions')
        cy.log('--------------------Runing the second API-----------------------')

        cy.api('POST', "https://virtserver.swaggerhub.com/atlantics/plateFinderQueue/1.0.0/fetchReservedTrxs", {
          "batchId": getBatchId
        }).then((response) => {
          let statusSecond = response.status
          let numReserved = response.body.numReserved
          cy.log('The value of the numReserved is ' + numReserved)
          cy.log('The status is ' + statusSecond)

        })

      })

    }

    fetchNewestRecordByTrxId(api,) {
      cy.log('--------------------Runing the third API-----------------------')
      cy.api('POST', api, {
        "transactionId": 298652
      }).then((response) => {
        let statusThird = response.status
        let matchRecords = response.body.transaction.transactionId
        cy.log('The transaction number wich matches with the search is ' + matchRecords)
        cy.log('The status is ' + statusThird)
      })
    }

}


 
  

  

export default new api_store