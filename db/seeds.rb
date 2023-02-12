# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Review.destroy_all
Material.destroy_all
Brand.destroy_all

Review.create!(name: "Rob", description: "We had quartz fitted today and the guys did a great job. The largest piece was too big to go in the lift so they had to carry it up the stairs. We are on the the third floor - ouch!!", rating: 5)
Review.create!(name: "Gill", description: "Highly recommend HD granite - excellent job with experienced fitters - very friendly team and have had lots of compliments about my worktops.", rating: 5)
Review.create!(name: "Sheila B", description: "Beautiful job, lovely service from start to finish. Helped me choose the right quartz. Would highly recommend to anyone.", rating: 5)
Review.create!(name: "Kathy", description: "A lovely guy called Darryl did our granite refit windowsill and renew silicone after fitted 10 years ago by another company. Nice guy and he’s done a fab job. Thanks for organising.", rating: 5)
Review.create!(name: "Beryl R", description: "The two lads Darryl and Aaron were really nice and polite and even tidied up afterwards. I would certainly recommend HD Granite to anyone looking to have new worktops fitted.", rating: 5)
Review.create!(name: "Pam", description: "Punctual and helpful fitters. Job was very clean and tidy. My kitchen looks amazing. Have passed details on to my friends.", rating: 5)

Brand.create!(id: 1, name: "Gillan and son", logo: "Gillan_and_son.png")
Brand.create!(id: 2, name: "Atlas", logo: "Atlas.png")
Brand.create!(id: 3, name: "Caesarstone", logo: "Caesarstone.png")
Brand.create!(id: 4, name: "Cimstone", logo: "Cimstone.png")
Brand.create!(id: 5, name: "Compac", logo: "Compac.png")
Brand.create!(id: 6, name: "Dekton", logo: "Dekton.png")
Brand.create!(id: 7, name: "Fugen", logo: "Fugen.png")
Brand.create!(id: 8, name: "Silestone", logo: "Silestone.png")
Brand.create!(id: 9, name: "Silkstone", logo: "Silkstone.png")

Material.create!(brand_id: 1, name: "Baltic Brown", material_type: "Granite", photo: "Granite_Baltic_Brown.jpeg")
Material.create!(brand_id: 1, name: "Black Pearl", material_type: "Granite", photo: "Granite_Black_Pearl.jpeg")
Material.create!(brand_id: 1, name: "Cosmic Black", material_type: "Granite", photo: "Granite_Cosmic_Black.jpeg")
Material.create!(brand_id: 1, name: "Star Galaxy", material_type: "Granite", photo: "Granite_Star_Galaxy.jpeg")
Material.create!(brand_id: 1, name: "Steel Grey", material_type: "Granite", photo: "Granite_Steel_Grey.jpeg")
Material.create!(brand_id: 1, name: "Supreme Black", material_type: "Granite", photo: "Granite_Supreme_Black.jpeg")

Material.create!(brand_id: 1, name: "Aspen White", material_type: "Quartz", photo: "Quartz_Aspen_White.jpeg")
Material.create!(brand_id: 1, name: "Blanco Superior", material_type: "Quartz", photo: "Quartz_Blanco_Superior.jpeg")
Material.create!(brand_id: 1, name: "Calacatta Gold", material_type: "Quartz", photo: "Quartz_Calacatta_Gold.jpeg")
Material.create!(brand_id: 1, name: "Calacatta Legera", material_type: "Quartz", photo: "Quartz_Calacatta_Legera.jpeg")
Material.create!(brand_id: 1, name: "Carrara Imperial", material_type: "Quartz", photo: "Quartz_Carrara_Imperial.jpeg")
Material.create!(brand_id: 1, name: "Grey Starlight", material_type: "Quartz", photo: "Quartz_Grey_Starlight.jpeg")
Material.create!(brand_id: 1, name: "Nero Calacatta", material_type: "Quartz", photo: "Quartz_Nero_Calacatta.jpeg")
Material.create!(brand_id: 1, name: "Nero Marquina", material_type: "Quartz", photo: "Quartz_Nero_Marquina.jpeg")
Material.create!(brand_id: 1, name: "Pure Grey", material_type: "Quartz", photo: "Quartz_Pure_Grey.jpeg")
Material.create!(brand_id: 1, name: "White Starlight", material_type: "Quartz", photo: "Quartz_White_Starlight.jpeg")

