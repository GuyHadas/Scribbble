# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  x_pos      :integer          not null
#  y_pos      :integer          not null
#  user_id    :integer          not null
#  design_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ActiveRecord::Base
  validates :body, :x_pos, :y_pos, :user_id, :design_id, presence: true

  belongs_to :user
  belongs_to :design
end
