Feature: OrdersDetails
    ######################################### Sudheer ##################################################

    # # # Author: Sudheer Baraker
    # # # Last Updated: 11/05/2022
    # # # Comments :
    # # # Scenario_ID : TC_129
    # # #
    #@test
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanityprerequisites
    # test case tags
    @test
    Scenario:TC_73 To verify that Admin user can view all the transaction details under Order details menu.
        Given Login into Mobiquity Portal as System admin Maker
        When  Click on user management and Manage users
        And  Enter Mobile numberin search Menu for Order details
        And  Click on view Details
        Then Click on Order Details




    # # # Author: Sudheer Baraker
    # # # Last Updated: 11/05/2022
    # # # Comments :
    # # # Scenario_ID : TC_131
    # # #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanityprerequisites
    # test case tags
    @test
    Scenario:TC_74 To verify that latest order transactions will be displayed on the first page of Order details screen.
        Given Login into Mobiquity Portal as System admin Maker
        When  Click on user management and Manage users
        And  Enter Mobile numberin search Menu
        And  Click on view Details
        Then Click on order details for latest order transactions





    # # # Author: Sudheer Baraker
    # # # Last Updated: 
    # # # Comments :
    # # # Scenario_ID : TC_145
    # # #
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UATprerequisites
    # test case tags
    @test

    Scenario:TC_464 To Verify that, The filtering functionality must be correctly based on the filter applied.
    Given Login into Mobiquity Portal as System admin Maker
        When  Click on user management and Manage users
        And  Enter Mobile numberin search Menu for Order details
        And  Click on view Details
        And Click on order details to view the transaction details
        Then click on filter for Order details

