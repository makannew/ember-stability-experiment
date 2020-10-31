# ember-stability-experiment

Javascript
```
import Component from '@glimmer/component';

export default class StabilityExperimentComponent extends Component {
  count = 0
  get value(){
    return this.count++
  }
  
}
```

Template
```
<h1>Ember stability experiment</h1>
<h3>{{this.value}}</h3>
<h3>{{this.value}}</h3>
<h3>{{this.value}}</h3>
<h3>{{this.value}}</h3>
<h3>{{this.value}}</h3>
```

## result in local server
![screen shot on local machine](https://github.com/makannew/ember-stability-experiment/blob/master/screen-shots/local4200.png)

## result in production mode on github pages
![screen shot on production](https://github.com/makannew/ember-stability-experiment/blob/master/screen-shots/production.png)

