import React, { Component } from 'react'
import { ListView, View, Text } from 'react-native'
import { connect } from 'react-redux'
import { employeesFetch } from '../actions'

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch()
    this.createDataSource(this.propss)
  }

  componentWillReceiveProps(newProps) {
    createDataSource(newProps)
  }

  createDataSource({ employees }) {
    const ds = new ListView.dataSource({
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

export default connect(null, { employeeFetch })(EmployeeList)
