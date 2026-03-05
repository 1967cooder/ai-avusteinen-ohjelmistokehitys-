const Header = ({ course }) => {
  return <h1>{course.name}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

const Total = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return <p>Number of exercises {total}</p>;
};

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </>
  );
};

const App = () => {
  const courses = [
    {
      id: 1,
      name: "Half Stack application development",
      parts: [
        {
          id: 1,
          name: "Fundamentals of React",
          exercises: 10,
        },
        {
          id: 2,
          name: "Using props to pass data",
          exercises: 7,
        },
        {
          id: 3,
          name: "State of a component",
          exercises: 14,
        },
      ],
    },
    {
      id: 2,
      name: "Node.js",
      parts: [
        {
          id: 1,
          name: "Routing",
          exercises: 3,
        },
        {
          id: 2,
          name: "Middlewares",
          exercises: 7,
        },
      ],
    },
  ];
  return (
    <>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
};

export default App;
