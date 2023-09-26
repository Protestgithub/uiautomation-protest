Feature: Mobile Recharge




# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify on entering registered mobile no,selecting operator,entering amount,selecting payment mode and entering correct pin mobile recharge should be successful.
Given Login into Consumer Portal
# When Check whether Mobile Recharge is visible or not
#When Check whether Mobile Recharge is visible or not
And Click on Mobile Recharge
And Fill all the details for Mobile Recharge and proceed
And Enter the Pin and verify transaction
# And Click on Eye icon to view Pin
And Assert the transaction successfully page
# And Assert the success msg
Then Click on Done Button

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify that upon clicking on view history user should be able to see all fields,headers and recent transaction.
Given Login into Consumer Portal
When Check whether Mobile Recharge is visible or not
And Click on Mobile Recharge
And Fill all the details for Mobile Recharge and proceed
And Enter the Pin and verify transaction
And Click on View history

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify that upon clicking on download receipt in transaction success page the transaction receipt should get downloaded
Given Login into Consumer Portal
When Check whether Mobile Recharge is visible or not
And Click on Mobile Recharge
And Fill all the details for Mobile Recharge and proceed
And Enter the Pin and verify transaction
And Click on Download Receipt 

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify that upon clicking on copy icon,transaction ID should get copied.
Given Login into Consumer Portal
When Check whether Mobile Recharge is visible or not
And Click on Mobile Recharge
And Fill all the details for Mobile Recharge and proceed
And Enter the Pin and verify transaction
And Copy the TransactionID 

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify user can see and select recent recharge history and on selecting any one of them all field should get auto filled
And Click on Mobile Recharge
And Click on Recents and proceed
And Enter the Pin and verify transaction
And Assert the transaction successfully page


# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario:To verify user shall be able to  click on browse plan icon and able to view browse plan pop up
Given Login into Consumer Portal
When Check whether Mobile Recharge is visible or not
And Click on Mobile Recharge
And Fill all the details for Mobile Recharge
And Choose any Browse Plans to update the amount
And Enter the Pin and verify transaction
And Assert the transaction successfully page
Then Click on Done Button

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify user selects Bank account as payment mode to perform Mobile Recharge.
Given Login into Consumer Portal
When Check whether Mobile Recharge is visible or not
And Click on Mobile Recharge
And Fill all the details till amount for Mobile Recharge
And Select Bank Account as payment mode and proceed
And Enter the Pin and verify transaction
And Assert the transaction successfully page
Then Click on Done Button

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify user selects Debit/credit card as payment mode to perform Mobile Recharge.
Given Login into Consumer Portal
When Check whether Mobile Recharge is visible or not
And Click on Mobile Recharge
And Fill all the details till amount for Mobile Recharge
And Select Debit/credit card as payment mode and proceed
And Enter the Pin and verify transaction
And Assert the transaction successfully page
Then Click on Done Button

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario:To verify user shall be able to  click on browse plan icon and able to view browse plan pop up
Given Login into Consumer Portal
When Check whether Mobile Recharge is visible or not
And Click on Mobile Recharge
And Fill all the details for Mobile Recharge
And Click on Browse Plans to view
And Select any plan to update the amount
And Select currency as USD and proceed
And Enter the Pin and verify transaction

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario:To verify user shall be able to switch between the tab in browse plan pop up.
Given Login into Consumer Portal
When Check whether Mobile Recharge is visible or not
And Click on Mobile Recharge
And Fill all the details for Mobile Recharge
And Click on Browse Plans to view

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify proper field error message should come when user enter less than minimum allowed no.
Given Login into Consumer Portal
When Check whether Mobile Recharge is visible or not
And Click on Mobile Recharge
And Enter mobile number less than 10 digits & fill other details and proceed
And Assert the error message

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify that when user click on Yes button on confirm page for cancel transaction User will redirect to mobile recharge page
Given Login into Consumer Portal
When Check whether Mobile Recharge is visible or not
And Click on Mobile Recharge
And Fill all the details for Mobile Recharge and proceed
And Click on cross on Review & Confirm page
Then Click on Yes

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify that when user click on No button on confirm page for cancel transaction User will be redirect to review and confirm page
Given Login into Consumer Portal
When Check whether Mobile Recharge is visible or not
And Click on Mobile Recharge
And Fill all the details for Mobile Recharge and proceed
And Click on cross on Review & Confirm page
Then Click on No
And Enter the Pin and verify transaction
And Assert the transaction successfully page