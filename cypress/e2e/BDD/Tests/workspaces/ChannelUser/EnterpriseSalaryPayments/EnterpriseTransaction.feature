Feature: Enterprise Payment Transaction

# Author: Arpitha
# Last Updated:03/03/2023
# Comments :
# Scenario_ID : 1254

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_480 To verify that user is able to perform multiple repetitive transactions under the single indetifier- The batch number.
Given Log in with valid credentials as corporate user
 When Click on enterprise payment
 And Download the template
And Upload the template
And Click on Enterprise Payment Submit
Then Verify the Success Message for bulk upload

# Author: Arpitha
# Last Updated:03/03/2023
# Comments :
# Scenario_ID : 1255

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_481 To verify that failed transactions are able to retry itself according to the configurations done.
Given Log in with valid credentials as corporate user
 When Click on enterprise payment
 And Download the template
And Upload the template
And Click on Enterprise Payment Submit
Then Verify the Success Message for bulk upload
Given Login into Mobiquity Portal as Employee
When Click enterprise
And Click on enterprise payment appproval1
And Click On Approve 
Then Verify Success 
Given Login into Mobiquity Portal as Employee user2
When Click enterprise
And Click on enterprise payment appproval1
And Click On Approve 
Then Verify Success

# Author: Arpitha
# Last Updated:03/03/2023
# Comments :
# Scenario_ID : 1261

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_482 To verify that once approve is clicked and if total amount is greater than ‘Enterprise Limit for 2 level approval’ then sytem will proceed for approval 2 stage
Given Log in with valid credentials as corporate user
 When Click on enterprise payment
 And Download the template
And Upload the template
And Click on Enterprise Payment Submit
Then Verify the Success Message for bulk upload
Given Login into Mobiquity Portal as Employee
When Click enterprise
And Click on enterprise payment appproval1
And Click On Approve 
Then Verify Success 
Given Login into Mobiquity Portal as Employee user2
When Click enterprise
And Click on enterprise payment appproval1
And Click On Approve 
Then Verify Success

# Author: Arpitha
# Last Updated:03/03/2023
# Comments :
# Scenario_ID : 1262

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_483 To verify that if sytem is proceeds for approval 2 stage then user is able to get the message ‘<Batch Id> File has been moved to approval 2 stage at <Current Date and Time>. Please proceed to approval 2 stage
Given Log in with valid credentials as corporate user
 When Click on enterprise payment
 And Download the template
And Upload the template
And Click on Enterprise Payment Submit
Then Verify the Success Message for bulk upload
Given Login into Mobiquity Portal as Employee
When Click enterprise
And Click on enterprise payment appproval1
And Click On Approve 
Then Verify Success

# Author: Arpitha
# Last Updated:03/03/2023
# Comments :
# Scenario_ID : 1263

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_484 To verify that if total amount is less then ‘Enterprise Limit for 2 level approval’ then system will process the transaction in single stage
Given Log in with valid credentials as corporate user
 When Click on enterprise payment
 And Download the template
And Upload the template
And Click on Enterprise Payment Submit
Then Verify the Success Message for bulk upload
Given Login into Mobiquity Portal as Employee
When Click enterprise
And Click on enterprise payment appproval1
And Click On Approve 
Then Verify Success 