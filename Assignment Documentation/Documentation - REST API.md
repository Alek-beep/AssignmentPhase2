# Documentation - REST API
Git Repository URL : https://github.com/Alek-beep/AssignmentPhase1
# Routes in the application
The angular front end communicates with the back-end node.js server using routes. The system utilizes the RESTful system. Firstly it separates the concerns of the user interface from the data storage which is all done on the backend node.js server using the ability of javascript to read in from and write to JSON files. A JSON file is read and turned into a string which is then turned into a javascript object using JSON.parse(). This makes the processing of the data much easier, and also keeps it away from the user interface elements. The system is also stateless. Each request from the front end to the back end contains all of the information necessary for the request.

# /api/auth
The /api/auth route takes in the entered username and email on the user interface from the login form. It then checks if the request body contains data. After this check, the data from the users.json file is converted into a javascript object for easier processing. Using the find() function for javascript objects, the list of users is checked against the entered username and email from the log in form. If a user is found then a true JSON string is sent with the result along with the role of the user back to the front-end. Otherwise a false JSON is sent.
# /api/add
The /api/add route is used for adding a user to the system by storing it in the JSON file. The  route takes in the entered username and email on the user interface from the login form. It then checks if the request body contains data. After this check, the data from the users.json file is converted into a javascript object for easier processing. Using the find() function for javascript objects, the list of users is checked against the entered username and email from the log in form. If a user is found then a false JSON string is returned since an already present user can not be added. Otherwise a dummy element is created and filled with the relevant data from the request body and pushed onto the Users javascript object array. This is then converted back into a JSON string and stored in the users.json file along with sending back a true confirmation JSON string to the front-end.
# /api/remove_user
This route takes in a username from the front-end in the request body parameter. Then, the data from the users.json file is converted into a javascript object for easier processing. This object is searched for a matching username to the one from the request parameter. If the username is found then it is spliced out of the object using splice(). Then this updated JavaScript object is converted back into a JSON string and overwrites the users.json file. If this was successful then it responds with a true JSON string otherwise it responds to the front-end with a false JSON string.
# /api/add_group
This route is for adding a group to the list of groups. The route takes in a group name from the front-end via the request parameter of the route. It then checks if the request body contains data. Then, the data from the groups.json file is converted into a javascript object for easier processing.  A dummy element is filled with the relevant data including the group name from the front-end via the request parameter. Then this dummy element is pushed onto the end of the array of objects using push(). Then this new object is converted back into a JSON string and overwrites the groups.json file, updating it. If this was successful then it responds with a true JSON string otherwise it responds to the front-end with a false JSON string.
# /api/remove_group
This route is for removing a group from the list of groups. The route takes in a group name from the front-end via the request parameter of the route. It then checks if the request body contains data. Then, the data from the groups.json file is converted into a javascript object for easier processing. This object is then searched through for a group whose name matches the group name from the function parameter. Once a matching group is found, the corresponding group is spliced out of the object array using splice(). Then this new object is converted back into a JSON string and overwrites the groups.json file, updating it. If this was successful then it responds with a true JSON string otherwise it responds to the front-end with a false JSON string.
# /api/remove_user_from_group
This route is for removing a single user from a group. It takes in as parameters from the front-end the group name and the user to remove via the request body. It then checks if the request body contains data. Then, the data from the groups.json file is converted into a javascript object for easier processing. This object is then searched through for a group whose name matches the group name from the function parameter. Once a matching group is found, it then searches for a matching user to remove. If one is found then this user is spliced out from the object using the splice() function. Then this new object is converted back into a JSON string and overwrites the groups.json file, updating it. If this was successful then it responds with a true JSON string otherwise it responds to the front-end with a false JSON string.
# /api/remove_channel_from_group
This route is for removing a single channel from a group. It takes in as a parameters from the front-end the group name and the channel to remove. It then checks if the request body contains data. Then, the data from the groups.json file is converted into a javascript object for easier processing. This object is then searched through for a group whose name matches the group name from the function parameter. Once a matching group is found, it then searches for a matching channel to remove. If one is found then this channel is spliced out from the object using the splice() function. Then this new object is converted back into a JSON string and overwrites the groups.json file, updating it. If this was successful then it responds with a true JSON string otherwise it responds to the front-end with a false JSON string.
# /api/add_user_to_group
This route is for adding a single user to a group. It takes in as parameters from the front-end the group name and the user to add.  It then checks if the request body contains data. Then, the data from the groups.json file is converted into a javascript object for easier processing. This object is then searched through for a group whose name matches the group name from the function parameter. Once a matching group is found, it then searches for a matching user to add. Once a user is found, the user is added to the array associated with the users that are a part of the group in the javascript object. Then this new object is converted back into a JSON string and overwrites the groups.json file, updating it. If this was successful then it responds with a true JSON string otherwise it responds to the front-end with a false JSON string.
# /api/add_channel_to_group
This route is for adding a single channel to a group. It takes in as parameters from the front-end the group name and the channel to add to it. It then checks if the request body contains data. Then, the data from the groups.json file is converted into a javascript object for easier processing. This object is then searched through for a group whose name matches the group name from the function parameter. Once the group name is found, a new channel is pushed onto the channel array using the push() function filled with a corresponding element {channelName:req.body.channel, users:[]} to keep the JSON file consistent. Then this new object is converted back into a JSON string and overwrites the groups.json file, updating it. If this was successful then it responds with a true JSON string otherwise it responds to the front-end with a false JSON string.