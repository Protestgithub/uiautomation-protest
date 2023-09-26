Feature: Bulk Payout

        Bulk initiate of Operator to Channel transfer
       

        # Author: Arpitha C
        # Last Updated:27/06/2022
        # Comments
        # Test Case_ID :88
        #
        #TAGS
        #version tags
        @x.04 @x.06 @x.07 @x.09
        # suite tags
        @sanity
        # test case tags
        @test
        Scenario:TC_151 To verify that system is able to initiate the Bulk Payout

                Given Login into Mobiquity Portal as System admin Maker
                When Click on BulkPayout tool
                And Click on Bulk Payout Initiate
                And Select service from dropdown list
                And Download a blank .csv file from Download a File template link
                And Enter Common Remarks
                Then update the json data for Bulk Payout
                And Upload a .csv file with valid details



        # Author: Arpitha C and Sudheer
        # Last Updated: 27/06/2022
        # Comments
        # Test Case_ID : 89,
        # Author: Sudheer
        # Last Updated:
        # Comments
        # Test Case_ID :430
        #
        #TAGS
        #version tags
        @x.04 @x.06 @x.07 @x.09
        # suite tags
        @UAT
        # test case tags
        @test
        Scenario:TC_152 TC_BulkPayoutTool_1388 To Verify that, After initiated the bulk payout bulk payment then the existing user is able to navigate the dashboard page.
                Given Login into Mobiquity Portal as System admin Checker1
                When Click on BulkPayout tool
                And Click on Bulk Payout Approval link.
                And Select initiated service.
                And Click on Approve button.
                And Click on BulkPayout tool
                And Click on Bulk Payout Dashboard
                And Click on number of entries
                Then Verify Batch Id
#Then Verify success


