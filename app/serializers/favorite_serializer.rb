class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :exercise_id, :exercise, :user, :user_id
end
