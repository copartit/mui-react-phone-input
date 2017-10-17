import React from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RTI from '../../src/withStyles'

injectTapEventPlugin();
const changeHandler = (target, formattedNumber, selectedCountry, rawValue) => {
  console.log(`${target.value} - ${formattedNumber} - ${rawValue}`, 'Target object and current value')
}
const Demo = () => (<div>
  <h1>React Telephone Input Demo</h1>
  <MuiThemeProvider>

    <RTI
      flagsImagePath="./images/flags.png"
      name="phone"
      onChange={changeHandler}
      floatingLabelText="phone"
      floatingLabelStyle={{ color: '#01579b' }}
      flagDropDownEnabled={true}
      value={''}
    />
  </MuiThemeProvider>
</div>)

render(<Demo />, document.querySelector('#demo'))
