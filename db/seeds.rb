# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# tq1 = (tag_id: tag1.id, question_id: question1.id)

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
user8 = User.create(username: 'Karl Popper', email: 'popper@shakespeare.com', password: '123456')
user9 = User.create(username: 'Bertrand Russell', email: 'russell@shakespeare.com', password: '123456')
user10 = User.create(username: 'William James', email: 'james@shakespeare.com', password: '123456')
user11 = User.create(username: 'Peter Singer', email: 'singer@shakespeare.com', password: '123456')
user12 = User.create(username: 'Martin Heidegger', email: 'heidegger@shakespeare.com', password: '123456')
user13 = User.create(username: 'Emmanuel Levinas', email: 'levinas@shakespeare.com', password: '123456')
user14 = User.create(username: 'John Searle', email: 'searle@shakespeare.com', password: '123456')
user15 = User.create(username: 'Immanuel Kant', email: 'kant@shakespeare.com', password: '123456')
user16 = User.create(username: 'John Stuart Mill', email: 'mill@shakespeare.com', password: '123456')
user17 = User.create(username: 'David Hume', email: 'hume@shakespeare.com', password: '123456')
user18 = User.create(username: 'Johann Fichte', email: 'fichte@shakespeare.com', password: '123456')


question1 = Question.create(title: 'Didst anyone knoweth Yorick?', body: 'he seemed nice', author_id: user2.id)
question2 = Question.create(title: 'Art Rosencrantz and Guildenstern dead?', body: 'I hast a book idea ift be true', author_id: user1.id)
question3 = Question.create(title: 'Is it a carrot or a turnip?', body: 'I am not sure', author_id: user4.id)
question4 = Question.create(title: 'What is the world?', body: '?', author_id: user6.id)
question5 = Question.create(title: 'What is your aim in philosophy?', body: 'What do you wish to achieve?', author_id: user6.id)
question6 = Question.create(title: 'Shall I become an aeronaut?', body: 'If my philosophy is not any good, then I shall become an aeronaut. But if it is good, I shall become a philosopher."', author_id: user7.id)
question7 = Question.create(title: 'Is Platonic philosophy autocratic?', body: 'I think so, the opposition to an open society has origins in Plato', author_id: user8.id)
question8 = Question.create(title: 'Why do stupid people quote me?', body: 'A stupid mans report of what a clever man says can never be accurate, because he unconsciously translates what he hears into something he can understand', author_id: user9.id)
question9 = Question.create(title: 'Is psychology a full science today?', body: 'Mr. Chomsky thinks not, I must admit I am disappointed with the progress of the discipline', author_id: user10.id)
question10 = Question.create(title: 'Why do I write in philosophy journals arguing animals are worth more than infants?', body: 'Plot twist: I dont, Im just a troll, cant believe people take me seriously', author_id: user11.id)
question11 = Question.create(title: 'What word should I make up next so I can sound deep?', body: 'I was thinking "befindlichkeit", what say you?', author_id: user12.id)
question12 = Question.create(title: 'Have any of you written any work while in the trenches?', body: 'I found great solace in philosophy during my time serving in the Great War', author_id: user13.id)
question13 = Question.create(title: 'Is continental philosophy even philosophy?', body: 'Sounds like obscurantist nonsense to me', author_id: user14.id)
question14 = Question.create(title: 'What is the difference between a categorical and a hypothetical imperative?', body: 'Accepting a distinction', author_id: user15.id)
question15 = Question.create(title: 'Is there anything other than pleasure and pain?', body: 'It seems abundantly clear to me the chief principle of ethics is to maximize utility for the greatest number of people', author_id: user16.id)
question16 = Question.create(title: 'Why do they teach me so much in college?', body: 'Didnt they read the last paragraph of my "Enquiry Concerning Human Understanding" which (self-)refutes everything I wrote? Im incompetent', author_id: user17.id)
question17 = Question.create(title: 'What is the destination of the scholar?', body: 'Miserable undergrads will write exegetical works on my turgid writing that tries to answer this question', author_id: user18.id)




answer1 = Answer.create(body: 'Alas! Poor Yorick! I knew him, Horatio, a fellow of infinite jest, of most excellent fancy...', author_id: user1.id, question_id: question1.id)
answer2 = Answer.create(body: 'present', author_id: user3.id, question_id: question1.id)
answer3 = Answer.create(body: 'Its a turnip', author_id: user5.id, question_id: question3.id)
answer4 = Answer.create(body: 'The world is all that is the case. The world is the totality of facts, not of things. The world is determined by the facts, and by their being all the facts...', author_id: user7.id, question_id: question4.id)
answer5 = Answer.create(body: 'To show the fly the way out of the fly-bottle', author_id: user7.id, question_id: question5.id)
answer6 = Answer.create(body: 'After reading only the first sentence, I said to him "no, you must not become an aeronaut..."', author_id: user9.id, question_id: question6.id)
answer7 = Answer.create(body: 'Youve made up enough words for a thousand years of bad philosophy to propagate, no more please', author_id: user14.id, question_id: question11.id)
answer8 = Answer.create(body: 'I wrote the entirety of my "Tractatus" whilst in the trenches, where I was decorated with Austrias 2nd highest military honor', author_id: user7.id, question_id: question12.id)
answer9 = Answer.create(body: 'You are quite right to think that of it', author_id: user9.id, question_id: question13.id)
answer10 = Answer.create(body: 'Careful or Ill make up a new word to call you', author_id: user12.id, question_id: question13.id)


tag1 = Tag.create(name: 'Shakespeare')
tag2 = Tag.create(name: 'Beckett')
tag3 = Tag.create(name: 'logic')
tag4 = Tag.create(name: 'tragedy')
tag5 = Tag.create(name: 'Hamlet')
tag6 = Tag.create(name: 'absurdism')
tag7 = Tag.create(name: 'vegetable')
tag8 = Tag.create(name: 'tractatus')
tag9 = Tag.create(name: 'analytic-philosophy')
tag10 = Tag.create(name: 'Plato')
tag11 = Tag.create(name: 'democracy')
tag12 = Tag.create(name: 'Russell')
tag13 = Tag.create(name: 'psychology')
tag14 = Tag.create(name: 'Chomsky')
tag15 = Tag.create(name: 'bad-philosophy')
tag16 = Tag.create(name: 'continental-philosophy')
tag17 = Tag.create(name: 'utilitarianism')



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
tq12 = tag9.questions << question4
tq13 = tag9.questions << question5
tq14 = tag9.questions << question7
tq15 = tag9.questions << question10
tq16 = tag9.questions << question13
tq17 = tag10.questions << question7
tq18 = tag11.questions << question7
tq19 = tag12.questions << question8
tq20 = tag13.questions << question9
tq21 = tag13.questions << question15
tq22 = tag13.questions << question16
tq23 = tag14.questions << question9
tq24 = tag15.questions << question10
tq25 = tag15.questions << question11
tq26 = tag15.questions << question13
tq27 = tag15.questions << question16
tq28 = tag16.questions << question11
tq29 = tag16.questions << question12
tq30 = tag16.questions << question13
tq31 = tag16.questions << question14
tq32 = tag16.questions << question17
tq33 = tag17.questions << question14
tq34 = tag16.questions << question15
