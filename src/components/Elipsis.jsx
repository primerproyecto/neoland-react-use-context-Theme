import React, {useState} from 'react'

const Elipsis = ({children}) => {
    console.log('que es children', children, typeof children)

    const [turron, setTurron] = useState(children)

    

  return (
    <div>
      {turron} - {turron.length} - { turron.toLowerCase()} - {turron.innerWidth}
    </div>
  )
}

export default Elipsis
