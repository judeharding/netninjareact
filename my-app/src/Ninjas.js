import React from "react";
import './Ninjas.css';

const Ninjas = ({ ninjas, deleteNinja }) => {
  const ninjaList = ninjas.map(ninja => {
    // ternary operator = condition ? (true) : (false);
    if (ninja.age > 10) {
      return (
        <div className="ninja" key={ninja.id}>
          <div>Name: {ninja.name}</div>
          <div>Age: {ninja.age}</div>
          <div>Belt: {ninja.belt}</div>
          <button onClick={() => { deleteNinja(ninja.id) }}>Delete Ninja</button>
          <p />
        </div>
      )
    } else {
      return null;
    }
  });
  return (
    <div className="ninja-list">
      {ninjaList}
    </div>
  )
};

export default Ninjas;

// if operator for a conditional
// const Ninjas = ({ ninjas }) => {
//   // UI Component
//   const ninjaList = ninjas.map(ninja => {
//     if (ninja.age > 20) {
//       return (
//         <div className="ninja" key={ninja.id}>
//           <div>Name: {ninja.name}</div>
//           <div>Age: {ninja.age}</div>
//           <div>Belt: {ninja.belt}</div>
//           <div>Id: {ninja.id}</div>
//           <p />
//         </div>
//       );
//     } else {
//       return null;
//     }
//   });
//   return <div className="ninja-list">{ninjaList}</div>;
// };

// **************
// class Xxxxx extends Component {
      // state = {

      // }
//     render(){
//         return (
//             <div className="xxx">
//                 <div>xxx</div>
//             </div>
//         )
//     }
// }
// export default Xxxxx;
