Feature: User Management 
    This feature includes registering of HeadMerchant



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
Scenario:TC_48 To verify that valid System admin is able to initiate HeadMerchant businsess user creation .
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and click on register
And Select User type as Business and Select user role as HeadMerchant
And Enter all the required business user details Creation for HeadMerchant user role
And Enter HeadMerchant Profile Details
Then Confirmation message is displayed
And Navigate to My Activity and Apply required filters
Then Assert Created Buissness User Mobile Number and Write Created on time for HeadMerchant

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @prerequisite
    @Smokeprerequisite
Scenario:TC_49 To verify approval business user created for HeadMerchant
Given Login into Mobiquity Portal as System admin Checker
When Navigate to Checker Approvals and filter by Submitted status 
And User click on Buissness Admin submitted user data for AtmMachine
And Approve the Users
Then User status is approved

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@Smokeprerequisite
# test case tags
@prerequisite
Scenario:TC_578 Login as Buissness User with HeadMerchant Credentials
Given Login into Mobiquity Portal as HeadMerchant

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @prerequisite
    @Smokeprerequisite
    Scenario:TC_579 Creation of HeadMerchant for churn
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Business and Select user role as HeadMerchant
        And Enter all the required business user details Creation for HeadMerchant user role for Churn
        And Enter Channel User KYC Details
        And Enter HeadMerchant Profile Details
        When Navigate to My Activity and Apply required filters
        Then Assert Created Buissness User Mobile Number and Write Created on time for HeadMerchant for Churn

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @prerequisite    
@Smokeprerequisite
    Scenario: TC_580 HeadMerchant Approval for Churn
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Buissness User submitted user data
        And Approve the Users for Admin Creation
        Then User status is approved

