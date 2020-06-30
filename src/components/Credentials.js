import React from 'react';
import picture from './trump.jpg';

class Credentials extends React.Component {

    render() {
        return (
            <div>
                <img src={picture} alt="TrumpPicture" width="50px"></img>
                <strong>Donald J. Trump</strong>
                <p>@realDonaldTrump</p>
            </div>
        )
    }
}

export default Credentials;