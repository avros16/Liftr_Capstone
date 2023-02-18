class User < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :exercises, through: :favorites

    has_secure_password

    validates :username, :email, uniqueness: true
end
