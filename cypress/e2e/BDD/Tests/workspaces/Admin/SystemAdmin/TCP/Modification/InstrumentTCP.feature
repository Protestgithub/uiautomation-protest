Feature: Instrument Level TCP Creation

# ##################################### TCP Creation ################################################
# # # Author: Aditya
# # # Last Updated:
# # # Comments  :
# # # Test Case_ID : TC_24
# # # 
# # @prerequisite

#TAGS
#version tags
@x.04 @x.07 @x.09 @x.06
# suite tags
@UAT
# test case tags
@test

  Scenario:TC_319 TC_1824 To verify that Systemadmin is able to edit intrument level TCP.
  Given Login into Mobiquity Portal as System admin Maker
  When Navigate to Transfer Control Profile and Click on Manage Transfer Level TCP
  And Click on Edit Button
  And Click on 2nd Edit Button
  Then Enter all required amount and count
  And Click on Next
  Then Verify Success Message
  

