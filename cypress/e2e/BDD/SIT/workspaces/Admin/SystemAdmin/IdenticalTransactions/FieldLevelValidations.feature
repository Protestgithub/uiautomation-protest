Feature: Identical Transaction critition Field level validation

                                                                                                                   
# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :976
#TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

     Scenario:TC_976 To verify that user able to click on submit button
     Given Login into Mobiquity Portal as System admin Maker
     When Click on identical transaction
     And Click on service type drop down
     And Click on submit button



#Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :979
#TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

   Scenario:TC_979 To verify that payer Id must be preselected
   When Click on identical transaction 
   And Click on service type drop down
   And Click on submit button
   And assert payer id type

#Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :978
#TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test



Scenario:TC_978 To verify that After selection of service options must displayed like payee ID, payer ID, Transaction amount, payer provider, payee provider, payer wallet ID, payee wallet IDGiven 
     When Click on identical transaction
     And Click on service type drop down
     And Click on submit button

#Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :980
#TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test
   

   Scenario:TC_980 To verify that payee ID must be preselected
    When Click on identical transaction 
    And Click on service type drop down
    And Click on submit button
    And assert payee ID



#Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :982
#TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

     Scenario:TC_982  To verify that Transaction amount, Currency,payee wallet Id and payer wallet Id  must be blank
     When Click on identical transaction 
     And Click on service type drop down
     And Click on submit button

#Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :992
#TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test



   Scenario:TC_992 To verify that user able to select payee wallet ID for identical transaction
   When Click on identical transaction 
   And Click on service type drop down
   And Click on submit button
   And Click on check box of Payee wallet ID


#Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :991
#TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test




    Scenario:TC_991 To verify that user able to select payer wallet ID for identical transaction
    When Click on identical transaction 
    And Click on service type drop down
    Then  Click on submit button
    And Click on check box of Payer wallet ID

#Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :990
#TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test


    Scenario:TC_990 To verify that user able to select currency for identical transaction
    When Click on identical transaction 
    And Click on service type drop down
    Then  Click on submit button
    And Clcik on check box of currency

#Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :989
#TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test

     Scenario:TC_989 To verify that user able to select the transaction ammount for identical transaction
     When Click on identical transaction 
     And Click on service type drop down
     Then  Click on submit button
     And  Click on check box of transaction ammount

