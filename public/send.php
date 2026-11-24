<?php
/**
 * Quote form handler for cPanel hosting. Emails the enquiry to the business
 * and redirects to /thank-you/ (or back to /contact/?error=1).
 * Uses PHP's mail(); the "From" address must be on this domain so hosts
 * and inboxes accept it. The visitor's email is set as Reply-To.
 */

const TO = 'info@wcroofcare.co.za';
const FROM = 'website@wcroofcare.co.za';

function back(string $where): void {
    header('Location: ' . $where, true, 303);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') back('/contact/');

// Spam trap: real people never see this field.
if (!empty($_POST['website'])) back('/thank-you/');

function clean(string $key, int $max): string {
    $v = trim((string)($_POST[$key] ?? ''));
    $v = str_replace(["\r", "\n", "%0a", "%0d"], ' ', $v); // no header injection
    return mb_substr($v, 0, $max);
}

$name    = clean('name', 100);
$phone   = clean('phone', 20);
$email   = clean('email', 150);
$town    = clean('town', 100);
$service = clean('service', 100);
$message = mb_substr(trim((string)($_POST['message'] ?? '')), 0, 3000);

if ($name === '' || $town === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || !preg_match('/^[0-9 +()\-]{9,20}$/', $phone)) {
    back('/contact/?error=1');
}

$subject = 'Website quote request: ' . ($service !== '' ? $service : 'General') . ' (' . $town . ')';
$body = "New quote request from wcroofcare.co.za\n\n"
      . "Name:    $name\n"
      . "Phone:   $phone\n"
      . "Email:   $email\n"
      . "Town:    $town\n"
      . "Service: " . ($service !== '' ? $service : 'Not sure') . "\n\n"
      . "Message:\n$message\n";

$headers = [
    'From: West Coast Roof Care Website <' . FROM . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$ok = mail(TO, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers), '-f' . FROM);
back($ok ? '/thank-you/' : '/contact/?error=1');
