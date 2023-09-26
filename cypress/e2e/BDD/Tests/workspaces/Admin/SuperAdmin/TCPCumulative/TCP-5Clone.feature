Feature:Clone TCP

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


Scenario: To verify that user is able to clone TCP
Given Login into Mobiquity Portal as Super admin Maker
When Navigate to TCP
And Search a user and assert the fields
And Click on CloneTCP
And Fill out the details
And Modify the Credit and Debit Limits
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