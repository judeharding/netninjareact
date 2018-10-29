import React, { Component } from "react";

const Ninjas = ({ ninjas }) => {
  // UI Component
  const ninjaList = ninjas.map(ninja => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
        <div>Id: {ninja.id}</div>
        <p />
      </div>
    );
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;

// **************
// class Xxxxx extends Component {
//     render(){
//         return (
//             <div className="xxx">
//                 <div>xxx</div>
//             </div>
//         )
//     }
// }
// export default Xxxxx;
