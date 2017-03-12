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

require 'test_helper'

class AnswerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
