
import React, { useCallback } from 'react'
import useQuizStore from '../../stores/use-quiz-store'


const Quiz = () => {
  const { quiz, incrementQuizProgress } = useQuizStore();
  const handleQuiznext = useCallback(() => {
    incrementQuizProgress();
  },[incrementQuizProgress]);

  return (
    <div>
      <h1>Quiz</h1>
      <span>progreso del quiz {quiz.percentageQuizCompleted} %</span>
      <button onClick={handleQuiznext}> Sigiente</button>
    </div>
    

  )
}

export default Quiz