import React, { useCallback, useState, useEffect } from "react"

export default function ChildAccounts() {
    const [childAccounts, setChildAccounts] = useState([]); 
    const [loading, setLoading] = useState(false);
    const [loadError, setLoadError] = useState("");
    const [parentId, setParentId] = useState("");

    const loadChildAccounts = useCallback(async () => {
        setLoading(true);
        setLoadError("");
        try {
                const data = await fetch(`${API_URL}/{parentId}/childList`)
                    

                setChildAccounts(Array.isArray(data) ? data : []);

            }  catch (e) {
            setLoadError(e.message);
        } finally {
            setLoading(false);
        }
    }, []);
   

        useEffect(() => {
        loadChildAccounts();
    }, [loadChildAccounts]);

    return (
        <main className="child-accounts-container">
            {loading && <p>Loading...</p>}
            {loadError && <p>Error: {loadError}</p>}
            {childAccounts.map((child) => (
                <div key={child.childId}>
                    <p>{child.name}, age {child.age}</p>
                    <p>Stars: {child.starCount}</p>
                    <p>Creature: {child.creatureChoice}</p>
                </div>
            ))}
        </main>
    );
}