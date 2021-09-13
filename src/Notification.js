import { GlobalContext } from './GlobalContext'


const Notification = () => {
  return (
    <GlobalContext.Consumer>
      {props => {
        if (props.visible) {
          return (
            <div style={{
            background:`${props.color}`,
            border: '2px solid',
            borderColor: `${props.border}`,
            margin: '5px',
            padding: '2.5px 5px',
            fontFamily: 'sans-serif'
            }}>
                 
                <h2>Lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                
            </div>
          )
        } 
        else {
          return null
        }
      }}
    </GlobalContext.Consumer>
  )
}



export default Notification
