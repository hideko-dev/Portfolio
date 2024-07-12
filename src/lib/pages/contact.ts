import { toast } from 'svelte-sonner'
import { writable } from 'svelte/store'

const VITE_FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const contactValue = writable(false)

function runToast(message: string, description: string) {
    toast(message, {
        description,
        action: {
            label: 'Close',
            //@ts-ignore
            onClick: () => event.cancelable,
        },
    })
}

async function submitContact(mail: string, content: string) {
    if (mail && content) {
        if (pattern.test(mail)) {
            await fetch(VITE_FORMSPREE_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mail,
                    content,
                }),
            })
        } else runToast('ERROR', 'Your email address is incorrect.')
        runToast('Transmission complete.', 'Your message has been successfully sent.')
    } else runToast('ERROR', 'Please enter your email and all content.')
}

export { contactValue, submitContact }