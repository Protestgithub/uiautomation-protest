Feature:ServiceChargePricing



    # Author: Arpitha C
    # Last Updated: 2/05/2022
    # Comments : Service Charge Pricing Module Test Cases
    # Scenario_ID : SC_27
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_231 To verify that System admin should be able to view pricing engine module on web.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        Then System admin should be able to view pricing engine module on web.


    # Author: Arpitha C
    # Last Updated: 2/05/2022
    # Comments : Service Charge Pricing Module Test Cases
    # Scenario_ID : SC_28
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
   @sanity
    # test case tags
    @test

    Scenario:TC_232 To verify that User other than System admin should not able to view pricing engine module on web.
        Given Login into Mobiquity Portal as Super admin Maker
        Then User other than System admin should not able to view pricing engine module on web.


    # Author: Arpitha C
    # Last Updated: 2/05/2022
    # Comments : Service Charge Pricing Module Test Cases
    # Scenario_ID : SC_29
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_233 To verify that user should be redirected to a new page for pricing engine.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        Then User should be redirected to a new page for pricing engine.
    # Author: Arpitha C
    # Last Updated: 2/05/2022
    # Comments : Service Charge Pricing Module Test Cases
    # Scenario_ID : SC_30
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test
    Scenario:TC_234 TC_Smoke30 To verify that System admin should be able to add initiate service charge through Pricing engine module successfully.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on the Service Policy
        And Click on any service to add service charge.
        Then Logout
        Given Login into Mobiquity Portal as System admin Checker1
        When Click on Pricing Engine
        Then Aprove the created service charge



    # Author: Arpitha C
    # Last Updated: 2/05/2022
    # Comments : Service Charge Pricing Module Test Cases
    # Scenario_ID : SC_32
    #@test
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
     @sanity
    # test case tags
    @test
    Scenario:TC_235 To verify that user should also be able to make commission profile with the same pricing engine module.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on commission
        And Click on commission and select the service you want to add commission profile for
        Then Logout
        Given Login into Mobiquity Portal as System admin Checker1
        When Click on Pricing Engine
        Then Aprove the created service charge for Commission rule


    # Author: Chetan.S
    # Last Updated: 29-04-2022
    # Comments
    # Scenario_ID :
    # TC_33
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
@sanity
    # test case tags
    @test
    Scenario:TC_236 TC_71 To verify that user should be able to calculate service charge using pricing calculator.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on Pricing Engine
        And Click on Pricing Caluclator
        And Enter the party Details
        And Enter Other Details
        Then Calculate Service Charge