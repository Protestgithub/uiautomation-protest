Feature: Domain Management


    Author: Likith R
    Last Updated:
    Comments
    Test Case_ID : TC_175

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_218 To verify that proper error message should be displayed when domain code and domain name is not unique in the system
        Given Login into Mobiquity Portal as System admin Maker
        When User Click on Domain Management >> Add Domain
        And Enter Domain Name and Domain Code.
        Then Click on submit buttonn