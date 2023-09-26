Feature:Subscriber Deletion for churn


    # # # Author:Aparna Aras
    # # # Last Updated:
    # # # Comments :Subscriber Deletion to Churn
    # # # Scenario_ID :Pre Requisit

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smokeprerequisite
    # test case tags
    @TearDown
    Scenario:TC_303 To verify that valid SystemAdmin/businsess User is able to Delete Subscriber creation.
        Given Login into Mobiquity Portal as System admin Maker
    #     When Navigate to User Management and Click on Manage Users
    #     And Enter the Mobile number you want to delete and Click on Search2
    #     And Click on delete icon for Subscriber


    # # # # Author:Aparna Aras
    # # # # Last Updated:
    # # # # Comments :Subscriber Deletion to Churn
    # # # # Scenario_ID :Pre Requisit
    # #TAGS
    # #version tags
    # @x.04 @x.06 @x.07 @x.09
    # # suite tags
    # @Smokeprerequisite
    # # test case tags
    # @TearDown

    # Scenario:TC_304 To verify that Master user can approve Delete request of System admin
    #     Given Login into Mobiquity Portal as System admin Checker1
    #     When Navigate to Checker Approvals and filter by Submitted status
    #     And User click on submitted user data Subscriber Deletion
    #     And User click on approve delete request


