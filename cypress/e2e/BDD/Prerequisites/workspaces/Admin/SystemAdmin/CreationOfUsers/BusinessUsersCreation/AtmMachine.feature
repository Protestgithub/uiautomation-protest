Feature: Atm Machine Creation

# Author: Arpitha
# Last Updated: 25-04-2022
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario:TC_36 To verify that valid System admin is able to initiate AtmMachine businsess user creation .
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and click on register
And Select User type as Business and Select user role as AtmMachine
And Enter all the required business user details Creation for AtmMachine user role
And Save AtmMachine LoginID
And Enter AtmMachine KYC Details
And Enter AtmMachine Profile Details
Then Confirmation message displayed
When Navigate to My Activity and Apply required filters
Then Assert Created Buissness User Mobile Number and Write Created on time for AtmMachine


#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario:TC_37 To verify approval business user created for AtmMachine
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And User click on Buissness Admin submitted user data for AtmMachine
And Approve the Users for Admin Creation
Then User status is approved

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario: TC_577 Login as Buissness User with AtmMachine Credentials
    Given Login into Mobiquity Portal with AtmMachine Credentials