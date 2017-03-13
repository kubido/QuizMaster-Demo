import React from "react"
import * as actions from "../actions/questionsActions"
import { connect } from "react-redux"

@connect((store) => {
  return {
    questions: store.questions.questions,
    question: store.questions.question,
    display_form: store.questions.display_form,
    action_type: store.questions.action_type,
  };
})

export default class QuestionList extends React.Component{

  deleteQuestion(question_id){
    this.props.dispatch(actions.deleteQuestion(question_id));
  }

  displayQuiz(question_id){
    this.props.dispatch(actions.displayQuestionQuiz(question_id));
  }

  displayQuestionFormEdit(question_id){
    this.props.dispatch(actions.displayQuestionFormEdit(question_id));
  }

  render(){    


    return(
      <div>        
        <table class="table table-striped table-hover ">
          <thead>
            <tr>
              <th>No</th>
              <th>Question</th>
              <th>Answer</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.questions.map(function(question, idx) {
              return (
                  <tr key={question.id}>
                    <td>{idx+1}.</td>
                    <td>{ question.content }</td>
                    <td>{ question.answer }</td>
                    <td>
                      <span class="btn btn-link" onClick={this.displayQuestionFormEdit.bind(this, question.id)} >Edit</span>
                      <span class="btn btn-link" onClick={this.displayQuiz.bind(this, question.id)} >Show</span>
                      <button class="btn btn-link" onClick={this.deleteQuestion.bind(this, question.id)}>Delete</button>
                    </td>
                  </tr>
              )
            }.bind(this)
            )}
            
          </tbody>
        </table>
      </div>
    )
  }
}
