Feature: Bulk Validations

# Author: Arpitha
# Last Updated:03/03/2023
# Comments :
# Scenario_ID : 1260
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_475 To verify that even if 1 record in file is successfully validated then unique id will generate.
Given Log in with corporate user credential
When Click on enterprise payment
And Click on Upload
And Click on Enterprise Payment Submit
And Click On Enterprise Dashboard
Then Verify Unique id is generated

# Author: Arpitha
# Last Updated:
# Comments :
# Scenario_ID : TC_1275
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_476 To verify that admin is able to enter remarks regarding the file being uploaded
Given Log in with corporate user credential
When Click on enterprise payment
And Click on Upload
Then Verify the text message

# Author: Arpitha
# Last Updated:03/03/2023
# Comments :
# Scenario_ID : 1269
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_477 To verify that downloaded file has only those records which had been successfully passed in bulk initiation
Given Log in with corporate user credential
When Click enterprise
And Click On Enterprise Dashboard
Then Verify Downloaded and uploaded file has same records

