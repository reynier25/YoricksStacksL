# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all
Answer.destroy_all

user1 = User.create(username: 'Hamlet', email: 'hamlet@shakespeare.com', password: '123456')
user2 = User.create(username: 'Horatio', email: 'horatio@shakespeare.com', password: '123456')
user3 = User.create(username: 'Yorick', email: 'yorick@shakespeare.com', password: '123456')
user4 = User.create(username: 'Vladimir', email: 'vladimir@shakespeare.com', password: '123456')
user5 = User.create(username: 'Estragon', email: 'estragon@shakespeare.com', password: '123456')
user6 = User.create(username: 'Interlocutor', email: 'interlocutor@shakespeare.com', password: '123456')
user7 = User.create(username: 'Ludwig Wittgenstein', email: 'wittgenstein@shakespeare.com', password: '123456')


question1 = Question.create(title: 'Didst anyone knoweth Yorick?', body: 'well?', author_id: user2.id)
question2 = Question.create(title: 'Art Rosencrantz and Guildenstern dead?', body: 'I hast a book idea ift be true', author_id: user1.id)
question3 = Question.create(title: 'Is it a carrot or a turnip?', body: 'I am not sure', author_id: user4.id)
question4 = Question.create(title: 'What is the world?', body: 'Start from the beginning', author_id: user6.id)


answer1 = Answer.create(body: 'Alas! Poor Yorick! I knew him, Horatio, a fellow of infinite jest, of most excellent fancy...', author_id: user1.id, question_id: question1.id)
answer2 = Answer.create(body: 'present', author_id: user3.id, question_id: question1.id)


tag1 = Tag.create(name: 'Shakespeare')
tag2 = Tag.create(name: 'Beckett')
tag3 = Tag.create(name: 'logic')
tag4 = Tag.create(name: 'tragedy')
tag5 = Tag.create(name: 'Hamlet')
tag6 = Tag.create(name: 'absurdism')
tag7 = Tag.create(name: 'vegetable')
tag8 = Tag.create(name: 'tractatus')

# tq1 = (tag_id: tag1.id, question_id: question1.id)

tq1 = tag1.questions << question1
tq2 = tag1.questions << question2
tq3 = tag2.questions << question3
tq4 = tag3.questions << question4
tq5 = tag4.questions << question1
tq6 = tag5.questions << question1
tq7 = tag5.questions << question2
tq8 = tag6.questions << question2
tq9 = tag6.questions << question3
tq10 = tag7.questions << question3
tq11 = tag8.questions << question4
