<?php

//
// This is only a SKELETON file for the "Hamming" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function distance($a, $b)
{

  $alength = strlen ( $a );
  $blength = strlen ( $b );

  if($alength !== $blength) {
    throw new InvalidArgumentException ("DNA strands must be of equal length.");
  }

  $counter = 0;

  for ($i=0; $i < $alength; $i++) {
    if ($a[$i] !== $b[$i]){
      $counter++;
    }
  }

  return $counter;
}
