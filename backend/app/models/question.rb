# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  content    :text
#  answer     :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'numbers_in_words'


class Question < ApplicationRecord
  validates_presence_of :content, :answer

  def attributes
    {
      id: id,
      content: content,
      answer: answer
    }

  end
end