# cimstone

Material.create!(brand_id: 4, name: "Calacatta Magnificio", material_type: "Quartz", photo: "Quartz_Calacatta_Magnificio.jpeg")
Material.create!(brand_id: 4, name: "Calacatta Venato", material_type: "Quartz", photo: "Quartz_Calacatta_Venato.jpeg")
Material.create!(brand_id: 4, name: "Emprire Black", material_type: "Quartz", photo: "Quartz_Emprire_Black.jpeg")
Material.create!(brand_id: 4, name: "Lapland", material_type: "Quartz", photo: "Quartz_Lapland.jpeg")
Material.create!(brand_id: 4, name: "Nordic Grey", material_type: "Quartz", photo: "Quartz_Nordic_Grey.jpeg")
Material.create!(brand_id: 4, name: "Statuario Venatino", material_type: "Quartz", photo: "Quartz_Statuario_Venatino.jpeg")

# compac

Material.create!(brand_id: 5, name: "Cobweb", material_type: "Quartz", photo: "Quartz_Cobweb.jpeg")
Material.create!(brand_id: 5, name: "Ice Max Black", material_type: "Quartz", photo: "Quartz_Ice_Max_Black.jpeg")
Material.create!(brand_id: 5, name: "Ice Max Pure", material_type: "Quartz", photo: "Quartz_Ice_Max_Pure.jpeg")
Material.create!(brand_id: 5, name: "Nebulous Gold", material_type: "Quartz", photo: "Quartz_Nebulous_Gold.jpeg")
Material.create!(brand_id: 5, name: "Unique Calacatta Black", material_type: "Quartz", photo: "Quartz_Unique_Calacatta_Black.jpeg")
Material.create!(brand_id: 5, name: "Unique Portoro", material_type: "Quartz", photo: "Quartz_Unique_Portoro.jpeg")
Material.create!(brand_id: 5, name: "Unique Statuario", material_type: "Quartz", photo: "Quartz_Unique_Statuario.jpeg")
Material.create!(brand_id: 5, name: "Unique Statuario Gold", material_type: "Quartz", photo: "Quatz_Unique_Statuario_Gold.jpeg")

# caesarstone

Material.create!(brand_id: 3, name: "Agger Grey", material_type: "Quartz", photo: "Quartz_Agger_Grey.jpeg")
Material.create!(brand_id: 3, name: "Black Tempal", material_type: "Quartz", photo: "Quartz_Black_Tempal.jpeg")
Material.create!(brand_id: 3, name: "Concrete", material_type: "Quartz", photo: "Quartz_Concrete.jpeg")
Material.create!(brand_id: 3, name: "Mink", material_type: "Quartz", photo: "Quartz_Mink.jpeg")
Material.create!(brand_id: 3, name: "Oxidian", material_type: "Quartz", photo: "Quartz_Oxidian.jpeg")
Material.create!(brand_id: 3, name: "Piatra Grey", material_type: "Quartz", photo: "Quartz_Piatra_Grey.jpeg")
Material.create!(brand_id: 3, name: "Raindream", material_type: "Quartz", photo: "Quartz_Raindream.jpeg")
Material.create!(brand_id: 3, name: "Rugged Concrete", material_type: "Quartz", photo: "Quartz_Rugged_Concrete.jpeg")
Material.create!(brand_id: 3, name: "Woodlands", material_type: "Quartz", photo: "Quartz_Woodlands.jpeg")

# silestone

Material.create!(brand_id: 8, name: "Charcoal Soapstone", material_type: "Quartz", photo: "Quartz_Charcoal_Soapstone.jpeg")
Material.create!(brand_id: 8, name: "Desert Silver", material_type: "Quartz", photo: "Quartz_Desert_Silver.jpeg")
Material.create!(brand_id: 8, name: "Et Noir", material_type: "Quartz", photo: "Quatz_Et_Noir.jpeg")
Material.create!(brand_id: 8, name: "Iconic White", material_type: "Quartz", photo: "Quartz_Iconic_White.jpeg")
Material.create!(brand_id: 8, name: "Miami White", material_type: "Quartz", photo: "Quartz_Miami_White.jpeg")
Material.create!(brand_id: 8, name: "Pearl Jasmine", material_type: "Quartz", photo: "Quartz_Pearl_Jasmine.jpeg")
Material.create!(brand_id: 8, name: "Poblenou", material_type: "Quartz", photo: "Quartz_Poblenou.jpeg")
Material.create!(brand_id: 8, name: "Tebas Black", material_type: "Quartz", photo: "Quartz_Tebas_Black.jpeg")

