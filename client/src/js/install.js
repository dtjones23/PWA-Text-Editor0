const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = event;
    // Update UI to notify the user they can add to home screen
    butInstall.style.display = 'block';
});

butInstall.addEventListener('click', async () => {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
    // We no longer need the prompt. Clear it up.
    deferredPrompt = null;
    // Hide the install button
    butInstall.style.display = 'none';
});

window.addEventListener('appinstalled', (event) => {
    // Clear the deferredPrompt variable
    deferredPrompt = null;
    // Log the installation to your analytics
    console.log('J.A.T.E. was installed', event);
});
