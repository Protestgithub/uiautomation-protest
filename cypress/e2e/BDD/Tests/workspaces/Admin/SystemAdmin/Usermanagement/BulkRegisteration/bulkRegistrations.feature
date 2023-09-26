Feature: Bulk Registration Management


# Author: Rajesh
# Last Updated:
# Comments 
# Test Case_ID :2056, 2057
# 
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test


Scenario:TC_505 To verify that User should be able to download the Failed recorded file
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on register
And Select User type as Subscriber and click on Multiple Subscribers
And Download the template for Cancel 
And Upload csv file with invalid details for bulk user creation to assert record
#And Download the failed recorded file
#And Click on Cancel Upload button and Assert
#Then Logout


# Author: Rajesh
# Last Updated:
# Comments 
# Test Case_ID :2055
# 
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test


Scenario:TC_504 TC_SMOKE37 To verify that User should be able to select proceed button on upload screen and records will be checked for each field according to the category profile of the user.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on register
And Select User type as Subscriber and click on Multiple Subscribers
And Download a blank .csv file for Multiple Users template
And Upload the downloaded file for bulk user creation
And Proceed the Uploaded file and Assert the response
#Then Logout


# Author: Rajesh
# Last Updated:
# Comments :
# Test Case_ID :Prerequisite for Unique ID 
# 
#TAGS
    #version tag
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @Smoke
    # test case tags
    @test


Scenario:TC_504 TC_SMOKE37 To verify that User should be able to select proceed button on upload screen and records will be checked for each field according to the category profile of the user.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on register
And Select User type as Subscriber and click on Multiple Subscribers
And Download a blank .csv file for Multiple Users template
And Upload the downloaded file for bulk user creation
And Proceed the Uploaded file and Assert the response


# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_1955
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_417 To verify that valid SystemAdmin User can able to view the dashboard which provides summary and able to download the Logs
Given Login into Mobiquity Portal as System admin Maker
When Navigate to My Activity and Click on Multiple Record1
And User Click on Eye Button and Download the Logs 

# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_1958
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_419 To verify that Bulk Id will be unique for every file that is uploaded.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to My Activity and Click on Multiple Record2
Then Check for the Uniqe BulkID

# Author: Rakesh 
# Last Updated: 
# Comments : 
# Scenario_ID : TC_1954,TC_1956
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario: To verify that In case of Bulk User Registration, new tab of Multiple is available to view
Given Login into Mobiquity Portal as System admin Maker
When Navigate to MyActivity and Click on Multiple
Then Assert the bulk upload ID

# Author: Rajesh
# Last Updated:
# Comments 
# Test Case_ID :2048 
# 
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test


Scenario:TC_501 To verify that Post selection of multiple user registration user should be able to download the template of selected user type-role
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on register
And Select User type as Subscriber and click on Multiple Subscribers
And Download a blank .csv file for Multiple Users template
And Assert that template got Download
#Then Logout


# Author: Rajesh
# Last Updated:
# Comments 
# Test Case_ID :2049, 2052, 2053
# 
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_502 To verify that User should be able to upload the downloaded .csv file successfully.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on register
And Select User type as Subscriber and click on Multiple Subscribers
And Download a blank .csv file for Multiple Users template
And Upload the downloaded file for bulk user creation
And Check the uploaded file icon is there or not
#Then Logout


# Author: Rajesh
# Last Updated:
# Comments 
# Test Case_ID :2054
# 
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test


Scenario:TC_503 To verify that User should be able to cancel the process successfully by clicking on Cancel button.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on register
And Select User type as Subscriber and click on Multiple Subscribers
And Download a blank .csv file for Multiple Users template
And Upload the downloaded file for bulk user creation
And Click on Cancel to stop the process
#Then Logout






