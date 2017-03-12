class HomeController < ApplicationController
  def index
    @questions = Question.all
  end
end
