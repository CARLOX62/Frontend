import React, {useContext} from 'react'

function Components1() {
  const contextValue = useContext(counterContext);
  return (
    <div>
      Components.1 Component {count}
    </div>
  )
}

export default Components1
