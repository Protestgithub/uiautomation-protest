Feature: Pricing Enging Validations



      
# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: To verify that by whom service charge can be pay
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        Then Verify by whom service charge can be pay

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: To verify that to whom service charge can be provider
    Then Verify To whom service charge will be paid

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: To verify that The account types from which the service charge can be paid are the list of account types in the system
    Then Verify the Account types list


# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: To verify that slab basis would be transaction amount for both service charge and commision
    Then Verify the Slab is based on Transaction Amount for both service charge and commission
    And Click on commission
    And Click on Any service
    Then Verify the Slab is based on Transaction Amount for both service charge and commission


# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: To verify validator will access to pricing the calcultor
    And Click on Pricing Caluclator
    Then Verify admin is able to access to pricing the calculator

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: To verify there should be an option in the pricing engine for UI for pricing calculator like Sender bank name,Sender Account type, Receiver Bank Name, Receiver account type,Receiver Role, Transaction Amount, Transaction Date Time.
    Then Verify Pricing Calculator page options
# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario: To verify that When creating multiple statements for a commission rule, there is no validation and hence the payer and payee details could be entered as same.
    And Click on commission
    And Click on Any service
    Then Verify Payer and payee entered will be same

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : 
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test
Scenario: To verify the account types in commision are either the primary or commision
