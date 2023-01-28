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

Brand.destroy_all
Brand.create!(name: "Atlas", logo: "Atlas.png")
Brand.create!(name: "Caesarstone", logo: "Caesarstone.png")
Brand.create!(name: "Cimstone", logo: "Cimstone.png")
Brand.create!(name: "Compac", logo: "Compac.png")
Brand.create!(name: "Dekton", logo: "Dekton.png")
Brand.create!(name: "Fugen", logo: "Fugen.png")
Brand.create!(name: "Silestone", logo: "Silestone.png")
Brand.create!(name: "Silkstone", logo: "Silkstone.png")

Material.destroy_all
Material.create!(name: "Baltic Brown", type: "Granite", photo: "Granite_Baltic_Brown.jpeg")
Material.create!(name: "Black Pearl", type: "Granite", photo: "Granite_Black_Pearl.jpeg")
Material.create!(name: "Cosmic Black", type: "Granite", photo: "Granite_Cosmic_Black.jpeg")
Material.create!(name: "Star Galaxy", type: "Granite", photo: "Granite_Star_Galaxy.jpeg")
Material.create!(name: "Steel Grey", type: "Granite", photo: "Granite_Steel_Grey.jpeg")
Material.create!(name: "Supreme Black", type: "Granite", photo: "Granite_Supreme_Black.jpeg")


Material.create!(name: "Aspen White", type: "Quartz", photo: "Quartz_Aspen_White.jpeg")
Material.create!(name: "Blanco Superior", type: "Quartz", photo: "Quartz_Blanco_Superior.jpeg")
Material.create!(name: "Calacatta Gold", type: "Quartz", photo: "Quartz_Calacatta_Gold.jpeg")
Material.create!(name: "Calacatta Legera", type: "Quartz", photo: "Quartz_Calacatta_Legera.jpeg")
Material.create!(name: "Carrara Imperial", type: "Quartz", photo: "Quartz_Carrara_Imperial.jpeg")
Material.create!(name: "Grey Starlight", type: "Quartz", photo: "Quartz_Grey_Starlight.jpeg")
Material.create!(name: "Nero Calacatta", type: "Quartz", photo: "Quartz_Nero_Calacatta.jpeg")
Material.create!(name: "Nero Marquina", type: "Quartz", photo: "Quartz_Nero_Marquina.jpeg")
Material.create!(name: "Pure Grey", type: "Quartz", photo: "Quartz_Pure_Grey.jpeg")
Material.create!(name: "White Starlight", type: "Quartz", photo: "Quartz_White_Starlight.jpeg")
