import React from "react";
import { View, Text } from "react-native";
import ProgressCircle from "react-native-progress-circle";

class ProgressCircleDemo extends React.Component {
  render() {
    if (this.props.assignment == true) {
      const trueAssignments = [];
      const falseAssignments = [];

      this.props.totaldata.map(item =>
        item.done_assignment_before_deadline
          ? trueAssignments.push(item.done_assignment_before_deadline)
          : falseAssignments.push(item.done_assignment_before_deadline)
      );
      const AssignmentPercent =
        (trueAssignments.length / this.props.totaldata.length) * 100;
      return (
        <ProgressCircle
          percent={AssignmentPercent}
          radius={25}
          borderWidth={5}
          // color="#3399FF"
          color={AssignmentPercent < 50 ? "red" : "#3399FF"}
          shadowColor="#999"
          bgColor="transparent"
        >
          <Text style={{ fontSize: 12, fontFamily: "Quicksand-bold" }}>
            {AssignmentPercent}
          </Text>
        </ProgressCircle>
      );
    } else {
      // alert('fifr')
      const trueAttendance = [];
      const falseAttendance = [];
      this.props.totaldata.map(item =>
        item.attendance
          ? trueAttendance.push(item.attendance)
          : falseAttendance.push(item.attendance)
      );

      const AttendancePercent =
        (trueAttendance.length / this.props.totaldata.length) * 100;
      return (
        <ProgressCircle
          percent={AttendancePercent}
          radius={25}
          borderWidth={5}
          color={AttendancePercent < 50 ? "red" : "#3399FF"}
          shadowColor="#999"
          bgColor="transparent"
        >
          <Text style={{ fontSize: 12, fontFamily: "Quicksand-bold" }}>
            {AttendancePercent}
          </Text>
        </ProgressCircle>
      );
    }
  }
}

export default ProgressCircleDemo;
