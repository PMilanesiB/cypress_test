Feature: login 

    Feature Login page will work depending on the user credentials.


 Scenario Outline:
        Given The user run an API "<api>" whit the email "<email>" and the password "<password>"
      
       

        Examples:
             | api                                    |email                        |password       |
             | https://api-qualis.rmbl.live/logi      |rioseconicolas3@gmail.com    |  prueba1      |
            #| https://api-qualis.rmbl.live/register  |rioseconicolas3@gmail.com    |  prueba1      |
            #| https://api-qualis.rmbl.live/login     |carlitos@lalala              |  prueba1      |
            #| https://api-qualis.rmbl.live/login     |rioseconicolas3@gmail.com    |  prueba2      |

             
      
    

        

        