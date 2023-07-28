export async function sendMessageToServer(message) {
    const response = await fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });

    if (!response.ok) {
        throw new Error('Server error');
    }

    const data = await response.json();
    return data.response;
}
