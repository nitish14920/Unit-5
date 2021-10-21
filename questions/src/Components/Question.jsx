
export function Question({questions,i}){

    return(
        <div>
            <h1 data-testid="question">{questions[i].q}</h1>
            <h1 data-testid="answer">{questions[i].a}</h1>
        </div>
    )
}