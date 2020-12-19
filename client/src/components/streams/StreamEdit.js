import React from 'react'
import { connect } from 'react-redux'
import { fetchStream , editStream} from '../../actions'
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id)
    }
    onSubmit = (formValues) =>{
        this.props.editStream(this.props.match.params.id,formValues)
    }
    render() {
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        return (
            <div>
                <h3>Edit a Stream</h3>
                <StreamForm initialValues={this.props.stream} onSubmit = {this.onSubmit}/> {/* initialValues is a very special props for redux form and it displays some initial values for a form. */}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    return {
        stream: state.streams[ownProps.match.params.id] // we are getting this id from the url
    }
}

export default connect(
    mapStateToProps,
    { fetchStream , editStream})
    (StreamEdit) 