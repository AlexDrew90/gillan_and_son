# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Review.destroy_all
Review.create!(name: "Rob", description: "We had quartz fitted today and the guys did a great job. The largest piece was too big to go in the lift so they had to carry it up the stairs. We are on the the third floor - ouch!!", rating: 5)
Review.create!(name: "Gill", description: "Highly recommend HD granite - excellent job with experienced fitters - very friendly team and have had lots of compliments about my worktops.", rating: 5)
Review.create!(name: "Sheila B", description: "Beautiful job, lovely service from start to finish. Helped me choose the right quartz. Would highly recommend to anyone.", rating: 5)
Review.create!(name: "Kathy", description: "A lovely guy called Darryl did our granite refit windowsill and renew silicone after fitted 10 years ago by another company. Nice guy and he’s done a fab job. Thanks for organising.", rating: 5)
Review.create!(name: "Beryl R", description: "The two lads Darryl and Aaron were really nice and polite and even tidied up afterwards. I would certainly recommend HD Granite to anyone looking to have new worktops fitted.", rating: 5)
Review.create!(name: "Pam", description: "Punctual and helpful fitters. Job was very clean and tidy. My kitchen looks amazing. Have passed details on to my friends.", rating: 5)
