Feature: RunApi

   @logintest
 Scenario Outline: MarkTransactionForReview
     Given I run an api "<api>" and i get the value of the field batchId
     
        Examples:
             | api                                                                                  |
             | https://virtserver.swaggerhub.com/atlantics/plateFinderQueue/1.0.0/markTrxsForReview |  


 Scenario Outline: FetchNewestRecordsByTransactionID
   Given I run an api "<api>" and i fetch newest record by transaction ID
   
        Examples:
            | api                                                                                  |
            | https://virtserver.swaggerhub.com/atlantics/plateFinderQueue/1.0.0/fetchNewestRecordByTrxId |  
           


Scenario:InsertNewTransaction
         Given The user run an API "<api>" wich create a new transaction
       

        Examples:
                 | api |
                 | https://virtserver.swaggerhub.com/atlantics/plateFinderQueue/1.0.0/fetchNewestRecordByTrxId|

Scenario:ReservesTransactions
         Given The user run an API "<api>" wich reserves a transaction
       

        Examples:
                 | api |
                 | https://virtserver.swaggerhub.com/atlantics/plateFinderQueue/1.0.0/markTrxsForReview|


