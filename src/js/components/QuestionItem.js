import React from "react"
import AnswerItem from './AnswerItem'

export default class QuestionItem extends React.Component{
  render(){
    return(
      <div>
        <h1>{ this.props.question.content }</h1>
        <h1>
          <small>

          </small>
        </h1>
      </div>
    )
  }
}
