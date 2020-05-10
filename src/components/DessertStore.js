import React from 'react';
import { connect } from 'react-redux';
import { buyCake, fetchUsers } from '../redux/actions'

function DessertStore(props) {
    return (
        <div>
            <span>Number of cakes: {props.numberOfCakes}</span> 
            <button onClick={props.buyCake}>Buy Cake</button>
            {!props.loading ? (!props.error ? <div>Customers:{props.users.map((user,index) => <div key={index}>{user}</div>)}</div>
                                            : <div>{props.error}</div>) 
                            : <div>Loading...</div>}
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        numberOfCakes: state.cake.numberOfCakes,
        loading: state.users.loading,
        users: state.users.users,
        error: state.users.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCake : () => dispatch(buyCake()),
        usersList: dispatch(fetchUsers())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(DessertStore);