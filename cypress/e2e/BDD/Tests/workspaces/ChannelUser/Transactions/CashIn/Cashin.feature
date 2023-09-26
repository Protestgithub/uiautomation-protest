Feature:Cashin



    # # # Author:Narendra
    # # # Last Updated:
    # # # Comments :
    # # # Scenario_ID :Pre Requisit
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_339 TC_228 To verify newly registered channel user is able to perform any services through mobile app/web if PIN is changed after registration.
        Given Login into Mobiquity Portal as Channel User4
        When Navigate to Cash in or Cash out and Click on Cash in
        And Enter all Mandatory details for CashIn
        Then Click on Submit and Click on Confirm Button2

