class FavoritesCoffee < ApplicationRecord
  belongs_to :user
  has_many :coffee
end
