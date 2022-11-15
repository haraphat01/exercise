import React from 'react';

export default function Content(props) {
  return (
    <div>
      <p>
        {props.part1} {props.exercise1}
      </p>

      <p>
        {props.part2} {props.exercises2}
      </p>
    </div>
  );
}
