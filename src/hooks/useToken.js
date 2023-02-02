import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    
    useEffect(() => {
        const email = user?.user?.email;
        const displayName = user?.user?.displayName;
        const role = user?.user?.role;
        console.log(user?.user?.displayName);
        console.log(user?.user?.role);
        const currentUser = {email: email, displayName: displayName, role: role};
        if(email){

            fetch(`https://y-silk-zeta.vercel.app/user/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json',
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log('Inside the token user', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken)
                setToken(accessToken)
            })
        } 

    }, [user]);

    return [token]
}

export default useToken;