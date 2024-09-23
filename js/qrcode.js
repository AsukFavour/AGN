// Generate the QR code for attendance
function generateQrCode() {
    const userId = "12345"; // Example user ID from backend
    const meetingId = "67890"; // Example meeting ID
    const qrText = `UserID:${userId},MeetingID:${meetingId}`;

    // Generate QR code
    QRCode.toDataURL(qrText, { width: 250 }, function (err, url) {
      if (err) {
        console.error(err);
        return;
      }
      // Set the QR code image source
      document.getElementById('qrCodeImage').src = url;
      document.getElementById('downloadQrCode').href = url;
    });
  }

  // Call the function when the page loads
  window.onload = generateQrCode;