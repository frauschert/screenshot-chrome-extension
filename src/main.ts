document.addEventListener('DOMContentLoaded', () => {
    const captureButton = document.getElementById('capture')!

    captureButton.addEventListener('click', async () => {
        const url = await chrome.tabs.captureVisibleTab()
        await chrome.downloads.download({
            url,
            filename: `${new Date().getTime().toString()}.jpg`,
        })
    })
})
