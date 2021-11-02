![Headimage](https://user-images.githubusercontent.com/44175105/139759107-877c629e-c802-44a3-9854-62d6bbb94b5f.png)

# README

Live version # [here](https://yoricks-stacks.herokuapp.com/#/)


Yoricks Stacks is a single page clone of Stack Overflow, a question and answer site for software programming topics.
Yoricks Stacks was built with a Ruby on Rails stack, with a Postgresql database, and a React/Redux frontend.





# Sample Pages #

Log in page:

![Login](https://user-images.githubusercontent.com/44175105/62799565-013ac400-ba96-11e9-83f0-0a1a4ca9cad5.png)



Error handling for invalid credentials:

![Login Error](https://user-images.githubusercontent.com/44175105/62799779-8c1bbe80-ba96-11e9-9585-26ad1599345f.png)


Users see different interface options depending on, for example, whether logged in, whether on a question page they authored, or whether a displayed answer is theirs.


Question page when logged out:

![Logged Out Question Show](https://user-images.githubusercontent.com/44175105/62800093-5cb98180-ba97-11e9-931e-22b57cd0803a.png)


Question page when logged in, top nav bar shows log out option, question allows answer to be posted:
![Logged In Question Show](https://user-images.githubusercontent.com/44175105/62800176-a609d100-ba97-11e9-8d4e-3a260d164bb8.png)


Users see an 'Edit answer' option for authored answers:

![Edit answer](https://user-images.githubusercontent.com/44175105/62800384-22041900-ba98-11e9-9526-11997fcefe6b.png)


Edit pages have forms pre-filled out with prior submission data:

![Edit form](https://user-images.githubusercontent.com/44175105/62800534-79a28480-ba98-11e9-8210-a4ef34c2192b.png)

Users can search questions by tags:
![tagged questions](https://user-images.githubusercontent.com/44175105/62800679-ce45ff80-ba98-11e9-915c-c9ff55d3d83e.png)




# Code Snippets #
QuestionVote model to keep track of user votes on questions:

![questionvote](https://user-images.githubusercontent.com/44175105/65891831-10cddf00-e35a-11e9-8361-75daca0a2c54.png)

QuestionVote controller destroy action, which handles undoing an upvote/downvote:

![questionvotecontroller](https://user-images.githubusercontent.com/44175105/65892287-dc0e5780-e35a-11e9-9835-7fdfd3dc1700.png)

Session login component render:

![sessionlogin](https://user-images.githubusercontent.com/44175105/65892311-e7618300-e35a-11e9-8bbb-2d318812b44a.png)

Entities reducer, representing slice of state:

![reducers](https://user-images.githubusercontent.com/44175105/65892324-ee889100-e35a-11e9-9f1a-b8be6b03ac42.png)
