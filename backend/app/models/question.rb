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

  # before_create :convert_answer_number_to_words

  # def convert_answer_number_to_words
  #   answer = NumbersInWords.in_words(answer) if answer.is_a?(Numeric)
  # end

  def attributes
    {
      id: id,
      content: content,
      answer: answer
    }

  end
end
