import React, { Component, useState } from 'react';

//TO-DO: create function to set inputs
// function useInput({ type }) {
//   const [value, setValue] = useState("");
//   const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
//   return [value, input];
// }

const CreateExercise = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const submitValue = () => {
    const exercise = {
      name: name,
      image: image,
      description: description
    };

    console.log(exercise);
  };

  return (
    <div>
      <h3>Create New Exercise Log</h3>
      <form onSubmit={submitValue}>
        <div className="form-group">
          <label>Name: </label>
          <input type="text" required className="form-control" value={name} onChange={e => setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Image: </label>
          <input type="text" required className="form-control" value={image} onChange={e => setImage(e.target.value)}/>
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input type="text" required className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
        </div>

        <div className="form-group">
          <input type="submit" value="Add Exercise" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default CreateExercise;

// export default class CreateExercise extends Component {
//   constructor(props) {
//     super(props);
//
//     this.onChangeName = this.onChangeName.bind(this);
//     this.onChangeImage = this.onChangeImage.bind(this);
//     this.onChangeDescription = this.onChangeDescription.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//
//     this.state = {
//       name: '',
//       image:'',
//       description: '',
//     }
//   }
//
//   componentDidMount() {
//     this.setState({
//       name: 'test user',
//       image: 'image here',
//     });
//   }
//
//   onChangeName(e) {
//     this.setState({
//       name: e.target.value
//     });
//   }
//
//   onChangeImage(e) {
//     this.setState({
//       image:e.target.value
//     });
//   }
//
//   onChangeDescription(e) {
//     this.setState({
//       description: e.target.value
//     });
//   }
//
//   onSubmit(e) {
//     e.preventDefault();
//
//     const exercise = {
//       name: this.state.name,
//       image: this.state.image,
//       description: this.state.description,
//     };
//
//     console.log(exercise);
//
//     window.location = '/';
//   }
//
//   render() {
//     return (
//       <div>
//         <h3>Create New Exercise Log</h3>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-group">
//             <label>Name: </label>
//             <input type="text" required className="form-control" value={this.state.name} onChange={this.onChangeName}/>
//           </div>
//           <div className="form-group">
//             <label>Image: </label>
//             <input type="text" required className="form-control" value={this.state.image} onChange={this.onChangeImage}/>
//           </div>
//           <div className="form-group">
//             <label>Description: </label>
//             <input type="text" required className="form-control" value={this.state.description} onChange={this.onChangeDescription}/>
//           </div>
//
//           <div className="form-group">
//             <input type="submit" value="Add Exercise" className="btn btn-primary" />
//           </div>
//         </form>
//       </div>
//     )
//   }
// }
