import React, { Component } from 'react';
import questionsData from './ques.json'; // Importing the JSON file

class AssignmentQuestions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  componentDidMount() {
    // Fetch data from the JSON file and update the state
    this.setState({ questions: questionsData });
  }

  render() {
    const { questions } = this.state;

    return (
      <div>
        <h1>Assignment Questions</h1>
        <ul>
          {questions.map(question => (
            <li key={question.id}>
              <h3>{question.question}</h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AssignmentQuestions;
