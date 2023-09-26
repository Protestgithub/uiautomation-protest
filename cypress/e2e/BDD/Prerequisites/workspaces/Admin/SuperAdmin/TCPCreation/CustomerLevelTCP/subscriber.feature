
Feature: Customer level TCP Creation

    ##################################### TCP Creation ################################################
    # # Author: Kalyani M
    # # Last Updated:
    # # Comments : View
    # # Test Case_ID : TC_23
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @prerequisite


    Scenario:TC_20 To verify that master is able to add initiate and  customer level TCP for subscriber.
        Given Login into Mobiquity Portal as Super admin Maker
        When  Navigate to Transfer Control Profile
        And Click on New Button for Subscriber

    # # # Author: Kalyani M
    # # # Last Updated:
    # # # Comments : View
    # # # Test Case_ID : TC_23
    # # #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
   # 
    # test case tags
    @prerequisite

    Scenario:TC_21 To verify that master admin is able to Approve the customer level TCP of subscriber..
        Given Login into Mobiquity Portal as Super admin Checker
        When  Navigate to Transfer Control Profile
        Then Approve the TCP1

