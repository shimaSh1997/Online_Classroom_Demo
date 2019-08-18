import { LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 3,
    min: 1
  },
  wordsPerSentence: {
    max: 5,
    min: 4
  }
});

export default [
  {
    id: 0,
    student_id: 12,
    student_name: "mary",
    session_name: "Session 1",
    deadline_date_for_assignment: "7/4/2015",
    attendance: false,
    assignment: "Assignment 1",
    done_assignment_before_deadline: false,
    session_desc: lorem.generateParagraphs(2),
    deadline_time_for_assignment: "18:30",
    title: "Some Session talks here and more"
  },
  {
    id: 1,
    student_id: 12,
    student_name: "mary",
    session_name: "Session 2",
    deadline_date_for_assignment: "8/2/2015",
    attendance: false,
    assignment: "Assignment 2",
    done_assignment_before_deadline: false,
    session_desc: lorem.generateParagraphs(2),
    deadline_time_for_assignment: "15:30",
    title: "Some Session talks here and more"
  },
  {
    id: 2,
    student_id: 12,
    student_name: "mary",
    session_name: "Session 3",
    deadline_date_for_assignment: "8/2/2015",
    attendance: true,
    assignment: "Assignment 3",
    done_assignment_before_deadline: true,
    session_desc: lorem.generateParagraphs(2),
    deadline_time_for_assignment: "15:30",
    title: "Some Session talks here and more"
  },
  {
    id: 3,
    student_id: 12,
    student_name: "mary",
    session_name: "Session 4",
    deadline_date_for_assignment: "8/2/2015",
    attendance: true,
    assignment: "Assignment 4",
    done_assignment_before_deadline: false,
    session_desc: lorem.generateParagraphs(2),
    deadline_time_for_assignment: "15:30",
    title: "Some Session talks here and more"
  },
  {
    id: 4,
    student_id: 12,
    student_name: "mary",
    session_name: "Session 5",
    deadline_date_for_assignment: "6/2/2015",
    attendance: true,
    assignment: "Assignment 5",
    done_assignment_before_deadline: false,
    session_desc: lorem.generateParagraphs(2),
    deadline_time_for_assignment: "14:30",
    title: "Some Session talks here and more"
  }
];
