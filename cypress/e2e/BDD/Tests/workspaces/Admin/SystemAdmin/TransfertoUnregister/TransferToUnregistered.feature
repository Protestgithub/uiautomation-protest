Feature: Transfer to Unregistered


    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @sanity
    # test case tags
    @test

    Scenario:TC_268 To verify that system admin should able to do enquiry of transaction for un registred subscibers Subscribers who doesn't exists in system
        Given Login into Mobiquity Portal as System admin Maker
        When  Click on Transfer to Unregistered Users
        And  Transfer to Unregistered Select the service type
        And Transfer to Unregistered Enter subscriber Mobile number or transaction ID
        Then Transfer to Unregistered Click on submit
