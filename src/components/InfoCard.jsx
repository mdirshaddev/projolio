import React from 'react';
import CardImg from '../containers/infoCardData/infoCardImg';
import CardInfoText from '../containers/infoCardData/infoCardText';


export default class CardInfo extends React.Component{
    render(){
        return(
          <div className="container">
            <div className="content">
              <CardImg />
              <CardInfoText />
            </div>
          </div>
        )
    }
}