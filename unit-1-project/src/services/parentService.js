import { API_URL } from './apiConfig';

export async function createParent(parentData) {
    const response = await fetch(`${API_URL}/parent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(parentData),
 });

 if (!response.ok) {
    throw new Error('⚠️ Failed to create account');
 }

 const data = await response.json();
 return data;
}

export async function parentLogin(credentials) {
    const response = await fetch(`${API_URL}/parent/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        throw new Error('⚠️ Email and/or Password is incorrect.')
    }

    const data = await response.json();
    return data;
    
}
    
