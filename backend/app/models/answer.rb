# == Schema Information
#
# Table name: answers
#
#  id          :integer          not null, primary key
#  question_id :integer
#  content     :string
#  correct     :boolean
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Answer < ApplicationRecord
  belongs_to :question

  validates_presence_of :content
end
