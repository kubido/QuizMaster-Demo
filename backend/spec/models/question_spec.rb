require 'spec_helper'

RSpec.describe Question, :type => :model do
  subject { described_class.create(content: "is USA is a country ?", answer: "Yes") }

  it "is valid create question with valid attributes" do 
    expect(subject).to be_valid
  end

  it "is valid update question" do 
    success = subject.update_attributes(content: "is Earth is a country ?", answer: "No" )
    expect(success).to eq(true)
  end

  it "is valid delete question" do 
    question = Question.create(content: "is USA is a country ?", answer: "Yes")
    question.destroy
    counter = Question.all.count
    expect(counter).to eq(0)
  end

  it "is convert number to words" do 
    question = Question.create(content: "how many day in a week ?", answer: 7)
    expect(question.answer).to eq("seven")
  end

  it "is valid answer with words" do 
    question = Question.create(content: "how many day in a week ?", answer: "seven")
    valid_answer = question.valid_answer?("seven")
    expect(valid_answer).to eq(true)
  end

  it "is valid answer with integer" do 
    question = Question.create(content: "how many day in a week ?", answer: "seven")
    valid_answer = question.valid_answer?(7)
    expect(valid_answer).to eq(true)
  end
end