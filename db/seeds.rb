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
Brand.create!(name: "Gillan and son")
Brand.create!(name: "Atlas", logo: "Atlas.png")
Brand.create!(name: "Caesarstone", logo: "Caesarstone.png")
Brand.create!(name: "Cimstone", logo: "Cimstone.png")
Brand.create!(name: "Compac", logo: "Compac.png")
Brand.create!(name: "Dekton", logo: "Dekton.png")
Brand.create!(name: "Fugen", logo: "Fugen.png")
Brand.create!(name: "Silestone", logo: "Silestone.png")
Brand.create!(name: "Silkstone", logo: "Silkstone.png")

Material.destroy_all
Material.create!(name: "Baltic Brown", material_type: "Granite", photo: "Granite_Baltic_Brown.jpeg")
Material.create!(name: "Black Pearl", material_type: "Granite", photo: "Granite_Black_Pearl.jpeg")
Material.create!(name: "Cosmic Black", material_type: "Granite", photo: "Granite_Cosmic_Black.jpeg")
Material.create!(name: "Star Galaxy", material_type: "Granite", photo: "Granite_Star_Galaxy.jpeg")
Material.create!(name: "Steel Grey", material_type: "Granite", photo: "Granite_Steel_Grey.jpeg")
Material.create!(name: "Supreme Black", material_type: "Granite", photo: "Granite_Supreme_Black.jpeg")

Material.create!(name: "Aspen White", material_type: "Quartz", photo: "Quartz_Aspen_White.jpeg")
Material.create!(name: "Blanco Superior", material_type: "Quartz", photo: "Quartz_Blanco_Superior.jpeg")
Material.create!(name: "Calacatta Gold", material_type: "Quartz", photo: "Quartz_Calacatta_Gold.jpeg")
Material.create!(name: "Calacatta Legera", material_type: "Quartz", photo: "Quartz_Calacatta_Legera.jpeg")
Material.create!(name: "Carrara Imperial", material_type: "Quartz", photo: "Quartz_Carrara_Imperial.jpeg")
Material.create!(name: "Grey Starlight", material_type: "Quartz", photo: "Quartz_Grey_Starlight.jpeg")
Material.create!(name: "Nero Calacatta", material_type: "Quartz", photo: "Quartz_Nero_Calacatta.jpeg")
Material.create!(name: "Nero Marquina", material_type: "Quartz", photo: "Quartz_Nero_Marquina.jpeg")
Material.create!(name: "Pure Grey", material_type: "Quartz", photo: "Quartz_Pure_Grey.jpeg")
Material.create!(name: "White Starlight", material_type: "Quartz", photo: "Quartz_White_Starlight.jpeg")

# cimstone

Material.create!(name: "Calacatta Magnificio", material_type: "Quartz", photo: "Quartz_Calacatta_Magnificio.jpeg")
Material.create!(name: "Calacatta Venato", material_type: "Quartz", photo: "Quartz_Calacatta_Venato.jpeg")
Material.create!(name: "Emprire Black", material_type: "Quartz", photo: "Quartz_Emprire_Black.jpeg")
Material.create!(name: "Lapland", material_type: "Quartz", photo: "Quartz_Lapland.jpeg")
Material.create!(name: "Nordic Grey", material_type: "Quartz", photo: "Quartz_Nordic_Grey.jpeg")
Material.create!(name: "Statuario Venatino", material_type: "Quartz", photo: "Quartz_Statuario_Venatino.jpeg")

# compac

Material.create!(name: "Cobweb", material_type: "Quartz", photo: "Quartz_Cobweb.jpeg")
Material.create!(name: "Ice_Max_Black", material_type: "Quartz", photo: "Quartz_Ice_Max_Black.jpeg")
Material.create!(name: "Ice_Max_Pure", material_type: "Quartz", photo: "Quartz_Ice_Max_Pure.jpeg")
Material.create!(name: "Nebulous Gold", material_type: "Quartz", photo: "Quartz_Nebulous_Gold.jpeg")
Material.create!(name: "Unique Calacatta Black", material_type: "Quartz", photo: "Quartz_Unique_Calacatta_Black.jpeg")
Material.create!(name: "Unique Portoro", material_type: "Quartz", photo: "Quartz_Unique_Portoro.jpeg")
Material.create!(name: "Unique Statuario", material_type: "Quartz", photo: "Quartz_Unique_Statuario.jpeg")
Material.create!(name: "Unique Statuario Gold", material_type: "Quartz", photo: "Quatz_Unique_Statuario_Gold.jpeg")

# caesarstone

Material.create!(name: "Agger Grey", material_type: "Quartz", photo: "Quartz_Agger_Grey.jpeg")
Material.create!(name: "Black Tempal", material_type: "Quartz", photo: "Quartz_Black_Tempal.jpeg")
Material.create!(name: "Concrete", material_type: "Quartz", photo: "Quartz_Concrete.jpeg")
Material.create!(name: "Mink", material_type: "Quartz", photo: "Quartz_Mink.jpeg")
Material.create!(name: "Oxidian", material_type: "Quartz", photo: "Quartz_Oxidian.jpeg")
Material.create!(name: "Piatra Grey", material_type: "Quartz", photo: "Quartz_Piatra_Grey.jpeg")
Material.create!(name: "Raindream", material_type: "Quartz", photo: "Quartz_Raindream.jpeg")
Material.create!(name: "Rugged Concrete", material_type: "Quartz", photo: "Quartz_Rugged_Concrete.jpeg")
Material.create!(name: "Woodlands", material_type: "Quartz", photo: "Quartz_Woodlands.jpeg")

