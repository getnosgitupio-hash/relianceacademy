<?php
// ==============================
// ✅ CORS HEADERS
// ==============================
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// ==============================
// ✅ HANDLE OPTIONS (Preflight)
// ==============================
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// ==============================
// ✅ ERROR HANDLING
// ==============================
ini_set('display_errors', 0);
error_reporting(E_ALL);

// ==============================
// ✅ GET RAW JSON DATA
// ==============================
$data = json_decode(file_get_contents("php://input"), true);

if ($_SERVER["REQUEST_METHOD"] !== "POST" || !$data) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid request"
    ]);
    exit;
}

// ==============================
// ✅ COLLECT DATA FROM FORM
// ==============================
$fullName          = trim($data['fullName'] ?? '');
$email             = trim($data['email'] ?? '');
$phone             = trim($data['phone'] ?? '');
$city              = trim($data['city'] ?? '');
$thanePreference   = trim($data['thanePreference'] ?? '');
$courseInterested  = trim($data['courseInterested'] ?? '');

// ==============================
// ✅ VALIDATION
// ==============================
if (!$fullName || !$email || !$phone || !$courseInterested) {
    echo json_encode([
        "status" => "error",
        "message" => "Please fill all required fields"
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "status" => "error",
        "message" => "Invalid email address"
    ]);
    exit;
}

// ==============================
// ✅ ADD DATE & TIME
// ==============================
date_default_timezone_set('Asia/Kolkata'); // Set timezone
$submissionDate = date("Y-m-d H:i:s"); // Example: 2026-04-07 14:30:00

// ==============================
// ✅ PREPARE EMAIL
// ==============================
$to = "sriethiraj@getnos.io,relianceacademythaneleads@gmail.com";
$subject = "Reliance Animation Academy Thane - New Career Orientation Lead";

$message = "New Orientation Lead\n\n";
$message .= "Submission Date: $submissionDate\n";
$message .= "Name: $fullName\n";
$message .= "Email: $email\n";
$message .= "Phone: $phone\n";
$message .= "City: $city\n";
$message .= "Thane Location Preference: $thanePreference\n";
$message .= "Course Interested In: $courseInterested\n";

$headers  = "From: hello@getnos.io\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// ==============================
// ✅ SEND EMAIL
// ==============================
if (mail($to, $subject, $message, $headers)) {
    echo json_encode([
        "status" => "success",
        "message" => "Form submitted successfully"
    ]);
} else {
    echo json_encode([
        "status" => "error",
        "message" => "Failed to send email"
    ]);
}
?>