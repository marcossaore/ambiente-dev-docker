<?php
 
session_start();

$_SESSION['user'] = "Seu nome";

echo $_SESSION["user"];