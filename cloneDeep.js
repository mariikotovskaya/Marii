const user = {
    name: "Marii",
    age: 25,
    city: "Saint Petersburg"
    hobbies: {
        drawing: {
            "graphic design": {
                tablet: true,
                pencil: true,
                program: {
                    photoshop: true,
                    "clip studio": true

                }
            }
        }
        reading: {
            books: {
                horror: false,
                folklore: true,
                classic: true,
                fantastic: true

            }
        }
    },
    "mental health": null,
    "favorite food": ["Salmon poke", "Nigiri with eel", "Mochi", {
        test: "test"
    }, null],
}
function deepClone(object) {
	const newObject = {};
	for(let key in object){
		if(typeof object[key] === 'object'  && object[key] !== null ){
		 newObject[key] = deepClone(object[key]);
		}else{
		 newObject[key] = object[key];
		}
	}
	return newObject;
}
console.log(deepClone(user))
