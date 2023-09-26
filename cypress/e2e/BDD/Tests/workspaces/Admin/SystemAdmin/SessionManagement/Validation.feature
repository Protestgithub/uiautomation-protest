Feature: Session Management Validation

# Author:Niroop H N
# Last Updated:
# Comments 
# Scenario_ID : TC_629
#             :TC_1968
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test

Scenario:TC_489 To verify that user is able to see following details on devices on which he accessed his account:
Given Login into Mobiquity Portal as System admin Maker
When Navigate to SessionManagement 
And Click On My Session and View any record details
Then Assert all the fields 

# Author:Niroop H N
# Last Updated:
# Comments 
# Scenario_ID : TC_627
#             :TC_1966
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_491 To verify that user is able to Logout from all devices except the current session.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to SessionManagement 
#And Click On My Session and View any record details
And Click On My Sessions and logout 



# Author:Niroop H N 
# Last Updated:
# Comments 
# Scenario_ID : TC_623
#             : TC_1962  
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_493 To verify that user is able to view details of a record
Given Login into Mobiquity Portal as System admin Maker
When Navigate to SessionManagement 
And Click On My Session and View any record details


# Author:Niroop H N
# Last Updated:
# Comments 
# Scenario_ID : TC_628
#             :TC_1967
#TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    @UAT
    # test case tags
    @test
Scenario:TC_490 To verify that user is able to delete all devices except the current one. User can't delete the currently working device.
Given Login into Mobiquity Portal as System admin Maker
When Navigate to SessionManagement 
#And Click On My Session and View any record details
And Click On My Sessions and Delete

#----------------------------Commented since the same scenario is there in session management feature---------------------
# Author:Niroop H N
# Last Updated:
# Comments 
# Scenario_ID : TC_621
#             :TC_1960
#TAGS
    #version tags
   # @x.04 @x.06 @x.07 @x.09
    # suite tags
   # @UAT
    # test case tags
 #   @test

#Scenario:TC_492 To verify that admin is able to search user using identifiers like mobile number/email id of user.
#Given Login into Mobiquity Portal as System admin Maker
#When Navigate to SessionManagement 
#And Click On All Session and Enter Number to search
