export const Columns = [
  {
    Header: "#",
    accessor: "id",
  },
  {
    Header: "Tutor name",
    accessor: "tutor_name",
  },
  {
    Header: "Course",
    accessor: "course",
  },
  {
    Header: "Assignments",
    accessor: "assignments",
  },
  {
    Header: "Resources",
    accessor: "resources",
    Cell: (props) => <a href={props.value}>Here</a>,
  },
  {
    Header: "Final Test",
    accessor: "final_test",
  },
  {
    Header: "Total Score",
    accessor: "total_score",
  },
  {
    Header: "Status",
    accessor: "status",
  },
];
