Feature: Telco Operator Modification


    # Author: Likith R
    # Last Updated:
    # Comments
    # Test Case_ID : Tc_67
    #

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_108 To verify that the System admin is able to Modify  telco operator through user management module.
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Enter Telco operator Mobile number and KYC number in search menu
        And User Click on eye button
        And Edit all the required business user details for Telco-Operator
        Then Confirm the edit details
        And Navigate to My Activity and Apply Modified User filters
        And Assert Created Telco-Operator Mobile Number and Write Created on time

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_109 To verify the approval of modification Request
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Modified status
        And User click on Buissness User submitted user data
        And Approve the Users
        Then Approve the edit details


    # # Author: Arpitha C
    # # Last Updated: 25/04/2022
    # # Comments : refered here is narendra
    # # Scenario_ID : TC_56
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_110 System admin should be able to Initite modification searching with all values (Mobile, KYC, Email and Login)
        Given Login into Mobiquity Portal as System admin Maker
        When Navigate to User Management and Click on Manage Users
        And Search with the Business Mobile Number
        And User Click on eye button
        And Edit all the required business user details for Distributer
        Then Confirm the edit details
        And Navigate to My Activity and Apply Modified User filters
        Then Assert Created Buissness User2 Mobile Number and Write Created on time


    # Author: Arpitha C
    # Last Updated: 25/04/2022
    # Comments :
    # Scenario_ID : SC_57

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_111 To verify that another System Admin/Business Admin User is able to approve the modified  businsess user deatails.
        Given Login into Mobiquity Portal as System admin Checker1
        When Navigate to Checker Approvals and filter by Modified status
        And User click on Buissness User submitted user data
        And Approve the Users
        Then Approve the edit details

# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_349,TC_495
 #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_486 To verify that the employer able to click on save button.
Given Login into Mobiquity Portal as head merchant
When Navigate to User Management and Click on manage user
And Select user type as Hierarchy and Check aligned user
And User Click on eye button and Edit hierarchy information
#Then Confirm the Modification of message
