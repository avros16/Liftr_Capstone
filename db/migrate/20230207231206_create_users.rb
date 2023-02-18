class CreateUsers < ActiveRecord::Migration[ 6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :weight
      t.string :goal
      t.string :personalBestSquat
      t.string :personalBestBench
      t.string :personalBestMile
      t.string :personalBestDeadlift
      t.string :bodyFatPercentage
      t.timestamps
    end
  end
end
