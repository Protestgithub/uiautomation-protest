Feature: CasnIn and CashOut Validation

#Author: Arpitha
# Last Updated: 04/03/2023
# Comments :
# Scenario_ID :754
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_601 To verify that Transaction will be successful if transaction performed for different wallet
Given Log in with Merchant user credential
When Navigate to Cash in or Cash out and Click on Cash Out
And Enter all Mandatory details CashOut
Then Click on Submit and Click on Confirm Button for cashout
Then Logout

#Author: Arpitha
# Last Updated: 04/03/2023
# Comments :
# Scenario_ID :754
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario: To verify cashout in wallet payment history
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Mobile number of merchant and KYC number in search menu
And Click on view Details and Click on Wallet Payment History
Then Verify amount Credited to the user for cashout transaction

#Author: Arpitha
# Last Updated: 01/03/2023
# Comments :
# Scenario_ID :165
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_602 To Verify that, If user wallet has locked as a sender then, user will able to receive credit in its wallet across any access bearer in the case of outgoing wallet lock.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Mobile number of merchant and KYC number in search menu 
And Click on view Details and Click on Account info
And select either Lock outgoing payments or Lock incoming payments or Lock both
Then Click On lock all



#Author: Arpitha
# Last Updated: 04/03/2023
# Comments :
# Scenario_ID :754
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_601 To verify that Transaction will be successful if transaction performed for different wallet
Given Log in with Merchant user credential
When Navigate to Cash in or Cash out and Click on Cash Out
And Enter all Mandatory details CashOut
Then Click on Submit and Click on Confirm Button for cashout
Then Logout


#Author: Arpitha
# Last Updated: 01/03/2023
# Comments :
# Scenario_ID :165
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_602 To Verify that, If user wallet has locked as a sender then, user will able to receive credit in its wallet across any access bearer in the case of outgoing wallet lock.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Mobile number of merchant and KYC number in search menu 
And Click on view Details and Click on Account info
And select either Lock outgoing payments or Lock incoming payments or Lock both
Then Click On UNLock

