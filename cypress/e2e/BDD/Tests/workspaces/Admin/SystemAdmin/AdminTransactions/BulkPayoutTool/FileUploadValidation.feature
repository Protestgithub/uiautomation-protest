
Feature: Bulk Payout

    ################Sudheer#########################
    # Author: Sudheer
    # Last Updated:
    # Comments
    # Test Case_ID :425
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_153 TC_BulkPayoutTool_1368 To verify that system will not be able to perform any service through Bulk payout tool if the file uploaded is not a CSV file.
        Given Login into Mobiquity Portal as System admin Maker
        When Click on BulkPayout tool
        And Click on Bulk Payout Initiate
        And Select service from dropdown list
        And Download a blank .csv file from Download a File template link
        And Enter Common Remarks for non CSV
        Then Upload a non .csv file



    # Author: Sudheer
    # Last Updated:
    # Comments
    # Test Case_ID :437
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_154 TC_BulkPayoutTool_1406 To verify that system should not be able to perform any service through Bulk payout tool if the mandatory field - Sr No in the uploaded file is left blank.

        Given Login into Mobiquity Portal as System admin Maker
        When Click on BulkPayout tool
        And Click on Bulk Payout Initiate
        And Select service from dropdown list
        And Download a blank .csv file from Download a File template link
        And Enter Common Remarks
        Then update the json data with Sr No as blank
        And Upload a .csv file with Invalid details



    # Author: Sudheer
    # Last Updated:
    # Comments
    # Test Case_ID :438
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_155 TC_BulkPayoutTool_1407 To verify that system should not be able to perform any service through Bulk payout tool if the mandatory field - From MFS Provider as blank in the uploaded file is blank.

        Given Login into Mobiquity Portal as System admin Maker
        When Click on BulkPayout tool
        And Click on Bulk Payout Initiate
        And Select service from dropdown list
        And Download a blank .csv file from Download a File template link
        And Enter Common Remarks
        Then update the json data with From MFS Provider as blank
        And Upload a .csv file with Invalid details

    # Author: Sudheer
    # Last Updated:
    # Comments
    # Test Case_ID :439
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
    Scenario:TC_156 TC_BulkPayoutTool_1408 To verify that system should not be able to perform any service through Bulk payout tool if the mandatory field - From Payment Instrument in the uploaded file is blank.

        Given Login into Mobiquity Portal as System admin Maker
        When Click on BulkPayout tool
        And Click on Bulk Payout Initiate
        And Select service from dropdown list
        And Download a blank .csv file from Download a File template link
        And Enter Common Remarks
        Then update the json data with From Payment Instrument as blank
        And Upload a .csv file with Invalid details