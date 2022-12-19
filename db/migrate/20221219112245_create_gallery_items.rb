class CreateGalleryItems < ActiveRecord::Migration[7.0]
  def change
    create_table :gallery_items do |t|
      t.string :photos
      t.string :description

      t.timestamps
    end
  end
end
