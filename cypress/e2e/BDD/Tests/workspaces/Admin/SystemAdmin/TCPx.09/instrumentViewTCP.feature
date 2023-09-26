Feature: Instrument Level TCP view for viewing the dashboard

###################################### TCP Creation ################################################

# # # Author: Prerna
# # # Last Updated:
# # # Comments  :
# # # Test Case_ID : 
@test
Scenario: To verify that Clear button, Apply button and cross icon in the filter should be clickable
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
Then Check Apply button
And Check Clear button 
Then Check Cross icon


# # # Author: Prerna
# # # Last Updated:
# # # Comments  : scripted and tested, need to push
# # # Test Case_ID :
@test
 Scenario: To verify that S.No, Profile Name, Domain Category, Currency, Instument type, Grade and Action colums should be present
  Given Login into Mobiquity Portal as System admin Maker
  When Navigate to Transfer Control Profile x.09
  And Check S.No, Profile Name, Domain Category, Currency, Instument type, Grade and Action

# # # Author: Prerna
# # # Last Updated:
# # # Comments  :scripted and tested, need to push
# # # Test Case_ID :
@test
 Scenario: To verify that all the action buttons (view details, Modify, and delete) should be clickable
  Given Login into Mobiquity Portal as System admin Maker
  When Navigate to Transfer Control Profile x.09
  And Click on action buttons

# # # Author: Prerna
# # # Last Updated:
# # # Comments  : scripted and tested, need to push
# # # Test Case_ID :
@test
Scenario: To verify that the filter button should be clickable
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Click on filter tcpx.09


# # # Author: Prerna
# # # Last Updated: 10/07/23
# # # Comments  : scripted and checked
# # # Test Case_ID :
@test
Scenario: To verify that in filter pop-up if user click on clear button then all selected filters should be cleared out
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
Then Check Clear button

# # # Author: Prerna
# # # Last Updated: 06/07/23
# # # Comments  : To-do, need to resolve
# # # Test Case_ID :
@test
Scenario: To verify if no record is present for the applied filter then user should get proper error message
Given Login into Mobiquity Portal as System admin Maker
When Navigate to Transfer Control Profile x.09
And select instrument type as BANK-testing