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

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
