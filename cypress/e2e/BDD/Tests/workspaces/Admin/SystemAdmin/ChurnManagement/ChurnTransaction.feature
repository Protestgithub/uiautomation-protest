Feature: Churn Transaction

# Author: Rajesh 
# Last Updated:
# Comments
# Scenario_ID :TC_44
#
 #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_524 To verify that If the deleted account has any money then the same amount should be transferred to churn suspense wallet. 
Given Login into Mobiquity Portal as System admin Maker
When Click on reconciliation 
And Copy churn account amount
When Navigate to User Management and Click on manage user
And Enter Mobile number of churn subscriber and KYC number in search menu1
And Click on view Details and Click on Account info
And Copy the INR and USD wallet balances
And Delete the user with proper reasons
And Navigate to My Activity and Apply Modified User filters
And Assert Created churned subscriber Mobile Number and Write Created on time
Then Logout

#Approval of deletion

Given Login into Mobiquity Portal as System admin Checker1
And User click on submitted user data for churned subscriber data
And Approve the Users
Then Navigate to reconciliation and check the suspended user amount transferred there or not