# silestone

Material.create!(name: "Charcoal Soapstone", material_type: "Quartz", photo: "Quartz_Charcoal_Soapstone.jpeg")
Material.create!(name: "Desert Silver", material_type: "Quartz", photo: "Quartz_Desert_Silver.jpeg")
Material.create!(name: "Et Noir", material_type: "Quartz", photo: "Quatz_Et_Noir.jpeg")
Material.create!(name: "Iconic White", material_type: "Quartz", photo: "Quartz_Iconic_White.jpeg")
Material.create!(name: "Miami White", material_type: "Quartz", photo: "Quartz_Miami_White.jpeg")
Material.create!(name: "Pearl Jasmine", material_type: "Quartz", photo: "Quartz_Pearl_Jasmine.jpeg")
Material.create!(name: "Poblenou", material_type: "Quartz", photo: "Quartz_Poblenou.jpeg")
Material.create!(name: "Tebas Black", material_type: "Quartz", photo: "Quartz_Tebas_Black.jpeg")

# silkstone

Material.create!(name: "Angelo White", material_type: "Quartz", photo: "Quartz_Angelo_White.jpeg")
Material.create!(name: "Carrara Quartz", material_type: "Quartz", photo: "Quartz_Carrara_Quartz.jpeg")
Material.create!(name: "Gris Venato", material_type: "Quartz", photo: "Quartz_Gris_Venato.jpeg")
Material.create!(name: "Nero Venato", material_type: "Quartz", photo: "Quartz_Nero_Venato.jpeg")
Material.create!(name: "Obsidian", material_type: "Quartz", photo: "Quartz_Obsidian.jpeg")
Material.create!(name: "Venato Royale", material_type: "Quartz", photo: "Quartz_Venato_Royale.jpeg")

# fugen

Material.create!(name: "Arabesque", material_type: "Quartz", photo: "Quartz_Arabesque.jpeg")
Material.create!(name: "Avalanche", material_type: "Quartz", photo: "Quartz_Avalanche.jpeg")
Material.create!(name: "Bianco Eclipsia", material_type: "Quartz", photo: "Quartz_Bianco_Eclipsia.jpeg")
Material.create!(name: "Black Shimmer", material_type: "Quartz", photo: "Quartz_Black_Shimmer.jpeg")
Material.create!(name: "Cream Mirror", material_type: "Quartz", photo: "Quartz_Cream_Mirror.jpeg")
Material.create!(name: "Eternal", material_type: "Quartz", photo: "Quartz_Eternal.jpeg")
Material.create!(name: "Euphrates", material_type: "Quartz", photo: "Quartz_Euphrates.jpeg")
Material.create!(name: "Grey Mirror", material_type: "Quartz", photo: "Quartz_Grey_Mirror.jpeg")

# dekton

Material.create!(name: "Aeris", material_type: "Ceramic", photo: "Ceramic_Aeris.jpeg")
Material.create!(name: "Eter", material_type: "Ceramic", photo: "Ceramic_Eter.jpeg")
Material.create!(name: "Helena", material_type: "Ceramic", photo: "Ceramic_Helena.jpeg")
Material.create!(name: "Khalo", material_type: "Ceramic", photo: "Ceramic_Khalo.jpeg")
Material.create!(name: "Laurent", material_type: "Ceramic", photo: "Ceramic_Laurent.jpeg")
Material.create!(name: "Liquid Embers", material_type: "Ceramic", photo: "Ceramic_Liquid_Embers.jpeg")
Material.create!(name: "Liquid Shell", material_type: "Ceramic", photo: "Ceramic_Liquid_Shell.jpeg")
Material.create!(name: "Liquid Sky", material_type: "Ceramic", photo: "Ceramic_Liquid_Sky.jpeg")

# atlas

Material.create!(name: "Calacatta Antique", material_type: "Ceramic", photo: "Ceramic_Calacatta_Antique.jpeg")
Material.create!(name: "Calacatta Borghini", material_type: "Ceramic", photo: "Ceramic_Calacatta_Borghini.jpeg")
Material.create!(name: "Calacatta Delicato", material_type: "Ceramic", photo: "Ceramic_Calacatta_Delicato.jpeg")
Material.create!(name: "Calacatta Extra", material_type: "Ceramic", photo: "Ceramic_Calacatta_Extra.jpeg")
Material.create!(name: "Calacatta Imperiale", material_type: "Ceramic", photo: "Ceramic_Calacatta_Imperiale.jpeg")
Material.create!(name: "Calacatta Royal", material_type: "Ceramic", photo: "Ceramic_Calacatta_Royal.jpeg")
