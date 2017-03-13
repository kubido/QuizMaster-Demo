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
    question = Question.create(content: "is USA is a country ?", answer: 5)
    expect(question.answer).to eq("five")
  end

end