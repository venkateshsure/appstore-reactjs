// Write your code here

import './index.css'

const AppItem = props => {
  const {each} = props
  const {appName, imageUrl} = each
  return (
    <li className="list-con">
      <img alt={appName} className="image-con" src={imageUrl} />
      <p className="para">{appName}</p>
    </li>
  )
}

export default AppItem
