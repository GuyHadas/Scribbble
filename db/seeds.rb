# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


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
    user_id: 1
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
    title: "Sail with me",
    description: "My favorite of my line designs. Think I'm goint to go with this one as my cover.",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/28941/screenshots/2680015/boat.jpg",
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
    title: "Cesky Rozhias splash page",
    description: "Would love some feedback please and thank you!",
    design_url: "https://d13yacurqjgara.cloudfront.net/users/70871/screenshots/2680234/crdribbble.jpg",
    user_id: 3
  },

])
