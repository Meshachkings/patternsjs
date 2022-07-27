// function EventObserver(){
//     this.observer = [];
// }

// EventObserver.prototype = {
//     subscribe: function(fn) {
//         this.observer.push(fn);
//         console.log(`you are now subscribed to ${fn.name}`)
//     },
//     unsubscribe: function(fn) {
//         this.observer = this.observer.filter(function(item){
//             if(item !== fn ) {
//                 return item;
//             }
//         });
//         console.log(`you are now unsubscribed from ${fn.name}`);

//     },
//     fire: function() {
//         this.observer.forEach(function(item) {
//             item.call();
//         });
//     } 
// }

// const click = new EventObserver();

// // Event Listeners
// document.querySelector('.sub-ms').addEventListener('click', function() {
//     click.subscribe(getCurMilliseconds);
// })

// document.querySelector('.unsub-ms').addEventListener('click', function() {
//     click.unsubscribe(getCurMilliseconds);
// })

// document.querySelector('.fire').addEventListener('click', function() {
//     click.fire();
// })

// // click handler
// const getCurMilliseconds = function() {
//     console.log(`current milliseconds: ${new Date().getMilliseconds()}`)
// }

// ---------------------------ES6---------------------------------
