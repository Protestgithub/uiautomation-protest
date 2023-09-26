Feature: View Subscriber Account Details

# Author:Niroop H N 
# Last Updated:
# Comments
# Scenario_ID :TC_42-155
#
 #TAGS
    #version tags
    @x.04 @x.07 @x.09 @x.06
    # suite tags
    @sanity
    # test case tags
    @test
Scenario:TC_497 To Verify that, Valid user account details will be displayed on the bank information page.
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to User Management and Click on manage user
And Enter Mobile number and KYC number in search menu2
And Click on view Details and Click on Account info
