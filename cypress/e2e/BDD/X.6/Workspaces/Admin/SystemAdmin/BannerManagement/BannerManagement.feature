Feature: Banner Management


# Author: Rakesh 
# # # Last Updated: 
# # # Comments :
# # # Scenario_ID :
# # #
#TAGS
#version tags
@x.6 @x.7
#suite tags
Scenario:To verify that admin is able to initiate Banner Management
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Banner Management
And Click on Upload New and Enter the details
Then click on next and assert the sucess message

#TAGS
#version tags
@x.6 @x.7
#suite tags
Scenario:To verify that admin checker is able to approve
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And Click on approve the Banner
Then Assert the success message of Banner approved

# Author: Rakesh 
# # # Last Updated: 
# # # Comments :
# # # Scenario_ID : TC_692
# # #
#TAGS
#version tags
@x.6 @x.7
#suite tags
Scenario:To verify delete button is disabled for a default banner
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Banner Management
And Check the row and click on delete


# Author: Rakesh 
# # # Last Updated: 
# # # Comments :
# # # Scenario_ID : TC_693 &TC_695 &TC_696
# # #
#TAGS
#version tags
@x.6 @x.7
#suite tags
Scenario:To verify if user is able to change the position of banners using the up arrow and down arrow key(view both left and right placement)
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Banner Management
And Click on Change Banner Order and assert it
Then Check the left and right arrow

# Author: Rakesh 
# # # Last Updated: 
# # # Comments :
# # # Scenario_ID : TC_694
# # #
#TAGS
#version tags
@x.6 @x.7
#suite tags
Scenario: To verify on selecting the left/right placement and after changing the banner order, user is able to save the details and receives the message "banner order changed successfully".
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Banner Management
And Click on Change Banner Order
Then click on save and assert banner order successfull


# Author: Rakesh 
# # # Last Updated: 
# # # Comments :
# # # Scenario_ID : TC_689
# # #
#TAGS
#version tags
@x.6 @x.7
#suite tags
Scenario:To verify delete banner is following maker checker process.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Banner Management
And Click on Delete Banner 

#TAGS
#version tags
@x.6 @x.7
#suite tags
Scenario:To verify that admin checker is able to approve the Delete request
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And Click on approve the Banner
Then Assert the success message of Banner Deleted successfully