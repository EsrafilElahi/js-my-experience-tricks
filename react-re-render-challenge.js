import React, {memo, useCallback, useMemo} from 'react';
import './style.css'

export function App() {
  const [count, setCount] = React.useState(0)
  const handleClick = () => setCount(c => c + 1)

  // first way - memoize the value both of them
  // const memoizedSecond = useMemo(() => (<Second />), []);
  // const memoizedFirst = useMemo(() => (<First />), []);

  return (
    <div className='app'>
      <button onClick={handleClick}>{`count: ${count}`}</button>
      <MemoizedFirst>
        <Second />
      </MemoizedFirst>

      // <First /> with React.memo
      // <Second /> with React.memo
    </div>
  )
}

const First = ({ children }) => {
  React.useEffect(() => {
    console.log('First rendered')
  })
  return <div>{children}</div>
}


const FirstAreEqual = (prev, next) => {
  return prev.children !== next.children
}

// second way - memo the First component with custom equality function as second parameter (React.memo doesn't work with children prop)
const MemoizedFirst = memo(First, FirstAreEqual)

const Second = () => {
  React.useEffect(() => {
    console.log('Second rendered')
  })
  return null
}
