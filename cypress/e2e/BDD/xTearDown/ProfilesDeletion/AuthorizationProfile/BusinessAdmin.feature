Feature: BAAuthProfile Teardown

        # Author:
        # Last Updated:
        # Comments :
        # Scenario_ID :

        #TAGS
        #version tags
        @x.04 @x.06 @x.07 @x.09
        # suite tags
        
        # test case tags
        @TearDown
        @Smokeprerequisite
        Scenario:TC_284 To verify that system admin should be able to Delete BusinessAdmin authorization profile
                # # #Administrator -- Business Admin
                Given Login into Mobiquity Portal as System admin Maker
                When  Select Authorization profile
                Then Click on filters and select Business admin

        #TAGS
        #version tags
        @x.04 @x.06 @x.07 @x.09
        # suite tags
        
        # test case tags
        @TearDown
        @Smokeprerequisite
        Scenario:TC_285 To Approve the Deleted BusinessAdmin authorization profile
                Given Login into Mobiquity Portal as System admin Checker1
                When Navigate to Checker Approvals and filter by Submitted status
                And User click on submitted user data for Business Admin
                And User click on approve delete request
                Then Verify Sucess Message for Authorization profile
