const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ sum }) => <b><p>total of {sum} exercises</p></b>

const Content = ({ parts }) => 
    <>
      {parts.map((p) => 
        <Part part={p} key={p.id} />
      )}
    </>

const Part = ({ part }) => 
    <p>
      {part.name} {part.exercises}
    </p>

const Course = ({ course }) =>
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={course.parts.reduce(
        (sum, part) => sum + part.exercises,
        0
        )} />
    </>

export default Course