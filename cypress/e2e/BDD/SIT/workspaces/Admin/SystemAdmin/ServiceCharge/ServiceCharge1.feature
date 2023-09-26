Feature: Service Charge Comission


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_44
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario: To verify that user can select services one by one or he/she can select the services together at a time by click on check all button
Given Login into Mobiquity Portal as System admin Maker
When Navigate to New Customer Commission Rule
Then Click on Check Box


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_51
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario: To verify that service charge can be resume successfully
When Navigate to suspended or resume service charge
And Resume the Service by Unchecking OR Checking
And Click on Save Button
Then Assert the Success message

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_55
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario: To verify that user can check the  the Service Charge Profile in order to resume
When Navigate to suspended or resume service charge
And Resume the Service by Unchecking OR Checking
And Click on Save Button
Then Assert the Success message

#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_54
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario: To verify that for the account closure there should be a charge like service charge, commision and tax 
When Click on Service Charge
And Enter the Required details of Service Charge


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_50
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test 
#Prerequsite- need Service Charge creation

Scenario: To verify user is able to view the service charge
When Navigate to View Service Charge
And Select the Service and click on Submit
Then Assert the privilege Service Charge


#Author:Rakesh
#Last Updated:
#Comments
#Test Case_ID : TC_86,TC_87
#TAGS
#version tags
@x.09
# suite tags
@SIT
# test case tags
@test

Scenario:To verify that try to click on update button without select any commision rule(click on view button)
Given Login into Mobiquity Portal as System admin Maker
When Navigate to ServiceCharge and click on Modify New Subscriber Commission Rule
Then Click on Update Button and View Button and Assert it
