interface Response {
    token: string;
    user: {
        name: string;
        email: string;
    }
}

export function signIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'dasdasndjsaufhucsdfx',
                user: {
                    name: 'Matheus',
                    email: 'matheus@gmail.com'
                }
            })
        }, 2000);
    });
}