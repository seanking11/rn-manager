import _ from 'lodash'
import React, { Component } from 'react'
import { ListView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch()
    this.createDataSource(this.props)
  }

  componentWillReceiveProps(newProps) {
    createDataSource(newProps)
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })

    this.dataSource = ds.cloneWithRows(employees)
  }

  render() {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    )
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  })

    return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)