# silkstone

Material.create!(brand_id: 9, name: "Angelo White", material_type: "Quartz", photo: "Quartz_Angelo_White.jpeg")
Material.create!(brand_id: 9, name: "Carrara Quartz", material_type: "Quartz", photo: "Quartz_Carrara_Quartz.jpeg")
Material.create!(brand_id: 9, name: "Gris Venato", material_type: "Quartz", photo: "Quartz_Gris_Venato.jpeg")
Material.create!(brand_id: 9, name: "Nero Venato", material_type: "Quartz", photo: "Quartz_Nero_Venato.jpeg")
Material.create!(brand_id: 9, name: "Obsidian", material_type: "Quartz", photo: "Quartz_Obsidian.jpeg")
Material.create!(brand_id: 9, name: "Venato Royale", material_type: "Quartz", photo: "Quartz_Venato_Royale.jpeg")

# fugen

Material.create!(brand_id: 7, name: "Arabesque", material_type: "Quartz", photo: "Quartz_Arabesque.jpeg")
Material.create!(brand_id: 7, name: "Avalanche", material_type: "Quartz", photo: "Quartz_Avalanche.jpeg")
Material.create!(brand_id: 7, name: "Bianco Eclipsia", material_type: "Quartz", photo: "Quartz_Bianco_Eclipsia.jpeg")
Material.create!(brand_id: 7, name: "Black Shimmer", material_type: "Quartz", photo: "Quartz_Black_Shimmer.jpeg")
Material.create!(brand_id: 7, name: "Cream Mirror", material_type: "Quartz", photo: "Quartz_Cream_Mirror.jpeg")
Material.create!(brand_id: 7, name: "Eternal", material_type: "Quartz", photo: "Quartz_Eternal.jpeg")
Material.create!(brand_id: 7, name: "Euphrates", material_type: "Quartz", photo: "Quartz_Euphrates.jpeg")
Material.create!(brand_id: 7, name: "Grey Mirror", material_type: "Quartz", photo: "Quartz_Grey_Mirror.jpeg")

# dekton

Material.create!(brand_id: 6, name: "Aeris", material_type: "Ceramic", photo: "Ceramic_Aeris.jpeg")
Material.create!(brand_id: 6, name: "Eter", material_type: "Ceramic", photo: "Ceramic_Eter.jpeg")
Material.create!(brand_id: 6, name: "Helena", material_type: "Ceramic", photo: "Ceramic_Helena.jpeg")
Material.create!(brand_id: 6, name: "Khalo", material_type: "Ceramic", photo: "Ceramic_Khalo.jpeg")
Material.create!(brand_id: 6, name: "Laurent", material_type: "Ceramic", photo: "Ceramic_Laurent.jpeg")
Material.create!(brand_id: 6, name: "Liquid Embers", material_type: "Ceramic", photo: "Ceramic_Liquid_Embers.jpeg")
Material.create!(brand_id: 6, name: "Liquid Shell", material_type: "Ceramic", photo: "Ceramic_Liquid_Shell.jpeg")
Material.create!(brand_id: 6, name: "Liquid Sky", material_type: "Ceramic", photo: "Ceramic_Liquid_Sky.jpeg")

# atlas

Material.create!(brand_id: 2, name: "Calacatta Antique", material_type: "Ceramic", photo: "Ceramic_Calacatta_Antique.jpeg")
Material.create!(brand_id: 2, name: "Calacatta Borghini", material_type: "Ceramic", photo: "Ceramic_Calacatta_Borghini.jpeg")
Material.create!(brand_id: 2, name: "Calacatta Delicato", material_type: "Ceramic", photo: "Ceramic_Calacatta_Delicato.jpeg")
Material.create!(brand_id: 2, name: "Calacatta Extra", material_type: "Ceramic", photo: "Ceramic_Calacatta_Extra.jpeg")
Material.create!(brand_id: 2, name: "Calacatta Imperiale", material_type: "Ceramic", photo: "Ceramic_Calacatta_Imperiale.jpeg")
Material.create!(brand_id: 2, name: "Calacatta Royal", material_type: "Ceramic", photo: "Ceramic_Calacatta_Royal.jpeg")
