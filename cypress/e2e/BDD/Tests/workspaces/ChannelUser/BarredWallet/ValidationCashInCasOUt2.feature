Feature: CasnIn and CashOut Validation


#Author: Arpitha
# Last Updated: 01/03/2023
# Comments :
# Scenario_ID :167
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_605 To Verify that, If user wallet has locked as a receiver then, ,the user will be able to perform financial transactions as a sender of its wallet to any other user's. in case of incoming lock
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Mobile number of merchant and KYC number in search menu 
And Click on view Details and Click on Account info
And select Lock incoming payments
Then Click On lock all

#Author: Arpitha
# Last Updated: 01/03/2023
# Comments :
# Scenario_ID :734 
 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_603 To Verify that valid user  is able to perform Cash In Transaction.
Given Log in with Merchant user credential
When Click on cash in
And Enter required details and amount of 10.01
And Cash In request is successful should be displayed along with the transaction id

#Author: Arpitha
# Last Updated: 01/03/2023
# Comments :
# Scenario_ID :734 
 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_607 To Verify that valid user  is able to perform Cash In Transaction.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Mobile number of merchant and KYC number in search menu
And Click on view Details and Click on Wallet Payment History
Then Verify amount Credited to the user for cashin transaction



#Author: Arpitha
# Last Updated: 01/03/2023
# Comments :
# Scenario_ID :167
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_605 To Verify that, If user wallet has locked as a receiver then, ,the user will be able to perform financial transactions as a sender of its wallet to any other user's. in case of incoming lock
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Mobile number of merchant and KYC number in search menu 
And Click on view Details and Click on Account info
And select Lock incoming payments
Then Click On UNLock