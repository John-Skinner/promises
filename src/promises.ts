export class PromiseChain {
    getNestedPromises(): Promise<string> {
        return new Promise<string>((res, rej) => {
            let p1 = this.getPromisedTimer('promiseTimer1');
            p1.then((innerRes) => {
                console.log('completed p1:' + innerRes);
                let p2 = this.getPromisedTimer('promiseTimer2');
                // return a next promise for chaining.
                return p2;
            }).then((innerRes2) => {
                console.log('completed p2:' + innerRes2);
                let p3 = this.getPromisedTimer('promiseTimer3');
                // return yet another promise for chaining
                return p3;

            }).then((finalRes) => {
                console.log('last inner.  let outer promise know.');
                res('ok');
            })

        })
    }

    getPromisedTimer(message): Promise<any> {
        let p = new Promise<any>((pRes, pRej) => {
            setTimeout(() => {
                console.log('finished:' + message);
                pRes('resolved' + message);
            }, 10000);
        });
        return p;
    }

}