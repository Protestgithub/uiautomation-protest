Feature: AuthorizationProfileCreation Teardown 

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
Scenario:TC_290 To verify that system admin should be able to Delete authorization profile
        ### Subscriber M1S1 ###
        Given Login into Mobiquity Portal as System admin Maker
        When  Select Authorization profile 
        And Click on filters and select Subscriber
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@TearDown
Scenario:TC_291 To Approve the Deleted Authorization profile
      Given Login into Mobiquity Portal as System admin Checker1
      When Navigate to Checker Approvals and filter by Submitted status 
      And User click on submitted user data for Authorization profile
      And User click on approve delete request
      Then Verify Sucess Message for Authorization profile


    # # # Author: Faizan Khan
    # # # Scenario_ID : TC_90
    # # # Comments :
    # # # Last updated : 27/01/2023
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@TearDown
       Scenario:TC_525 To verify that user is able to delete created authorization profile
       Given Login into Mobiquity Portal as Super admin Maker
       When  Select Authorization profile and apply filter
       Then click on delete icon of created authorization profile AND click on yes
 # # # Author: Faizan Khan
    # # # Scenario_ID : TC_90
    # # # Comments :
    # # # Last updated : 27/01/2023
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@TearDown
       Scenario:TC_525 To approve the deleted profile
       Given Login into Mobiquity Portal as Super admin Checker
       When Navigate to Checker Approvals and filter by Submitted status 
      And User click on submitted user data for Authorization profile
      And User click on approve delete request
      Then Verify Sucess Message for Authorization profile
   