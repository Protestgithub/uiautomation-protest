Feature: Instrument Level TCP view details

###################################### TCP Creation ################################################

# # # Author: Prerna
# # # Last Updated:
# # # Comments  : checked , to be pushed
# # # Test Case_ID :
@test
 Scenario: To verify that sysadmin is able to view TCP Details
 #following fields only ie. Profile name, Description, currency , domain, category, grade, payment instrument and wallet type. So, scripting for the same
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on view details, and check whether TCP details are present
 

# # # Author: Prerna
# # # Last Updated:
# # # Comments  : checked, to be pushed
# # # Test Case_ID :
@test
 Scenario: To verify that sysadmin is able to view User Details
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Click on view details, and check whether User details are present

# # # Author: Prerna
# # # Last Updated:
# # # Comments  : checked, to be pushed
# # # Test Case_ID :
@test
 Scenario: To verify that sysadmin is able to see Daily, Weekly, Monthly and Yearly in Debit limits
 Given Login into Mobiquity Portal as System admin Maker
 When Navigate to Transfer Control Profile x.09
 And Enter profile name of instrument TCP
 And Check the first service of Debit Limits

