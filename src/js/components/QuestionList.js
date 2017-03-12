import React from "react"
import QuestionItem from './QuestionItem'

export default class QuestionList extends React.Component{
  render(){
    return(
      <div>
        <button onClick={this.displayQuestionForm.bind(this, 'new')}>Create new Question</button>
        <ul>
          {questions.map(question => {
            return (
                <li key={question.id}>
                  <QuestionItem question={question}></QuestionItem>
                </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
