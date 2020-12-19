import React, { useEffect } from 'react'
import { fetchStream } from '../../actions'
import { connect } from 'react-redux'
const StreamShow = ({ fetchStream, match, stream }) => {

    useEffect(() => {
        const fetch = () => {
            fetchStream(match.params.id)
        }

        fetch()
    }, [])

    if(!stream){
        return (

            <div>
                Loading!
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>{stream.title}</h1>
                <h5>{stream.description}</h5>
            </div>
        )
    }

    
}
const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchStream })(StreamShow)