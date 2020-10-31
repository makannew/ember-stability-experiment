import Component from '@glimmer/component';

export default class StabilityExperimentComponent extends Component {
  count = 0
  get value(){
    return this.count++
  }
  
}

