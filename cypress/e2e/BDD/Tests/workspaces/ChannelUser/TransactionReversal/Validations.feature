Feature: Transaction Reversal validations

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario: To Verify System admin able to view Transactions by applying suitable filters in wallet payment history
Given Login into Mobiquity Portal as System admin Maker
When  Click on user management and Manage users
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Wallet Payment History
And Click on Filter and apply suitable filter
Then Verify the transactions

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario:To Verify System Admin user is able to view Post and Prebalance along with view details button when clicked on Expand more button.
Then Click on Expand more and Verify the details


# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario: To Verify System admin user is able to view More details page when clicked on view details button
Then Verify the More Details page



# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario:Verify system Admin user is able to view the transaction reversal and Share recipt button
Then Verify Reversal and share recipt button

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario:Verify System admin user able to view Reverse Transaction page when clicked on reverse transaction button
Then Verify ReverseTransaction page

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario:VErify System admin user will be navigated to previous page when user clicked on No button in reverse transaction page
Then Verify navigated previous page


