Feature: Bulk validation

# Author: Arpitha
# Last Updated: 13-03-2023
# Comments 
# Scenario_ID :TC:1266
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_470 To verify that once the bulk upload is initiated then file will not upload successfully without the approval of admin through bulk payment approval process.
Given Log in with valid credentials as corporate user
When Click on enterprise payment
And Download the template
And Upload the template
And Click on Enterprise Payment Submit
Then Verify the Success Message for bulk upload


# Author: Arpitha
# Last Updated:
# Comments :
# Scenario_ID : TC_367
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_355 To verify that admin is able to approve bulk upload through bulk payment approval process.
Given Login into Mobiquity Portal as Employee for corp
When Click enterprise
And Click on enterprise payment appproval1
And Click On Approve 
Then Verify Success 

# Author: Arpitha
# Last Updated:
# Comments :
# Scenario_ID : TC_367
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_355 To verify that admin is able to approve bulk upload through bulk payment approval2 process.
Given Login into Mobiquity Portal as Employee2
When Click enterprise
And Click on enterprise payment appproval2
And Click On Approve 
Then Verify Success 

    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_470 To verify that once the bulk upload is initiated then file will not upload successfully without the approval of admin through bulk payment approval process.
Given Log in with valid credentials as corporate user
And Click On Enterprise Dashboard
Then Verify Batch ID Exist


# Author: Arpitha
# Last Updated: 13-03-2023
# Comments 
# Scenario_ID :TC:1080
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_471 To verify that bulk dashboard have batches with following status Batch initiation success,Batch initiation failed,Batch approval successfully completed.
Given Log in with valid credentials as corporate user
When Click enterprise
And Click On Enterprise Dashboard
Then Verify for initiated,approved and failed records

# Author: Arpitha
# Last Updated:
# Comments :
# Scenario_ID : 379
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_472 To verify that on completion of the transaction a summary will display ‘Total processed records x, Successful:z, Failed
Given Log in with corporate user credential
When Click enterprise
And Click On Enterprise Dashboard
Then Verify Success Count

# Author: Arpitha
# Last Updated:
# Comments :
# Scenario_ID : TC_366
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_473 To verify that admin is able to initiate bulk upload
Given Log in with valid credentials as corporate user
When Click on enterprise payment
And Download the template
And Upload the template
And Click on Enterprise Payment Submit
Then Verify the Success Message for bulk upload

# Author: Arpitha
# Last Updated:
# Comments :
# Scenario_ID : TC_1267
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_474 To verify that admin is able to reject bulk upload through bulk payment approval process.
Given Login into Mobiquity Portal as Employee for corp
When Click enterprise
And Click on enterprise payment appproval1
And Click On Reject
Then Verify Reject Message
