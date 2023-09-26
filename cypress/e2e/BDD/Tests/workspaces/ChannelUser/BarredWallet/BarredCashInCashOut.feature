Feature: Barred CashIn CashOut

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : TC_220
# 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_423 To verify that if user is barred as sender then user will be able to receive financial transactions across any bearer.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Subscriber mobile number and search
And Click on view Details and Click on Account info
And Lock Incomiming Payments
Then Click On lock all

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_585 To verify that if user is barred as sender then user will be able to receive financial transactions across any bearer.
Given Login into Mobiquity Portal as Channel User4
When Navigate to Cash in or Cash out and Click on Cash Out
And Enter all Mandatory details CashOut
Then Click on Submit and Click on Confirm Button for cashout

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : TC_220
# 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_423 To verify that if user is barred as sender then user will be able to receive financial transactions across any bearer.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Subscriber mobile number and search
And Click on view Details and Click on Account info
And Lock Incomiming Payments
Then Click On UNLock

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : TC_221
# 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_424 To verify that if user is barred as receiver then user should be able to send financial transactions across any bearer.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Subscriber mobile number and search
And Click on view Details and Click on Account info
And select either Lock outgoing payments or Lock incoming payments or Lock both
Then Click On lock all incoming payments


#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_584 To verify that if user is barred as receiver then user should be able to send financial transactions across any bearer.
Given Login into Mobiquity Portal as Channel User4
When Navigate to Cash in or Cash out and Click on Cash in
And Enter all Mandatory details for CashIn
Then Click on Submit and Click on Confirm Button1

# Author: Narendra
# Last Updated: 
# Comments 
# Test Case_ID : TC_221
# 
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_424 To verify that if user is barred as receiver then user should be able to send financial transactions across any bearer.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on manage user
And Enter Subscriber mobile number and search
And Click on view Details and Click on Account info
And select either Lock outgoing payments or Lock incoming payments or Lock both
Then Click On UNLock

