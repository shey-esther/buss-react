
const RowTable = (props) => {
   const _tds =  props.items.map ((item, index) => <td key ={index}> {item} </td>);
   return (
      <tr>
         {_tds}
     </tr> 
   )
}

const RTable = ({seats}) => {
   return (
      <table width="300" border="3" className = "table table-bordered">
         <RowTable items = {seats[0]} />
         <RowTable items = {seats[1]} />
         <RowTable items = {seats[2]} />
         <RowTable items = {seats[3]} />
      </table>
   );
}

function listPairs (seats) {
   console.log ("seats: ", seats);
  //  let newSeats = [];
   let datos = [{Nombre:'Esther',Apellido:'AlvaroCruz',DNI:'48086471'},
   {Nombre:'Maribel',Apellido:'AlvaroCruz',DNI:'48086471'},
   {Nombre:'MariaElena',Apellido:'AlvaroCruz',DNI:'48086471'},
   {Nombre:'Alex',Apellido:'AlvaroCruz',DNI:'48086471'},
   {Nombre:'Ever',Apellido:'AlvaroCruz',DNI:'48086471'},];
  //  for ( let row  of seats ) {
  //     let filterArray = row.filter ( e => e % 2 == 0);
  //     newSeats.push(filterArray); 
  //  }
   return datos.map ((dato, index) => {
      return (
         <li key = {index}>
            <p>Nombre:{dato.Nombre}</p>
            <p>Apellido:{dato.Apellido}</p>
            <p>N° DNI:{dato.DNI}</p>
        </li>
      );
   });
}

const App = ({title, seats}) => {
   return (
      <div>
         <RTable  seats = {seats}/>
       
         <h3>  {title}</h3>
         <ol>
            {listPairs (seats)}
         </ol>
      </div>
   );
}

let seats = [
   [4, 8, 12, 16, 20, 24, 28, 32],
   [3, 7, 11, 15, 19, 23, 27, 31],
   [2, 6, 10, 14, 18, 22, 26, 30],
   [1, 5, 9, 13, 17, 21, 25, 29]
]

ReactDOM.render ( 
   <App title = {'Somos hermanos :) !!!!'}  seats = {seats} />, 
   document.getElementById("root")
); 
 