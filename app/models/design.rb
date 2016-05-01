# == Schema Information
#
# Table name: designs
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :text             not null
#  design_url  :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Design < ActiveRecord::Base
  validates :title, :description, :design_url, :user_id, presence: true


  belongs_to :user
end
