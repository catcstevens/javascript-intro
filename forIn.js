function loopOverObject(object){
    for (let key in object) {
        console.log( `Key: ${key}; Value: ${object[key]}`)
    }
}

loopOverObject({foo: 'bar', ding: 'dong'})