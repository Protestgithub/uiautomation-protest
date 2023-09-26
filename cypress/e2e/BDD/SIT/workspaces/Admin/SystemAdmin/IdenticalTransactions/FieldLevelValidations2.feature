Feature: Identical Transaction critition Field level validation 2

#Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :987
#TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test


      Scenario:TC_987 To verify that user able to click on back button
      Given Login into Mobiquity Portal as System admin Maker
      When Click on identical transaction
      And Click on service type drop down
      And Click on submit button
      Then Click on save button1
      And Click on back button

#Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :986
#TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test


      Scenario:TC_986 To verify that user able to click on save button
      When Click on identical transaction
      And Click on service type drop down
      And Click on submit button
      Then Click on save button1



# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :997
#TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test


 Scenario:TC_997 To verify that service type dropdown will have “ALL” option as well
 When Click on identical transaction
 And Select service type All from drop down

# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID :988
#TAGS
    #version tags
    @x.09
    # suite tags
    @SIT
    # test case tags
    @test


    Scenario:TC_988 To verify that user able to click on confirm button
    When Click on identical transaction
    And Click on service type drop down
    And Click on submit button
    Then Click on save button

# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID : 993
#TAGS
    #version tags
    @x.09
    # suite tags
    @UAT
    # test case tags
    @test

    
     Scenario:TC_993 To verify that If “Action on Identical Transaction” is “Pause Transaction”
     When Click on identical transaction
     And Select service type All from drop down
     Then Click on submit button
     And Click on save button

# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID : 977
#TAGS
    #version tags
    @x.09
    # suite tags
    @UAT
    # test case tags
    @test


    Scenario:TC_977 To verify that user able to click on submit button without select service type
    When Click on identical transaction
    And Click on submit button
    And assert error message

# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID : 981
#TAGS
    #version tags
    @x.09
    # suite tags
    @UAT
    # test case tags
    @test



   Scenario:TC_981 To verify that user able to click on save button without enter time interval value
   When Click on identical transaction
   And Click on service type drop down1
   And Click on submit button
   Then Click on save button1
   And assert error message1

# Author: Bhagyashri
# Last Updated:
# Comments 
# Test Case_ID : 983
#TAGS
    #version tags
    @x.09
    # suite tags
    @UAT
    # test case tags
    @test



  Scenario:TC_983 To verify that action on Identical Transaction dropdown with two options - Pause Transaction and Block Transaction
  When Click on identical transaction
  Then Click on service type drop down1
  And Click on submit button
  And Select action on IT
