import React from "react"
import AnswerItem from './AnswerItem'

export default class QuestionItem extends React.Component{
  render(){
    return(
      <tr key={question.id}>
        <td>{ this.props.question.content }</td>
      </tr>      
    )
  }
}
