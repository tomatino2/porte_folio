<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Vérification du reCAPTCHA
    $recaptcha_secret = 'TON_SECRET_KEY';
    $recaptcha_response = $_POST['g-recaptcha-response'];
    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=$recaptcha_secret&response=$recaptcha_response");
    $responseKeys = json_decode($response, true);

    // Si le reCAPTCHA est validé
    if(intval($responseKeys["success"]) !== 1) {
        echo 'Échec de la vérification reCAPTCHA. Veuillez réessayer.';
    } else {
        // Traitement du formulaire (envoi par email, enregistrement dans la base de données, etc.)
        // Exemple d'envoi d'email (fonction mail())
        mail('ton-email@exemple.com', 'Nouveau message de contact', "Nom: $name\nEmail: $email\nMessage: $message");
        
        // Réponse du serveur
        echo 'Message envoyé avec succès !';
    }
}
?>
