import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [anotherState, setAnotherState] = useState(false)

  // useEffect syntax

  // first  -> side-effect function
  // second -> cleanup function
  // third  -> comma separated dependency array

  // useEffect(() => {
  //   first
  
  //   return () => {
  //     second
  //   }
  // }, [count])
  
  // variation 1
  // runs on every render
  // useEffect(() => {
  //   console.log('useEffect - every render')
  //   alert('useEffect - every render')
  // })

  // variation 2
  // that runs on only first render and when 'count' changes
  // useEffect(() => {
  //   console.log('useEffect - initial render and when count changes')
  //   alert('useEffect - initial render and when count changes')
  // }, [count])

  // variation 3
  // that runs on only first render and when 'count' or 'anotherState' changes
  // useEffect(() => {
  //   console.log('useEffect - initial render and when count or anotherState changes')
  //   alert('useEffect - initial render and when count or anotherState changes')
  // }, [count, anotherState])


  // variation 4
  // that runs on only first render and when 'count' changes
  // useEffect(() => {
  //   console.log('useEffect - initial render and when count changes with cleanup')
  //   alert('useEffect - initial render and when count changes with cleanup')

  //   return () => {
  //     console.log('Cleanup - before next effect or unmount')
  //     alert('Cleanup - before next effect or unmount')
  //   }
  // }, [count])

  // variation 5
  // that runs on only first render with cleanup on unmount
  useEffect(() => {
    console.log('useEffect - initial render with cleanup on unmount')
    alert('useEffect - initial render with cleanup on unmount')

    return () => {
      console.log('Cleanup - on unmount')
      alert('Cleanup - on unmount')
    }
  }, [])

  function handleClick() {
    setCount(count + 1)
  }

  function anotherState() {
    setAnotherState(!anotherState)
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
      <br />
      Count Is: {count}
      <button onClick={anotherState}>Toggle Another State</button>
      <br />
      Another State Is: {anotherState.toString()}
    </div>
  )
}
  
  // variation 2
  // runs only once after initial render
  // useEffect(() => {
  //   console.log('useEffect - initial render')
  //   alert('useEffect - initial render')
  // }, [])


export default App
