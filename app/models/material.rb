class Material < ApplicationRecord
  MATERIAL_TYPES = ['Granite', 'Quartz', 'Ceramic'].freeze
  belongs_to :brand
  has_one_attached :photo
end
