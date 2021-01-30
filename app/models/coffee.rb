class Coffee < ApplicationRecord
  has_many :comments
  belongs_to :favorites
end
