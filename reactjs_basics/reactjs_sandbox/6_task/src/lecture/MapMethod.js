// import React from 'react';

// const MapMethod = () => {
//     const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     const listItems = myArray.map(number => <li>{number}</li>);
//     return (
//         <div>
//             {listItems}
//         </div>
//     );
// }

// export default MapMethod;

import React, { Component } from 'react';

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class MapMethod extends Component {
    state = {
        numbers: [...myArray]
    }
    removeHandler = listIndex => {
        console.log('wow ', listIndex);

        //const myOldArray = this.state.numbers;
        //const myOldArray = this.state.numbers.slice();
        const myOldArray = [...this.state.numbers];

        myOldArray.splice(listIndex, 1);
        this.setState({numbers : myOldArray});
    };

    render() {
        console.log(this.state.numbers);
        const listItems = this.state.numbers
            .map((number, index) =>
                <li
                    //binding index to this
                    onClick={this.removeHandler.bind(this, index)}
                    key={number.toString()}>

                    {number}

                </li>);
        return (
            <div>
                <ul>{listItems}</ul>
            </div>
        );
    }
}

export default MapMethod;
