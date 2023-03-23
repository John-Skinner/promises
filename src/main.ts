import { PromiseChain} from "./promises";

var promises = new PromiseChain();
let p = promises.getNestedPromises();
console.log('main promise started');
p.then((res)=> {
    console.log('result:' + res);
}).then(()=> {
    console.log(' after the promise');
})