Feature: Create TCP

# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@TEST

Scenario: To verify that user is able to create TCP
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
Then Click on Add Profile
Then Fill out the details
Then Modify the Credit and Debit Limits
Then Navigate to My Activity Superadmin and Apply submitted
Then Check in My activity
Then Write Created on time for Cumulative TCP
Then Logout
Given Login into Mobiquity Portal as Super admin Checker
Then Navigate to Checker Approvals and filter by Submitted status
Then User click on Superadmin submitted user data
Then Click on Approve
Then User status is approved

# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario:To verify that user is not able to proceed furthur if all mandatory fields are not filled
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
Then Click on Add Profile
Then Validate that Next button is disabled

# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario:To verify that user is able to cancel the creation
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
Then Click on Add Profile
And Click on Cancel


# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario:To verify that profile name is unique
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
Then Click on Add Profile
Then Fill out the details and assert the message

# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario:To verify that proper error msg is displayed when out of range count and amount values are given
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
Then Click on Add Profile
Then Fill details for error msg
Then Fill in the daily,weekly and monthly credit and debit limits with higher amounts to get error msg

# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario:To verify that the profile name should not be more than 20 characters and description field should not be more than 50 characters
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
Then Click on Add Profile
Then Fill in Description and Profile Name for negative field validation

# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario: To verify that decimal values are allowed in amount fields
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
Then Click on Add Profile
Then Fill in details for all field validations
Then Decimal Point values are allowed in amount fields


# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario: To verify that negative values are not allowed in count fields
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
Then Click on Add Profile
Then Fill in details for all field validations
Then Put negative values for count fields in credit and debit limits
Then Check for the negative value in count fields assertion

# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario: To verify that negative values are not allowed in amount fields
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
Then Click on Add Profile
Then Fill in details for all field validations
Then Put negative value for amount fields in debit and credit limits
Then Check for negative values in amount fields

# Author: Saswat
# Last Updated: 
# Comments 
# TestCase_ID : TC_224
#TAGS
#version tags
@x.09
# suite tags
@UAT
# test case tags
@test

Scenario: To verify that special characters are not allowed in count and amount fields
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
Then Click on Add Profile
Then Fill in details for all field validations
Then Check if count and amount fields dont contain special characters