interface ResultsProps {
  snippet: string;
  prompt: string;
  keywords: string[];
  onBack: any;
}
const Results: React.FC<ResultsProps> = (props) => {
  const keyWordElements = [];
  for (let i = 0; i < props.keywords.length; i++) {
    const element = <div key={i}>#{props.keywords[i]}</div>;
    keyWordElements.push(element);
  }

  return (
    <>
      <div>
        <div>
        <div>
          <b>Prompt</b>
        </div>
        <div>{props.prompt}</div>
        </div>
        <div>
        <div>
          <b>Snippet</b>
        </div>
        <div>{props.snippet}</div>
        </div>
        <div>
        <div>
          <b>Keywords</b>
        </div>
        <div>{keyWordElements}</div>
        </div>
      </div>
      <button onClick={props.onBack}>Back</button>
    </>
  )
}
export default Results;