import React from "react"
import QuestionItem from './QuestionItem'

export default class QuestionList extends React.Component{
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
                      <span>Edit</span>
                      <span>Show</span>
                      <span>Delete</span>
                    </td>
                  </tr>
              )
            })}
            
          </tbody>
        </table>
      </div>
    )
  }
}
