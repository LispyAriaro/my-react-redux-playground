import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../reducers/counter'


// class Home extends Component {
//   render() {
//     return (
//         <div>
//             No change to give a customer? We help record how much change is owed.
//             <div className="">
//                 <Link to="/mc-admin/businesslogin">Log in</Link>
//                 <Link to="/mc-admin/businessSignup">Sign up</Link>
//             </div>

//             <p>Count: {props.count}</p>

//             <p>
//               <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
//               <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
//             </p>
//         </div>
//     );
//   }
// }

const Home = props => (
  <div>
    No change to give a customer? We help record how much change is owed.
    <div className="">
      <Link to="/mc-admin/businesslogin">Log in</Link>
      <Link to="/mc-admin/businessSignup">Sign up</Link>
    </div>

    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>Decrementing</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
    </p>
  </div>
)

// export default Home;

const mapStateToProps = state => ({
  count: state.counter.get('value'),
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing
})
  
const mapDispatchToProps = dispatch => bindActionCreators({
  increment,
  incrementAsync,
  decrement,
  decrementAsync
}, dispatch)
  
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
