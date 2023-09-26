Feature: International Transfer
###################################### International Transfer ################################################



# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify on entering all mandatory details International transfer should be successful.
Given Login into Consumer Portal
When Click on International Transfer
And Fill amount & select wallet
And Click on proceed button
And Fill all the details for International Transfer and proceed
And Enter the Pin to verify txn
And Assert the transaction successfully page
Then Click on Done Button1

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify after entering amount & selecting wallet user is able to click on proceed button.
Given Login into Consumer Portal
When Click on International Transfer
And Fill amount & select wallet
And Click on proceed button

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify that when the user is clicking on star button for Add to Favourites it becomes a filled star and is added to favourites and when deselected the star becomes hollow and the added person will be removed.
Given Login into Consumer Portal
When Click on International Transfer
And Fill amount & select wallet
And Click on proceed button
And Fill all the details for International Transfer and proceed
And Enter the Pin to verify txn
And Click on Add to favourites
Then Click on Done Button1


# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify that after successful or failed transaction on clicking view history transaction should be visible in view history list.
Given Login into Consumer Portal
When Click on International Transfer
And Fill amount & select wallet
And Click on proceed button
And Fill all the details for International Transfer and proceed
And Enter the Pin to verify txn
And Click on View History


# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify that after successful or failed transaction on clicking make another transfer should be visible.
Given Login into Consumer Portal
When Click on International Transfer
And Fill amount & select wallet
And Click on proceed button
And Fill all the details for International Transfer and proceed
And Enter the Pin to verify txn
And Click on Make another transfer

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify that after successful on clicking download receipt transaction should be visible in view receipt.
Given Login into Consumer Portal
When Click on International Transfer
And Fill amount & select wallet
And Click on proceed button
And Fill all the details for International Transfer and proceed
And Enter the Pin to verify txn
And Assert the transaction successfully page
And Click on Download Receipt

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify that upon clicking on copy icon,transaction ID should get copied.
Given Login into Consumer Portal
When Click on International Transfer
And Fill amount & select wallet
And Click on proceed button
And Fill all the details for International Transfer and proceed
And Enter the Pin to verify txn
And Click on Copy TransactionID

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify that when user click on Yes button on confirm page for cancel transaction User will redirect to international transfer page
Given Login into Consumer Portal
When Click on International Transfer
And Fill amount & select wallet
And Click on proceed button
And Fill all the details for International Transfer and proceed
And Click on cross on Review & Confirm page
Then Click on Yes button

# # Author: Ria
# # Last Updated: 
# # Comments 
# # Scenario_ID : 
# # TestCase_ID : 
@test
Scenario: To verify that when user click on No button on confirm page for cancel transaction User will be redirect to review and confirm page
Given Login into Consumer Portal
When Click on International Transfer
And Fill amount & select wallet
And Click on proceed button
And Fill all the details for International Transfer and proceed
And Click on cross on Review & Confirm page
Then Click on No button