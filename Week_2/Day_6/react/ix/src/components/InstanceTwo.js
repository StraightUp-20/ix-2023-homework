import './InstanceTwo.css'

export default function InstanceTwo(props) {
  return <div className="container mt-5 mb-5 display-5">
    My intro to React
  <h1 className='text-start fs-4 mt-2'>I am currently in: {props.currentlyAt} </h1>

  </div>
 
}
