Feature: Subscriber Creation

    This feature includes registering, Modifying and Approval of Subscriber
    Users by System Admin

    # # Author: Chetan.S
    # # Last Updated: 25-04-2022
    # # Comments
    # # Scenario_ID :
    # # TC_68
    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    
    # test case tags
    @prerequisite @Smokeprerequisite
    Scenario: TC_63 To verify that valid SystemAdmin is able to initiate Subscriber creation.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Subscriber and click on subscribers for initiate of Creation
        And Enter all the required subscriber details to initiate Subscriber creation for UMS
        And Save Subscriber LoginID
        And Enter KYC Details
        And Enter Subscriber Profile Details
        Then Confirmation message displayed
        When Navigate to My Activity and Apply required filters
        Then Assert Created Subscriber Mobile Number and Write Created on time to initiate Subscriber creation




    # # Author: Chetan.S
    # # Last Updated: 25-04-2022
    # # Comments
    # # Scenario_ID :
    # # TC_69
    # #@test

    #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    
    # test case tags
    @prerequisite
    @Smokeprerequisite
    Scenario: TC_64 To verify that another System Admin/businsess User is able to approve the initiated Subscriber creation.
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Subscriber submitted user data
        And Approve the Users for Admin Creation
        Then User status is approved



# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.09
# suite tags
@prerequisite @UAT
# test case tags
@test


Scenario: Associate Bank to customer user
Given Login into Mobiquity Portal with HeadMerchant credentials
When  Click on user management and Manage users
And Select Others in dropdown
And Enter Subscriber mobile number and search
And  Click on view Details
And Click on Account info and Add Bank Account
And Enter Bank Details
Then Verify Success Message and Approve Add bank


# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.09
# suite tags
@prerequisite @UAT
# test case tags
@test

Scenario: Login into consumer portal for first time
Given Login into Consumer Portal to set Password

# Author: Narendra
# Last Updated: 
# Comments 
# Scenario_ID :
#TAGS
#version tags
@x.09
# suite tags
@prerequisite @UAT
# test case tags
@test


Scenario: Add money to customer wallet
Given Login into Consumer Portal
When Click on Add money button
And Enter Amount for Transactions
Then Enter Pin and verify