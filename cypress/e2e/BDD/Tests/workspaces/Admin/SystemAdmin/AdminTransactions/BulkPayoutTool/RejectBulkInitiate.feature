Feature: Bulk Payout

    # Author: Sudheer
    # Last Updated:
    # Comments
    # Test Case_ID :426
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_157 TC_BulkPayoutTool_1374 To verify that system admin can initiate bulk payout
        Given Login into Mobiquity Portal as System admin Maker
        When Click on BulkPayout tool
        And Click on Bulk Payout Initiate
        And Select service from dropdown list
        And Download a blank .csv file from Download a File template link
        And Enter Common Remarks
        Then update the json data for Bulk Payout
        And Upload a .csv file with valid details

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_158 TC_BulkPayoutTool_1374 To verify that system admin can reject the initiated user in bulk payout tool
        Given Login into Mobiquity Portal as System admin Checker1
        When Click on BulkPayout tool
        And Click on Bulk Payout Approval link.
        And Select initiated service.
        And Click on Reject button.
        And Click on BulkPayout tool
        And Click on Bulk Payout Dashboard
        And Click on number of entries
        Then Verify Batch Id

