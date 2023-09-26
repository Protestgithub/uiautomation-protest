Feature: Sys Admin My Activity



    ####################################### My Activity #########################################

    # Author: Narendra
    # Last Updated: 12/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_127
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_227 To verify that system user can Withdraw application of user's whose registration is incomplete and sent for Approval
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to My Activity and Add the not Approved filters
        Then Click on Expand and Withdraw button

    # Author: Narendra
    # Last Updated: 12/05/2022
    # Comments
    # Scenario_ID :
    # TestCase_ID : TC_128

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_228 To verify that system user can Send for approval of user's whose Registration rejected by approver.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and click on register
        And Select User type as Adminstrator and click on Customer care Admin
        And Enter all the details
        Then Confirmation message is displayed
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_229 To verify the rejecting the approval
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Submitted status
        And User click on submitted user data
        And Reject the Users
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test
    Scenario:TC_230 To verify the My Activity after rejecting the approval
        Given Login into Mobiquity Portal as System admin Maker
        And Navigate to My Activity and Add the Reject filter
        And Click on Expand and Resume button
        And Enter all the required details of the user
        And Click the >> Submit Button
        Then Confirmation message is displayed



