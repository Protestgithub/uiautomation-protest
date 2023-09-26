Feature: Telco Operator Creation

    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : TC_66
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @prerequisite
@Smokeprerequisite
    Scenario:TC_50 To verify that the System admin is able to Add telco operator through user management module.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Business and click on Telco operator
        And Enter all the required business user details for Telco-Operator
        And Enter Telco-Operator Profile Details
        Then Confirmation message displayed
        And Navigate to My Activity and Apply Add User filters
        And Assert Created Telco-Operator Mobile Number and Write Created on time


    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @prerequisite
@Smokeprerequisite
    Scenario:TC_51 To verify the approval of telco operator
        Given Login into Mobiquity Portal as System admin Checker1
        Then Navigate to Checker Approvals and filter by Submitted status
        And User click on Buissness User submitted user data
        And Approve the Users for Admin Creation
        Then User status is approved
