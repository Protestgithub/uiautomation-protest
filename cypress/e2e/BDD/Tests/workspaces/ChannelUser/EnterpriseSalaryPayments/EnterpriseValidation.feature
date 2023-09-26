Feature: Enterprise Validation


# Author: Arpitha
# Last Updated: 25-04-2022
# Comments 
# Scenario_ID :TC:1077
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_597 To verify that initiator is able to download the original excel file as well as the error logs.
Given Log in with corporate user credential
When Click enterprise
And Click On Enterprise Dashboard
Then Verify Error File and Original File

# Author: Arpitha
# Last Updated:03/03/2023
# Comments :
# Scenario_ID : 1268

#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test
Scenario:TC_598 To verify that admin is able to download the uploaded file log
Given Log in with corporate user credential
When Click enterprise
And Click On Enterprise Dashboard
Then Verify Downloaded file

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
Scenario:TC_599 To verify that downloaded file has only those records which had been successfully passed in bulk initiation
Given Log in with corporate user credential
When Click enterprise
And Click On Enterprise Dashboard
Then Verify Downloaded and uploaded file has same records

 #Author: Arpitha
 #Last Updated:07/03/2023
 #Comments :
 #Scenario_ID : 1259
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags
@UAT
# test case tags
@test

Scenario:TC_600 To verify that if there are errors in the sheet then those sheet won't be added in the batch and error sheet will provide the details of these errors.
Given Log in with corporate user credential
When Click enterprise
And Click on enterprise Initiation
And Downlaod template> Fill invalid data>Upload file
Then Verify Error File and Original File