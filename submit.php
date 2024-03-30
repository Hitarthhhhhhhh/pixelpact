<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  $to = 'hitarthparekh8@gmail.com';
  $subject = 'Contact Us Form Submission';
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

  if (mail($to, $subject, $body)) {
    header('Location: success.html');
  } else {
    header('Location: error.html');
  }
} else {
  header('Location: index.html');
}
?>