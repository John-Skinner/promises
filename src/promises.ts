export class PromiseChain {
    getNestedPromises(): Promise<string> {
        return new Promise<string>((res, rej) => {
            setTimeout(() => {
                console.log('outer timeout end');
                let p = new Promise<string>((resInner, rejInner) => {
                    setTimeout(() => {
                        console.log('inner timeout end');
                        resInner('inner complete');
                    }, 5000)
                })
                res(p);
            }, 5000);
        })
    }
}