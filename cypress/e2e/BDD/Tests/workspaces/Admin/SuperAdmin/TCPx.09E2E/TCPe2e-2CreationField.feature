Feature: TCP

###################################### TCP Creation ###############################################


# # # Author: Prerna
# # # Last Updated: 
# # # Comments  : scripted and checked
# # # Test Case_ID : test
# # # 
#version tags
@x.10
@test
Scenario: Test2 To check instrument limit for credit should not exceed limit define in cust tcp
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
Then Create an instrument TCP using the  Domain and Category from Cumulative
And Set Debit Limits
And set instrument daily credit limit greater than threshold
And set instrument weekly credit limit greater than threshold
And set instrument monthly credit limit greater than threshold
And set instrument yearly credit limit greater than threshold

# # # Author: Prerna
# # # Last Updated: 
# # # Comments  : scripted and checked
# # # Test Case_ID : test
# # # 
#version tags
@x.10
@test
Scenario: Test3 To check during Instrument TCP creation the limit define in cust tcp is populating correctly
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And Click on Add Profile Button of tcp x.09
Then Create an instrument TCP using the  Domain and Category from Cumulative
And Check daily,weekly,monthly and yearly Count and Amount values for the first service in Debit Limit page

# # # Author: Prerna
# # # Last Updated: 
# # # Comments  : scripted and checked
# # # Test Case_ID : test
# # # 
#version tags
@x.10
@test
Scenario: Test1 To check instrument limit for debit should not exceed limit define in cust tcp
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
Then Create an instrument TCP using the  Domain and Category from Cumulative
And set instrument daily debit limit greater than threshold
And set instrument weekly debit limit greater than threshold
And set instrument monthly debit limit greater than threshold
And set instrument yearly debit limit greater than threshold



# # # Author: Prerna
# # # Last Updated: 
# # # Comments  : scripted and checked
# # # Test Case_ID : test
# # #
#version tags
@x.10
@test
Scenario: Test4 To check during Instrument TCP creation the limit define in cust tcp is populating correctly in credit limit
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And Click on Add Profile Button of tcp x.09
Then Create an instrument TCP using the  Domain and Category from Cumulative
And Set Debit Limits
And Check daily,weekly,monthly and yearly Count and Amount values for the first service in Credit Limit page



# # # Author: Prerna
# # # Last Updated: 
# # # Comments  : 
# # # Test Case_ID : test
# # # 
#version tags
@x.10
@test
Scenario: Test6 To verify if Count for weekly exceeds 7 times daily a proper error is displayed
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And Click on Add Profile Button of tcp x.09
Then Create an instrument TCP using the  Domain and Category from Cumulative
And Set debit weekly count value greater than 7 times daily count


# # # Author: Prerna
# # # Last Updated: 
# # # Comments  : 
# # # Test Case_ID : test
# # #
#version tags
@x.10
@test
Scenario: Test6 To verify if Amount for weekly exceeds 7 times daily a proper error is displayed
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And Click on Add Profile Button of tcp x.09
Then Create an instrument TCP using the  Domain and Category from Cumulative
And Set debit weekly Amount value greater than 7 times daily Amount

# # # Author: Prerna
# # # Last Updated: 
# # # Comments  : 
# # # Test Case_ID : test
# # # 
#version tags
@x.10
@test
Scenario: Test8 To verify if Count for yearly exceeds 12 times monthly a proper error is displayed
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And Click on Add Profile Button of tcp x.09
Then Create an instrument TCP using the  Domain and Category from Cumulative
And Set debit yearly count value greater than 12 times monthly count

# # # Author: Prerna
# # # Last Updated: 
# # # Comments  : 
# # # Test Case_ID : test
# # # 
#version tags
@x.10
@test
Scenario: Test7 To verify if Count for monthly exceeds 31 times daily a proper error is displayed
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And Click on Add Profile Button of tcp x.09
Then Create an instrument TCP using the  Domain and Category from Cumulative
And Set debit monthly count value greater than 31 times daily count


















