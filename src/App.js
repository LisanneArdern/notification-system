import GlobalProvider from './GlobalContext'
import { GlobalContext } from './GlobalContext'
import React, { Fragment } from 'react'
import Notification from './Notification'
import styled from 'styled-components'

function App() {
  return (
    <div>
      <GlobalProvider>
        <GlobalContext.Consumer>
          {context => (
              <React.Fragment>
                <Button onClick={context.showSuccess}>Success</Button>
                <Button onClick={context.showInformation}>Information</Button>
                <Button onClick={context.showError}>Error</Button>
                <Button onClick={context.showWarning}>Warning</Button>
              </React.Fragment>
            )
          }

        </GlobalContext.Consumer>
        <div>
          <Notification/>
        </div>
      </GlobalProvider>
    </div>
  )
}
const Button = styled.button`
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  padding: 1px 10px;
  text-align: center;
  margin: 0 1px 1px 0;
  font-weight: 300px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);`



export default App
