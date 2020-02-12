// import React , {Component} from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Axios from 'axios';



// // const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
// //  var required = true;
// // const formValid = ({formErrors, ...rest} ) => {
// //   let valid = true;

// //   //validate form errors being empty
// //   Object.values(formErrors).forEach( val => {
// //     val.length > 0 && (valid = false)
// //   });

// // // validate the form was filled out 
// //   Object.values(rest).forEach(val => {
// //     val === null  && (valid = false)
// //   });


// // return valid;
  
// // }


// class ContactForm extends Component  {

// // constructor(props){
// //   super(props);
// //   this.state ={
// //     firstName: null,
// //     lastName: null,
// //     email: null,
// //     message: null,
// //     // these are error messages to validate the forms
// //     formErrors: {
// //       firstName: "",
// //       lastName: "",
// //       email: "",
// //       message: ""
// //     }
// //   }
// // }

// // handleSubmit = e => {
// //   e.preventDefault();
// //   if(formValid(this.state)){
// //     console.log(`

// //     ---Submitting--
// //   First Name:  ${this.state.firstName}
// //   Last Name:   ${this.state.lastName}
// //   Email:       ${this.state.email}
// //   Message:     ${this.state.message}

// //     `)

  
// //   }
// //   else{
// //     console.error('Form Invalid - Display error message');
// //   }
// // };

// // handleChange = e => {
// //   e.preventDefault();
// //   const { name , value } = e.target;

// //   let formErrors = this.state.formErrors;



// //   switch (name){
// //     case 'firstName':
// //       formErrors.firstName = value.length < 3 & value.length > 0 ? 'Minimum of 3 characters are required' : '';
// //       break;

// //     case 'lastName':
// //       formErrors.lastName = value.length < 3 & value.length > 0 ? 'Minimum of 3 characters are required' : '';
// //       break;
      
// //     case 'email':
// //         formErrors.email = emailRegex.test(value) && value.length > 0 ? '' : 'Invalid Email Address';
// //         break;
        
// //     case 'message':
// //          formErrors.message = value.length < 10 & value.length > 0 ? 'Minimum of 3 characters are required' : '';
// //           break;

// //     default:
// //       break;

      
// //   }
// //   this.setState({ formErrors, [name]:value}, ()=> console.log(this.state));
// // }

// constructor(props){
//   super(props);
//   this.state ={
//       name: '',
//       email: '',
//       message: '',
//       disabled: false,
//       emailSent: null,
//   }
// }


// handleChange = (event) => {
// const target = event.target;
// const value = target.type === "checkbox" ? target.checked : target.value;
// const name = target.name;

// this.setState ({
//    [name]: value
// })
// }

// handledSubmit = (event) => {
//   event.preventDefault();
  
//   this.setState({
//       disabled: true,
    
    
     

//   });
//   Axios.post('http://localhost:3010/api/email', this.state)
//       .then(res => {
//           if(res.data.success){
//              this.setState({
//               disabled: false,
//               emailSent: true
//           });  
//           }
//          else {
//              this.setState({
//               disabled: false,
//               emailSent: false
//           });
//          }
//       })
//       .catch(err => {
//           this.setState({
//               disabled: false,
//               emailSent: false
//           });
//       })
//   ;
// }


// render() {

//   const { formErrors } = this.state;
// return(
// <Col className="colContact" lg={6}>
// <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great|Lateef|Open+Sans|Rancho|Permanent+Marker&display=swap" rel="stylesheet"></link>
// <h1> <span>Let's Talk </span></h1>
// <Form onSubmit={this.handledSubmit}>
//                 <Form.Group>
//                     <Form.Label htmlFor="full-name">Full Name</Form.Label>
//                     <Form.Control id="full-name" name= "name" type="text" value={this.state.name} onChange={this.handleChange}/>
//                 </Form.Group>

//                 <Form.Group>
//                     <Form.Label htmlFor="email">E-Mail</Form.Label>
//                     <Form.Control id="email" name= "email" type="email" value={this.state.email} onChange={this.handleChange}/>
//                 </Form.Group>

//                 <Form.Group>
//                     <Form.Label htmlFor="message">Message</Form.Label>
//                     <Form.Control id="message" name= "message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}/>
//                 </Form.Group>


//                 <Button className="d-inline-block" variant ="primary" type="submit" disabled={this.state.disabled}>
//                     Send
//                 </Button>
//   <br/>
//   <br/>
//                 {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
//                 {this.state.emailSent === false && <p className="d-inline error-msg">Email Not Sent</p>}

//             </Form>
// </Col>
//   )





// }



// }



// export default ContactForm;