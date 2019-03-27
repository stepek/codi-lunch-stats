import React, { Component } from 'react';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from 'recharts'
import colors from 'material-color'
import moment from 'moment';

import './App.css';


class App extends Component {
  state = {
    data: [],
    legend: {},
    opacity: {}
  };

  componentDidMount() {
    fetch(`/arrivals/chart?lte=${moment().subtract(30, 'days').valueOf()}`)
      .then(res => res.json())
      .then(data => this.setState(data))
  }

  formatDate(date) {
    return moment(date).format('DD MMM YYYY')
  }

  formatTime(time) {
    return moment(time).format('HH:mm:ss')
  }

  tooltipFormatter = (value) => {
    return this.formatTime(value)
  }

  tooltipLabelFormatter = (value) => {
    return moment(value).format('DD MMMM YYYY')
  }

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  }

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.4 },
    });
  }

  render() {
    return (
      <div className="App">
        <LineChart width={window.innerWidth} height={window.innerHeight} data={this.state.data}
                   margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={this.formatDate} />
          <YAxis tickFormatter={this.formatTime} domain={['dataMin', 'dataMax']}/>
          <Tooltip formatter={this.tooltipFormatter} labelFormatter={this.tooltipLabelFormatter} />
          <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
          {Object.keys(this.state.legend).map((key, i) => (
            <Line
              key={key}
              strokeOpacity={this.state.opacity[key] || 0.4}
              name={this.state.legend[key]}
              type="monotone" dataKey={key}
              stroke={colors['700'][i+1]}
              dot={false}
              connectNulls={true}
            />
          ))}
        </LineChart>
      </div>
    );
  }
}

export default App;
