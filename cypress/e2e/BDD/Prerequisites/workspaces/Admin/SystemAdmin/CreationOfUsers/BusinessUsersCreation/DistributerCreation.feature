Feature: Business User Creation

    This feature includes registering and approval of Business User

    # Author: Arpitha
    # Last Updated: 25-04-2022
    # Comments
    # Scenario_ID :
    # TC_53
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @prerequisite

    Scenario:TC_40 TC_Smoke60 To verify that valid System admin is able to initiate businsess user creation for O2C
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Business and Select user role
        And Enter all the required business user details for O2C
        And Save ChannelUser LoginID
        And Enter Channel User KYC Details
        And Enter ChannelUser Profile Details
        Then Confirmation message displayed
        When Navigate to My Activity and Apply required filters
        Then Assert Created Buissness User Mobile Number and Write Created on time for O2C




    # Author: Arpitha
    # Last Updated: 25-04-2022
    # Comments
    # Scenario_ID :
    # TC_53
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @prerequisite
    Scenario: TC_41 ,TC_Smoke60 To verify approval business user created for o2c
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on Buissness User submitted user data for O2C
        And Approve the Users for Admin Creation
        Then User status is approved

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @prerequisite
    Scenario:TC_575 TC_Smoke60 Login as Buissness User with O2C Distributer Credentials
        Given Login into Mobiquity Portal as Distributer for O2C  


    # Author: Arpitha
    # Last Updated: 25-04-2022
    # Comments
    # Scenario_ID :
    # TC_53
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smokeprerequisite
    # test case tags
    @prerequisite

    Scenario:TC_42 To verify that valid System admin is able to initiate businsess user creation
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Business and Select user role
        And Enter all the required business user2 details
        And Save ChannelUser2 LoginID
        And Enter Channel User KYC Details
        And Enter ChannelUser Profile Details
        Then Confirmation message displayed
        When Navigate to My Activity and Apply required filters
        Then Assert Created Buissness User Mobile Number and Write Created on time





    # Author: Arpitha
    # Last Updated: 25-04-2022
    # Comments
    # Scenario_ID :
    # TC_53
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    
    # test case tags
    @prerequisite @Smokeprerequisite
    Scenario: TC_43 To verify approval business user created
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
    @prerequisite @Smokeprerequisite
    Scenario:TC_576 Login as Buissness User with Distributer Credentials
        Given Login into Mobiquity Portal as Distributer  


