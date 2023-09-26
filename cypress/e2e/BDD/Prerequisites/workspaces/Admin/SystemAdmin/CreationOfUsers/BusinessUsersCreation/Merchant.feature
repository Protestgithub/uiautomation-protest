Feature:Merchant creation

# Author: Arpitha
# Last Updated: 25-04-2022
# Comments 
# Scenario_ID :
# TC_

    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @prerequisite
    @Smokeprerequisite
Scenario:TC_581 To verify that valid System admin is able to initiate Merchant businsess user creation .
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and click on register
And Select User type as Business and Select user role as Merchant
And Enter all the required business user details Creation for Merchant user role
And Enter Channel User KYC Details
And Enter Hierarchy Details
And Enter Merchant Profile Details
Then Confirmation message displayed
When Navigate to My Activity and Apply required filters
Then Assert Created Buissness User Mobile Number and Write Created on time for Merchant



    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @prerequisite
    @Smokeprerequisite
Scenario:TC_582 Merchant Approval
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Buissness User submitted user data
        And Approve the Users for Admin Creation
        Then User status is approved

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario:TC_583 Login as Buissness User with Merchant Credentials
Given Login into Mobiquity Portal as Merchant
