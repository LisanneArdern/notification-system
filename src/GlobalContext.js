import React from 'react'

export const GlobalContext = new React.createContext()

export default class GlobalProvider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        visible: false,
        color: '',
        border: '',
        showSuccess : this.showSuccess,
        showInformation: this.showInformation,
        showError: this.showError,
        showWarning: this.showWarning
    }
  }

  showSuccess = (color, border) => {
      if(!this.state.visible) {
          this.setState({
              ...this.state,
              visible: true,
              color: 'lightgreen',
              border: 'darkgreen'
          })
          setTimeout(() => {
            this.setState({
              ...this.state,
              visible: false
            })
          }, 2000)
        }
      }

  showInformation = (color, border) => {
    if(!this.state.visible) {
        this.setState({
            ...this.state,
            visible: true,
            color: 'lightblue',
            border: 'darkblue'
        })
        setTimeout(() => {
            this.setState({
              ...this.state,
              visible: false
            })
          }, 2000)
        }
      }

  showError = (color, border) => {
    if(!this.state.visible) {
        this.setState({
            ...this.state,
            visible: true,
            color: 'tomato',
            border: 'darkred'
        })
        setTimeout(() => {
            this.setState({
              ...this.state,
              visible: false
            })
          }, 2000)
        }
      }

  showWarning = (color, border) => {
    if(!this.state.visible) {
        this.setState({
            ...this.state,
            visible: true,
            color: 'lightyellow',
            border: 'yellow'
        })

   setTimeout(() => {
            this.setState({
              ...this.state,
              visible: false
            })
          }, 2000)
        }
      }

  render() {
    return (
      <GlobalContext.Provider value={this.state}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}
 