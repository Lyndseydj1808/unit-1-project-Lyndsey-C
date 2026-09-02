import { API_URL } from './apiConfig';

export async function createParent(parentData) {
    const response = await fetch(`${API_URL}/parent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(parentData),
 });

 if (!response.ok) {
    throw new Error('Failed to create account');
 }

 const data = await response.json();
 return data;
}
    
