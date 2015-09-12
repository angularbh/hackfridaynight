# hackfridaynight
hackthon 

'/users/?q=query' - GET - List of all users or search by name using query
'/users/' - POST - Create user
'/users/me' - GET - Get logged user
'/users/me' - PUT - Update logged user profile
'/users/available' - GET - Get all users that can be added as a friend
'/users/:userId' - GET - Get user with given ID
'/users/:userId' - DELETE - Delete user with given ID
'/users/password/:userId' - PUT - Change user's password
'/friendships/' - GET - Get all friendships
'/friendships/me' - GET - Get all logged user's friendships
'/friendships/requests' - GET - Get all friendships that requests logged user
'/friendships/requested' - GET - Get friendships that were requested by logged user
'/friendships/:friendId' - GET - Get friendships between logged user and user with the ID provided
'/friendships/:friendId' - POST - Invite user with the ID provided
'/friendships/:friendId' - PUT - Accept request from user with ID provided
'/friendships/:friendId' - DELETE - Reject requests from user with ID provided
'/friendships/vip/:friendId' - POST - Set friendship with user as VIP
'/friendships/vip/:friendId' - DELETE - Unset friendship with user as VIP
'/friendships/block/:friendId' - POST - Block friendship with user
'/friendships/block/:friendId' - DELETE - Block friendship with user

All endpoints are authenticated/authorized, but creating user. This endpoint is public. And the endpoint to delete user is authorized only to a admin.
