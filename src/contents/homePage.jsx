import React, { Component } from 'react'
import Cardinfo from '../components/InfoCard';
import SkillCard from '../components/skillCard';

export default class homePage extends Component {
  render() {
    return (
      <div>
        <Cardinfo />
        <SkillCard />
      </div>
    )
  }
}
