import { toast } from 'svelte-sonner'
const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function runToast(message: string, description: string) {
    toast(message, {
        description, action: {
            label: "Close",
            //@ts-ignore
            onClick: () => event.cancelable
        }
    })
}

export async function submitContact(mail: string, content: string)
{
    if(mail && content) {
        if(pattern.test(mail)) {
            await fetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    mail,
                    content
                })
            });
            runToast("Transmission complete.", "Your message has been successfully sent.")
        } else {
            runToast("ERROR","Your email address is incorrect.")
        }
    } else {
        runToast("ERROR", "Please enter your email and all content.")
    }
}