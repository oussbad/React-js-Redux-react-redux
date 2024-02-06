import logo from './logo.svg';
import './App.css';
import { Button } from 'bootstrap';
import { useSelector ,connect} from 'react-redux';

function App(props) {
  const num =useSelector(data=>data.num)
  return (
    <div className="App">
      <div>{num}</div>
      <div>
        <button onClick={props.inc}>Incrementer</button>
        <button onClick={props.dec}>Decrementer</button>
        <button onClick={props.reset}>Reset</button>

      </div>
    </div>
  );
}
const mapStateToProps =(state)=>{
  return {num:state.num}
}
const mapDispatchToProps=(dispach)=>{
  return{
    inc:()=>dispach({type:"Incrementer"}),
    dec:()=>dispach({type:"Decrementer"}),
    reset:()=>dispach({type:"Reset"}),

  }
}


export default connect(null,mapDispatchToProps)(App);
