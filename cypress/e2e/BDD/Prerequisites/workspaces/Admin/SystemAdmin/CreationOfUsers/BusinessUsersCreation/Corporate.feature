Feature: Corporate Creation

#     # Author: Arpitha
#     # Last Updated: 25-04-2022
#     # Comments
#     # Scenario_ID :
#     # TC_53
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario:TC_38 To verify that valid System admin is able to initiate Corporate businsess user creation .
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and click on register
And Select User type as Business and Select user role as Corporate
And Enter all the required business user details Creation for Corporate user role
And Enter Corporate Profile Details
Then Confirmation message displayed
When Navigate to My Activity and Apply required filters
Then Assert Created Buissness User Mobile Number and Write Created on time for Corporate



# Author: Arpitha
# Last Updated: 25-04-2022
# Comments
# Scenario_ID :
# TC_53
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario:TC_39 To verify approval business user created for Corporate
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And User click on Corporate User submitted user data
And Approve the Users for Admin Creation
Then User status is approved

# Author: Arpitha
# Last Updated: 25-04-2022
# Comments
# Scenario_ID :
# TC_53
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario: TC_349 To verify first login as corporate user
Given Login into Mobiquity Portal as Corporate User
    
# TC_53
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario:TC_343 To verify that valid System admin is able to initiate Corporate user2
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and click on register
And Select User type as Business and Select user role as Corporate
And Enter all the required business user details Creation for Corporate user role1
And Enter Corporate Profile Details
Then Confirmation message displayed
When Navigate to My Activity and Apply required filters
Then Assert Created Buissness User Mobile Number and Write Created on time for Corporate1



# Author: Arpitha
# Last Updated: 25-04-2022
# Comments
# Scenario_ID :
# TC_53
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario:TC_344 To verify approval corporate user2
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And User click on Corporate User submitted user data
And Approve the Users for Admin Creation
Then User status is approved

# Author: Arpitha
# Last Updated: 25-04-2022
# Comments
# Scenario_ID :
# TC_53
#TAGS
#version tags
@x.04 @x.06 @x.07 @x.09
# suite tags

# test case tags
@prerequisite
@Smokeprerequisite
Scenario: TC_350 To verify first login as corporate user2
Given Login into Mobiquity Portal as Corporate User2