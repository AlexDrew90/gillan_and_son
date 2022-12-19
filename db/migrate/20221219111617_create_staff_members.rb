class CreateStaffMembers < ActiveRecord::Migration[7.0]
  def change
    create_table :staff_members do |t|
      t.string :name
      t.string :photo
      t.string :job_title
      t.string :bio

      t.timestamps
    end
  end
end
