import React, { useState } from "react";

const SearchBar = ({ onTermSubmit }) => {
  const [term, setTerm] = useState("");

  // no longer needed because we just define it in onChange
  // const onInputChange = (event) => {
  //   setTerm(event.target.value);
  // };

  const onFormSubmit = (event) => {
    event.preventDefault();

    //Our parent component is told what the current search term is.
    onTermSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input
            type="text"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
//   state = { term: "" };

//   onInputChange = (event) => {
//     this.setState({ term: event.target.value });
//   };

//   onFormSubmit = (event) => {
//     event.preventDefault();

//     //Our parent component is told what the current search term is.
//     this.props.onTermSubmit(this.state.term);
//   };

//   render() {
//     //the ui segment draws a nice rectangle around everything within it
//     //Because this is going to use custom styling, it needs a classname. in this case the class name is search-bar
//     return (
//       <div className="search-bar ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Video Search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
