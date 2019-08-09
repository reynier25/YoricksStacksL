# README

Live version: https://yoricks-stacks.herokuapp.com/#/


Yoricks Stacks is a single page clone of Stack Overflow, a question and answer site for software programming topics.
Yoricks Stacks was built with a Ruby on Rails stack, with a Postgresql database, and a React/Redux frontend.

Features:

- Users can sign up with an email, username, and password
- Question/answer authors can edit their posts
- Users can upvote questions, only once per question/answer
- Site renders changes to page's DOM so only relevant components are updated on refresh
- Uses imports from react-router-dom to facilitate route creation


# Overview #


## Users ##

Users can create login credentials to gain access to question and answer create/edit functionality. Users supply
an email address, username, and password which must be at least 6 characters.

## Questions ##

Users can create questions which can be viewed publicly and answered by other logged in users. Questions
can be edited after submission by the author. The landing page displays all questions, and a count of
the total questions ever submitted. Each question links to its own page with submitted answers, similarly rendering a count
of the answers.


## Answers ##

Users can create answers which can be viewed publicly. Answers can be edited after submission by the author. Edit forms are pre-filled out with prior submission data.


## Tags ##

Users can see a list of all question tags and can search questions by tags.


## Voting ##

Users can upvote questions. The upvote count is rendered next to each question on the question show page. Users can also undo question upvotes.




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