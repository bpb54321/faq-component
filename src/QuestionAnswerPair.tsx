import css from "./QuestionAnswerPair.module.css";
import clsx from "clsx";
import {useState} from "react";
import {GoTriangleDown} from "react-icons/go";

export interface IQuestionAnswerPair {
    question: string;
    answer: string;
}

interface IQuestionAnswerPairProps extends IQuestionAnswerPair {
    isInitiallyExpanded: boolean;
}

const QuestionAnswerPair = ({question, answer, isInitiallyExpanded}: IQuestionAnswerPairProps) => {
    const handleClick = () => {
        setIsExpanded((previousIsExpanded) => !previousIsExpanded);
    };
    const [isExpanded, setIsExpanded] = useState<boolean>(isInitiallyExpanded);
    return (
        <div className={css.container}>
            <dt onClick={handleClick}
                className={css.question}
            >
                <GoTriangleDown
                    className={clsx({
                        [css.triangle]: true,
                        [css.rotatedRight]: !isExpanded,
                    })}
                />
                {question}
            </dt>
            <dd className={clsx({
                [css.answer]: true,
                [css.expanded]: isExpanded,
            })}>{answer}</dd>
        </div>
    );
}

export default QuestionAnswerPair;