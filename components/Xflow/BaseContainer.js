import { connect } from 'react-redux'
import Component from './BaseComponent'

class BaseContainer extends Component {
   constructor(props, context){
      super(props, context)

      // this._bind('showMenu')
   }
    componentWillMount() {
    }

    renderError(text) {
        return (
            <div style={{textAlign: 'center'}}>
                <h1 style={{color: 'red'}}>{text}</h1>
            </div>
        )
    }

    isError() {
        return !!this.props.appError.get('error')
    }

    isAppReady() {
        return !!this.props.isAppReady
    }

    renderApp() {
        return (
            <div>
                <Menu>
                    {this.props.children}
                </Menu>
            </div>
        )
    }

    render() {
        if (this.isAppReady()) {
            if (this.isError()) {
                return this.renderError(this.props.appError.get('cause'))
            } else {
                return this.renderApp()
            }
        } else {
            return <h1 style={{textAlign: 'center' , color: '#d3d3d3'}}>Loading...</h1>
        }
    }
}

const ReduxBaseContainer = connect(appStateSelect)(BaseContainer)

export default ReduxBaseContainer
