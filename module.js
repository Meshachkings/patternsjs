// basic structure


// (function(){
// // declare private var and func

//     return{
//         // declare public var and func

//     }
// })();
//------------------------------------------------------------------------------------
// STANDARD MODULE PATTERN
// const UIctrl = (function(){
//     let _text = "Hello world";

//     const changeText = function(){
//         const element = document.querySelector('h1');

//         element.textContent = _text;
//     }

//     return{
//         callChangeText: function() {
//             changeText();

//             console.log(_text);
//         }
//     }
// })();

// UIctrl.callChangeText();
//----------------------------------------------------------------------------------
// REVEALING MODULE PATTERN
const itemCTRL = (function() {
    const items = [];

    function add(item){
        items.push(item);

        console.log("item added...")

    }

    function get(id){
        return items.find(item => {
            return item.id === id;
        })
    }

    function display(){
        // console.log(items)
        items.forEach(function(item){
            console.log(item.id,item.item);
        })
    }

    return {
        add: add,
        get: get,
        display: display
    }
})();

itemCTRL.add({id : 1, item: 'phone'});
itemCTRL.add({id : 2, item: 'ipad'});
itemCTRL.add({id : 3, item: 'i-phone'});

itemCTRL.display();
