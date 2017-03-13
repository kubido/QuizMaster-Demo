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

  before_create :convert_answer_number_to_words

  def convert_answer_number_to_words
    self.answer = NumbersInWords.in_words(answer.to_i) if answer_is_number?(self.answer)
  end

  def answer_is_number?(str)
    true if Float(str) rescue false
  end

  def valid_answer?(answer)
    answer = NumbersInWords.in_words(answer.to_i) if answer_is_number?(answer)
    self.answer == answer
  end

  def attributes
    {
      id: id,
      content: content,
      answer: answer
    }

  end
end
