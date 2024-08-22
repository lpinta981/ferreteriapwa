function loadApp(appId) {
    const content = document.getElementById('content');
    content.innerHTML = `<iframe src="URL_DE_TU_APP_SCRIPT_EXEC_${appId}" frameborder="0" width="100%" height="100%"></iframe>`;
}
