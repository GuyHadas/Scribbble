# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("users")
Design.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("designs")
Comment.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!("comments")


users = User.create([
  { username: 'demo', password: 'asdfasdf'},
  { username: 'HenryB', password: 'asdfasdf'},
  { username: 'DesignerDude43', password: 'asdfasdf'},
  { username: 'RonArtist', password: 'asdfasdf'},
  { username: 'PaintBrunch88', password: 'asdfasdf'},
  { username: 'SculptorSamantha', password: 'asdfasdf'},
  { username: 'CatLover4Life', password: 'asdfasdf'},
  { username: 'DogLover4Life', password: 'asdfasdf'},
  { username: 'BabyDesignKid', password: 'asdfasdf'},
  { username: 'StoopKidLeftTheStoop', password: 'asdfasdf'},
  { username: 'LucyBananas21', password: 'asdfasdf'},
  { username: 'DesignMeUp123', password: 'asdfasdf'},
  { username: 'LogoFish99', password: 'asdfasdf'},
])

designs = Design.create([
  {
    title: "Deployed Product Engineering",
    description: "Shirt design for the Deployed Product Engineering Team. This team parachutes into a deployment, and builds infrastructure that bridges the Product Team to the Business Team.",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/25830/screenshots/2680055/dpe.png",
    user_id: 3
  },

  {
    title: "Paincil",
    description: "A concept I sketched up for my school project. Not sure if the eraser should be a heart or a brain?",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/156486/screenshots/2680488/paincil.jpg",
    user_id: 8
  },

  {
    title: "Gif test",
    description: "Another scene made in Cryengine, figuring out things as I go. Focusing on lighting and atmospherics.",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/13449/screenshots/2680359/giphy2.gif",
    user_id: 6
  },

  {
    title: "Fly with me",
    description: "A design from my La Come Di's 'Dolce' collection. We are launching a new print store soon. Appreciate the support :)",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/28941/screenshots/2680368/ballons.jpg",
    user_id: 2
  },

  {
    title: "Ride with me",
    description: "Thinking about changing the colors, not sure about the teal?",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/28941/screenshots/2680354/vespa.jpg",
    user_id: 2
  },

  {
    title: "Husky Love",
    description: "What my dog does all day long.",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/419081/screenshots/2418721/dog03.gif",
    user_id: 12
  },

  {
    title: "Sail with me",
    description: "My favorite of my line designs. Think I'm goint to go with this one as my cover.",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/28941/screenshots/2680015/boat.jpg",
    user_id: 2
  },

  {
    title: "Great Beard, Terrible Player.",
    description: "Doesn't take much to get too the free throw line, but at least the man can grow some facial hair.",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/26059/screenshots/2283762/20_nba_4_thebeard.jpg",
    user_id: 2
  },

  {
    title: "Chicken Heads",
    description: "Two options, which one do people prefer?",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/78433/screenshots/2680808/rooster_2016.png",
    user_id: 12
  },

  {
    title: "Imagineer Editor",
    description: "A snapshot of the app I built to edit images.",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/150039/screenshots/2680549/imageeditor.jpg",
    user_id: 4
  },

  {
    title: "Ice Cream Squad",
    description: "I scream for eyes cream",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/1060640/screenshots/2681036/gelato-dribbble1.png",
    user_id: 9
  },

  {
    title: "Rube Goldberg Happy Birthday Machine",
    description: "Dear Scribbble, I hope you find this machine useful to make that moment when everybody sing staring at you a little less awkward. Happy birthday!",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/291221/screenshots/1632938/dribbble_5_yearl.gif",
    user_id: 6
  },

  {
    title: "Cesky Rozhias splash page",
    description: "Would love some feedback please and thank you!",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/70871/screenshots/2680234/crdribbble.jpg",
    user_id: 3
  },

  {
    title: "Leap Ball-Frog",
    description: "Stephen Curry and LeBron James Who will come out on top?",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/99875/screenshots/2108890/nba_drib.gif",
    user_id: 8
  },

  {
    title: "Arya there?",
    description: "Love drawing characters from my favorite show in the world!",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/119484/screenshots/2636852/str.png",
    user_id: 10
  },

  {
    title: "Grandpa Shreds",
    description: "My grandpa is cooler than yours...",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/285475/screenshots/2106950/kick_push_dribbble.gif",
    user_id: 5
  },

  {
    title: "Outside Lands Patch: Beer",
    description: "Beer Lands returns to Outside Lands this year, but if August feels too far away, celebrate Cinco De Mayo in Golden Gate Park with your favorite cerveza!",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/31348/screenshots/2694885/patches-16.jpg",
    user_id: 11
  },

  {
    title: "Mountains Galore",
    description: "Can anyone guess where this was inspired from?",
    design_url: "http://res.cloudinary.com/guyhadas195/image/upload/v1462300528/l7rvtq45nmt0pnuvf1sj.png",
    user_id: 10
  },

  {
    title: "Baby Blake from Workaholics",
    description: "He was once a cuddly bear, now he's just Blake, which I guess is still a cuddly bear.",
    design_url: "http://res.cloudinary.com/guyhadas195/image/upload/v1462078226/dutrsxqfmjocgbv1kwax.png",
    user_id: 13
  },

  {
    title: "Logo Sketch",
    description: "Design concept for my new startup what do people think?",
    design_url: "http://res.cloudinary.com/guyhadas195/image/upload/v1462232761/mzw8gy3tydk7vtfo8r9g.png",
    user_id: 4
  },

  {
    title: "Big Mo",
    description: "This is Mo. Mo is a bad man. Don't be like Mo.",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/26844/screenshots/2695178/014.jpg",
    user_id: 7
  },

  {
    title: "MVP, Greatest player ever!",
    description: "Stop motion design of my favorite player, Steph Curry",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/26052/screenshots/2529956/stepbackcolor_dribbble.gif",
    user_id: 2
  },

  {
    title: "Star Wars gif",
    description: "I'm so happy Star Wars is back!",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/130603/screenshots/2295709/swamp_800x600_4.gif",
    user_id: 11
  },

  {
    title: "Squirrel City",
    description: "Two squirrels running along a weirdly colored log.",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/11431/screenshots/2422231/untitled-1.jpg",
    user_id: 9
  },

  {
    title: "Superheroes",
    description: "Launching a series of superhero iPhone apps.",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/10958/screenshots/1368887/shot.jpg",
    user_id: 6
  },

  {
    title: "Twisted",
    description: "Created for this months LoopdeLoop theme",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/285475/screenshots/1418440/twisted.gif",
    user_id: 5
  },

  {
    title: "Sad Tyrion",
    description: "Someone ran out of alcohol...",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/1071667/screenshots/2689805/dribble.jpg",
    user_id: 10
  },


])

comments = []

file = File.read("comments.txt")[1...-2].split("},").each.with_index do |comment, i|
  comment += "}"
  comment = comment[1..-1] unless i == 0
  comments.push(eval(comment))
end

comments = Comment.create(comments)
