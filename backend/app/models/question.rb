# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  content    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
  has_many :answers, inverse_of: :question, dependent: :destroy
  # validates_presence_of :content

  accepts_nested_attributes_for :answers

  def attributes
    {
      id: id,
      content: content,
      answers: answers
    }

  end
end
