import React, {useStatem, useEffect, useMemo} from 'react'

const Home = () => {
  const [count, setCount] = useState(1);
  
  const ListComponent = useMemo(() => {
    return <CountriesList />
  }, [])
  
  
  return (
    <>
      <h1>count settings</h1>
    
      <button onClick={() => setCount(count => count + 1)}>
        click here to re-render Countries list
      </button>
     
      {ListComponent} // value of this component is memoized
    </>
  )
}
