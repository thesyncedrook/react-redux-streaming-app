import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {// we are able to use this google api as we have manually added this in our index.html file 
            window.gapi.client.init({
                clientId: '239067873928-buajk2upmhrnvdkvp60nlv4b1sdkbol6.apps.googleusercontent.com', // we generated this id by visiting console.developer.google.api and creating a new project there.
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
               
            });
        })
    }

    onSignIn = () => {
        this.auth.signIn();
    }
    onSignOut = () => {
        this.auth.signOut()
    }
    onAuthChange = (isSignedIn) => { // this isSignedIn variable is a boolean value, this callback function onAuthChange is called with a boolean
                                    //value to indicate whether the user is signed in or not.                          
          if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else { 
            this.props.signOut()
        }
    }
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null
        }
        else if (this.props.isSignedIn) {
            return <button onClick={this.onSignOut} className='ui red google button'>
                <i className='google icon' />
                Sign Out
            </button>
        }
        else {
            return <button onClick={this.onSignIn} className='ui green google button'>
                <i className="google icon" />
                Sign in with google
            </button>
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
};
export default
    connect(mapStateToProps,
        { signIn, signOut })
        (GoogleAuth)