document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  loginForm.addEventListener('submit', e => {
    e.preventDefault(); // Empêche l'envoi du formulaire par défaut

    const email = emailInput.value;
    const password = passwordInput.value;

    // Validation simple (exemple)
    if (validateLogin(email, password)) {
      alert('Connexion réussie !');
      // Ici, vous pouvez rediriger l'utilisateur ou envoyer les données au serveur
      window.location.href = '/dashboard.html';
    } else {
      alert('Identifiant ou mot de passe incorrect.');
      // Optionnel : vider le champ mot de passe
      passwordInput.value = '';
    }
  });
});

// Fonction de validation simulée
function validateLogin(email, password) {
  // simulation de vérification (A REMPLACER par un appel API réel)
  const validEmail = 'admin@intest.com';
  const validPassword = '123';

  return email === validEmail && password === validPassword;
}
