import React from 'react'
import { Field, reduxForm } from 'redux-form'


class StreamForm extends React.Component {

    renderError = ({error, touched})=> {
        console.log()
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            )
        }  
    }


    renderInput=({input,label,meta}) =>{
        //console.log(formProps.meta) this meta property is passed from the validate function after matching each element name and if error object contains that name as the property.
        const className = `field ${meta.error && meta.touched ? 'error':'' }`
         return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                <div>{this.renderError(meta)}</div>
            </div>

        )
        /*   return(
              <input 
              onChange={formProps.input.onChange} this is same as the code above return <input {...formProps.input}/>
              value={formProps.input.value}
              />
          )  */
    }

    /*   onSubmit(formValues) {
          console.log(formValues)
      } */

    onSubmit = (formValues) => {
        console.log(this.props)
        this.props.onSubmit(formValues)
    }
    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter title" />
                <Field
                    name="description"
                    component={this.renderInput}
                    label="Enter description" />
                <button className="ui button primary">Submit</button>
            </form>

        )
    }
}

const validate = formValues => {
    const errors = {};
    if (!formValues.title) {
        errors.title = 'You must enter a title'
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description.'
    }
    return errors;
}


  export default reduxForm({
    form: 'streamForm',
    validate // validate is called initially and every time the user interacts with the form.
})(StreamForm)

