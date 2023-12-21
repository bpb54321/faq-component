import './App.css'
import QuestionAnswerPair, { IQuestionAnswerPair } from "./QuestionAnswerPair.tsx";

const FAQ = [
  {
    question: "How many bones does a cat have?",
    answer: "A cat has 230 bones - 6 more than a human",
  },
  {
    question: "How much do cats sleep?",
    answer: "The average cat sleeps 12-16 hours per day",
  },
  {
    question: "How long do cats live",
    answer: "Outdoor cats live 5 years on average. Indoor cats live 15 years on average.",
  },
];

interface FAQComponentProps {
  questions: IQuestionAnswerPair[];
}

const FAQComponent = ({ questions }: FAQComponentProps) => {
  // Create this component
  return (
    <dl>
      {questions.map(({question, answer}, index) => {
        return <QuestionAnswerPair question={question} answer={answer} isInitiallyExpanded={index === 0} />
      })}
    </dl>
  );
}

function App() {
  return <FAQComponent questions={FAQ} />
}

export default App
