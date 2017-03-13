class QuestionsController < ActionController::API
  before_action :set_question, only: [:show, :edit, :update, :destroy]

  def index
    questions = Question.all
    render json: questions
  end

  def show
    render json: @question
  end

  def create
    @question = Question.new(params_question)
    if @question.save
      render json: {success: true, data: @question}
    else
      render json: {status: "Error", message: @question.errors.full_messages.join(", ")}
    end
  end

  def update
    if @question.update_attributes(params_question)
      render json: {success: true, data: @question}
    else
      render json: {status: "Error", message: @question.errors.full_messages.join(", ")}
    end
  end

  def destroy
    if @question.destroy
      render json: {success: true, data: @question}
    else
      render json: {status: "Error", message: @question.errors.full_messages.join(", ")}
    end
  end

  def submit
    @question = Question.find(params[:question_id])
    answer = params_question[:answer]
    resp = {id: @question.id, correct: @question.valid_answer?(answer) }
    render json: {success: true, answer: resp} 
  end

  private

  def params_question    
    params.require(:question).permit(:content, :answer)
  end

  def set_question
    @question = Question.find(params[:id])
  end


end
