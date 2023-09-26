Feature: Enterprise validation

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

Scenario:TC_593 To verify that system will not be able to perform any service through Bulk payout tool if the file uploaded is not a CSV file.
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

Scenario:TC_594 To verify that system should not be able to perform any service through Bulk payout tool if the mandatory field - Sr No in the uploaded file is left blank.
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

Scenario:TC_595 To verify that system should not be able to perform any service through Bulk payout tool if the mandatory field - From MFS Provider as blank in the uploaded file is blank.
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

Scenario:TC_596 To verify that system should not be able to perform any service through Bulk payout tool if the mandatory field - From Payment Instrument in the uploaded file is blank.
Given Login into Mobiquity Portal as System admin Maker
When Click on BulkPayout tool
And Click on Bulk Payout Initiate
And Select service from dropdown list
And Download a blank .csv file from Download a File template link
And Enter Common Remarks
Then update the json data with From Payment Instrument as blank
And Upload a .csv file with Invalid details

# Author: Saswat
# Last Updated: 30-01-2023
# Comments 
# Scenario_ID :
# TC_300
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_452 To verify that initiator is able to check initiated records.
Given Log in with valid credentials as corporate user
When Click enterprise
And Click On Enterprise Dashboard
And Click on Initiated Entry
Then Verify Initiated Count

# Author: Saswat
# Last Updated: 30-01-2023
# Comments 
# Scenario_ID :
# TC_303
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_453 To verify that initiator is able to check how many records have failed.
Given Log in with valid credentials as corporate user
When Click enterprise
And Click On Enterprise Dashboard
And Click On Failed Entry
Then Verify Failed count
