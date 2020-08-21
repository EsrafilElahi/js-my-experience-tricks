useEffect(async () => {
  const [sidebar, issue, comments] = await Promise.all([
  fetch('/get-sidebar'),
  fetch('/get-issue'),
  fetch('/get-comments')
  ])
}, []);


const useAllData = () => {
  const [sidebar, setSidebar] = useState();
  const [comments, setComments] = useState();
  const [issue, setIssue] = useState();
  
  useEffect(() => {
    const dataFetch = async () => {
      // waiting for allthethings in parallel
      const result = (
        await Promise.all([
        fetch(sidebarUrl),
        fetch(issueUrl),
        fetch(commentsUrl)
        ])).map((r) => r.json()
      );

      // and waiting a bit more - fetch API is cumbersome
      const [sidebarResult, issueResult, commentsResult] = await Promise.all(result);

      // when the data is ready, save it to state
      setSidebar(sidebarResult);
      setIssue(issueResult);
      setComments(commentsResult);
   };

    dataFetch();

    }, []);

  
  return { sidebar, comments, issue };
  
};

const App = () => {
  // all the fetches were triggered in parallel
  const { sidebar, comments, issue } = useAllData()
  // show loading state while waiting for all the data
  if (!sidebar  !comments  !issue) return 'loading';
  // render the actual app here and pass data from state to children

  return (
    <>
      <Sidebar data={state.sidebar} />
      <Issue comments={state.comments} issue={state.issue} />
    </>
  )
};
