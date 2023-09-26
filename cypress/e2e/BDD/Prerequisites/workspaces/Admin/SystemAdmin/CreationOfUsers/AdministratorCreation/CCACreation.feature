Feature: Customer Care Admin Creation

    # Author: Narendra
    # Last Updated: 20/04/2022
    # Comments :
    # Scenario_ID : S_42
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanityprerequisites
    # test case tags
    @prerequisite
    Scenario:TC_34 Registration of Business Administrator as Customer care Admin
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Adminstrator and click on Customer care Admin
        And Enter all the details for CCA
        And Enter Customer Care Admin Profile Details
        Then Confirmation message displayed
        When Navigate to My Activity and Apply required filters
        Then Assert Created Customer care Admin Mobile Number and Write Created on time



    # Author: Narendra
    # Last Updated: 20/04/2022
    # Comments
    # Scenario_ID : S_43
    #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanityprerequisites
    # test case tags
    @prerequisite

    Scenario:TC_35 Approval  to create Customer Care Admin
        Given Login into Mobiquity Portal as System admin Checker1
        Then Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data for CCA
        And Approve the Users for Admin Creation
        Then User status is approved
