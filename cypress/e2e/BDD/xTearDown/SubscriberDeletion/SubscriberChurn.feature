Feature: Churn Teardown

# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    # test case tags
    @TearDown
    @Smokeprerequisite
##############  Churn Subscriber ###########
Scenario:TC_625 To verify that System admin is able to Delete Churn Subscriber
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Enter Mobile number or KYC number of Churn Subscriber and click on Search
And User Click on eye button
And Click on delete
When Navigate to My Activity and Apply required filters1
And Assert the Deleted Churn Subscriber on time

# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    # test case tags
    @TearDown
    @Smokeprerequisite
Scenario:TC_626 To verify that System admin Checker can approve
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And User click on submitted user data of Chrun Subscriber
And User click on approve delete request



# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    # test case tags
    @TearDown
    @Smokeprerequisite
###########  churnSubscriberRegistrationBulkUpload ##########
Scenario:TC_627 To verify that System admin is able to Delete ChurnSubscriberRegistrationBulkUpload
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Enter Mobile number or KYC number of Churn Subscriber BulkUpload and click on Search
And User Click on eye button
And Click on delete
When Navigate to My Activity and Apply required filters1
And Assert the Deleted Churn Subscriber reg BulkUpload  on time

# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    # test case tags
    @TearDown
    @Smokeprerequisite
Scenario:TC_628 To verify that System admin Checker can approve
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And User click on submitted user data of Churn Subscriber BulkUpload
And User click on approve delete request



# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    # test case tags
    @TearDown
###########  churnSubscriberRegistrationChurnAprRej  ##########
Scenario:TC_629 To verify that System admin is able to Delete ChurnSubscriberRegistrationChurnAprRej
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Enter Mobile number or KYC number of ChurnSubscriberRegistrationChurnAprRej and click on Search
And User Click on eye button
And Click on delete
When Navigate to My Activity and Apply required filters1
And Assert the Deleted ChurnSubscriberRegistrationChurnAprRej on time

# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    # test case tags
    @TearDown
Scenario:TC_630 To verify that System admin Checker can approve
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And User click on submitted user data of ChurnSubscriberRegistrationChurnAprRej
And User click on approve delete request


# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    # test case tags
    @TearDown
###########  churnSubRegBatchReject  ##########
Scenario:TC_631 To verify that System admin is able to Delete ChurnSubRegBatchReject
Given Login into Mobiquity Portal as System admin Maker
When Navigate to User Management and Click on Manage Users
And Enter Mobile number or KYC number of ChurnSubRegBatchReject and click on Search
And User Click on eye button
And Click on delete
When Navigate to My Activity and Apply required filters1
And Assert the Deleted churnSubRegBatchReject on time

# Author: Rakesh
# Last Updated:
# Comments    :
# Test Case_ID :
    #TAGS
    #version tags
    @x.04 @x.06 @x.07 @x.09
    # suite tags
    # test case tags
    @TearDown
Scenario:TC_632 To verify that System admin Checker can approve
Given Login into Mobiquity Portal as System admin Checker1
When Navigate to Checker Approvals and filter by Submitted status
And User click on submitted user data of ChurnSubRegBatchReject
And User click on approve delete request

