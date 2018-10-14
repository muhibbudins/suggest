<?php

$data = [
  [
    "title" => "Monkey D. Luffy",
    "value" => "monkey-d-luffy"
  ],
  [
    "title" => "Roronoa Zoro",
    "value" => "roronoa-zoro"
  ],
  [
    "title" => "Shanks",
    "value" => "shanks"
  ],
  [
    "title" => "Portgas D. Ace",
    "value" => "portgasd-ace"
  ],
  [
    "title" => "Trafalgar Law",
    "value" => "trafalgar-law"
  ],
  [
    "title" => "Edward Newgate",
    "value" => "edward-newgate"
  ],
  [
    "title" => "Silvers Rayleigh",
    "value" => "silvers-rayleigh"
  ],
  [
    "title" => "Monkey D. Garp",
    "value" => "monkey-d-garp"
  ],
  [
    "title" => "Juracule Mihawk",
    "value" => "juracule-mihawk"
  ],
  [
    "title" => "Monkey D. Dragon",
    "value" => "monkey-d-dragon"
  ]
];

if (isset($_POST['query'])) {
  $result = [];
  $search = implode('|', explode(' ', $_POST['query']));

  foreach ($data as $key => $value) {
    preg_match('/('.$search.')/g', $value['title'], $matches);

    print_r($matches);
  }
}
