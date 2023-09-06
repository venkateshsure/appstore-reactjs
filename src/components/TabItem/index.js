// Write your code here
import './index.css'

const TabItem = props => {
  const {each, selectTab, isActive} = props
  const {tabId, displayText} = each

  const getStyle = isActive ? 'style' : ''

  const getSelectTab = () => {
    selectTab(tabId)
  }
  return (
    <li onClick={getSelectTab} className={`${getStyle} list-con-tab`}>
      <button type="button">{displayText}</button>
    </li>
  )
}

export default TabItem
