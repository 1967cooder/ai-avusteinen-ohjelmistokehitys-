<script>
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const total = exercises1 + exercises2 + exercises3
</script>

{#snippet Header(course)}
  <h1>{course}</h1>
{/snippet}

{#snippet Content(part1, exercises1, part2, exercises2, part3, exercises3)}
  <p>{part1} {exercises1}</p>
  <p>{part2} {exercises2}</p>
  <p>{part3} {exercises3}</p>
{/snippet}

{#snippet Total(total)}
  <p>Number of exercises {total}</p>
{/snippet}

{@render Header(course)}
{@render Content(part1, exercises1, part2, exercises2, part3, exercises3)}
{@render Total(total)}
