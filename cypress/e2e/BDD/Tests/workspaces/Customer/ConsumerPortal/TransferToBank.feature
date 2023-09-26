Feature: Transfer To Bank


# Author: Kalyani
# Last Updated: 
# Comments 
# Scenario_ID :X.09_ConsumerPortal_TransferToBank_001
#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:  To verify if Transfer to bank is visible user should be able to transfer money from his wallet to his bank account 
Given Login into Consumer Portal
#TAGS
#version tags
@x.09
Scenario: To verify that Transfer to bank is visible in the subscriber feature in app
When Click on Transfer to Bank
And Enter Amount to do Transfer to Bank
#TAGS
#version tags
@x.09
Scenario:To verify that User can choose different Currency(INR/USD) while doing transfer from wallet to bank
Then Check available currencies
#TAGS
#version tags
@x.09
Scenario: To verify User should be able to select the type of wallet from which the money is debited (only 1 can be selected)
Then Check Wallets to be selected
#TAGS
#version tags
@x.09
Scenario:To verify upon selecting the currency the related bank should automatically be displayed
When Select Bank associated to user
#TAGS
#version tags
@x.09
Scenario:To verify that upon typing the correct pin the transaction will be successful
And Enter Correct Pin
And click on Verify for Transfer to Bank
#TAGS
#version tags
@x.09
Scenario: To verify that upon typing the correct pin the transaction will be successful
And Assert success message1
#TAGS
#version tags
@x.09
Scenario:To verify upon successful transaction the date and time is displayed
Then Check for date field
#TAGS
#version tags
@x.09
Scenario:To verify upon successful transaction user can copy the transaction id
And Copy TransactionId
#TAGS
#version tags
@x.09
Scenario: To verify that after successful transaction user can download receipt upon single click on download receipt button in Request submitted page
To verify that after successful transaction user will able to view download receipt button in Request submitted page
Then Download the receipt

# Author: Kalyani
# Last Updated: 
# Comments 
# Scenario_ID :X.09_ConsumerPortal_TransferToBank_002
#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:  To verify that after successfully transaction user will able to view history button in Request submitted page
Given Login into Consumer Portal
When Click on Transfer to Bank
And Enter Amount to do Transfer to Bank
Then Check available currencies
Then Check Wallets to be selected
When Select Bank associated to user
And Enter PIN and click on Verify for Transfer to Bank
And Assert success message
#TAGS
#version tags
@x.09
Scenario:To verify that after successfully transaction user can view history upon single click on view history button in Request submitted page
Then View History1

# Author: Kalyani
# Last Updated: 
# Comments 
# Scenario_ID :X.09_ConsumerPortal_TransferToBank_003
#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:  To verify that after successfully transaction user can do another transaction upon single click on another transaction button in Request submitted page
Given Login into Consumer Portal
When Click on Transfer to Bank
And Enter Amount to do Transfer to Bank
Then Check available currencies
Then Check Wallets to be selected
When Select Bank associated to user
And Enter PIN and click on Verify for Transfer to Bank
And Assert success message
#TAGS
#version tags
@x.09
Scenario:To verify that after successfully transaction user will get make another transaction button in Request submitted page
Then Click on Another Transaction Icon

# Author: Kalyani
# Last Updated: 
# Comments 
# Scenario_ID :X.09_ConsumerPortal_TransferToBank_004
#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:  To verify if Transfer to bank is visible user should be able to hover on pin to see and validate pin number
Given Login into Consumer Portal
When Click on Transfer to Bank
And Enter Amount to do Transfer to Bank
Then Check available currencies
Then Check Wallets to be selected
When Select Bank associated to user
#TAGS
#version tags
@x.09
Scenario:To verify that upon hovering on Eye icon entered PIN will be visible in review and confirmation page
Then Enter PIN and validate PIN Number and hover on eye icon


# Author: Kalyani
# Last Updated: 
# Comments 
# Scenario_ID :X.09_ConsumerPortal_TransferToBank_005
#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:  To verify if Transfer to bank is visible user should be able to transfer money from his wallet to his bank account
Given Login into Consumer Portal
When Click on Transfer to Bank
And Enter Amount to do Transfer to Bank
Then Check available currencies
Then Check Wallets to be selected
When Select Bank associated to user
#Then Hovering on PIN Icon to see PIN
#TAGS
#version tags
@x.09
Scenario:To verify that when service charge,commission,tax when not defined for transfer to bank will must show 0 in the review and confirmation for those fields under payment summery
         To verify that when service charge,commission,tax when defined for transfer to bank will must not show 0 in the Request submitted page for those fields under payment summery
Then Enter PIN and click on Verify and check for Service Charge
Then Check for Commission values if defined
And Assert success message


# Author: Kalyani
# Last Updated: 
# Comments 
# Scenario_ID :X.09_ConsumerPortal_TransferToBank_006
#TAGS
#version tags
@x.09
# suite tags

# test case tags
@test

Scenario:  To verify that amount field should have value greater than 0 and allow until 2 decimal point(x.xx).
Given Login into Consumer Portal
When Click on Transfer to Bank
And Enter Amount and check validation messages

